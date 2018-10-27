const { app, BrowserWindow, shell, ipcMain, Menu } = require('electron');
const { StringDecoder } = require('string_decoder');
const url = require('url')
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require ('fs');

//require mapper function. Function call format: readDir(rootDirectory, done());
const { readDir, done } = require('../server/fs-mapper');
// axios to send content to the server
const axios = require('./api');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createMainWindow () {
  mainWindow = new BrowserWindow({
		backgroundColor: '#F7F7F7',
		minWidth: 880,
		height: 860,
		width: 1280
	});

	// mainWindow.loadURL(
  // 	isDev
  // 		? 'http://localhost:3000'
  // 		: `file://${path.join(__dirname, '../build/index.html')}`,
  // );

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  
	if (isDev) {
    const {
			default: installExtension,
			REACT_DEVELOPER_TOOLS,
			REDUX_DEVTOOLS,
		} = require('electron-devtools-installer');
    
		installExtension(REACT_DEVELOPER_TOOLS)
			.then(name => {
        console.log(`Added Extension: ${name}`);
			})
			.catch(err => {
        console.log('An error occurred: ', err);
			});
      
		installExtension(REDUX_DEVTOOLS)
      .then(name => {
        console.log(`Added Extension: ${name}`);
      })
			.catch(err => {
        console.log('An error occurred: ', err);
      });
    mainWindow.webContents.openDevTools();      
	}
  
	mainWindow.once('ready-to-show', () => {
    mainWindow.show();

		ipcMain.on('open-external-window', (event, arg) => {
      shell.openExternal(arg);
		});
	});
}

let terminalWindow
async function createTerminalWindow() {
  const decoder = new StringDecoder('utf8');
  //temp root targets project directory
  //**TODO: get rootDir from shell command**
  const rootDir = path.join(__dirname, '..');

  //run fs-mapper module and map dir on window open
  //**TODO: pass variables from shell script that echos PWD**
  fs.existsSync('./directory.json') ? null : await readDir(rootDir, done(__dirname));

  let directory = null;
  let content = null;

  if (fs.existsSync('./directory.json') && fs.existsSync('./content.json')) {
    directory = await decoder.write(fs.readFileSync('./directory.json'));
    content = await decoder.write(fs.readFileSync('./content.json'));
  }

  if (directory !== null && content !== null) {
    axios({
      method: 'post',
      url: '/api/electron',
      data: {
        directory: JSON.stringify(directory),
        content: JSON.stringify(content)
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.error('Error:', err.data);
      throw err;
    });
  }
  // Open the DevTools.
  terminalWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  terminalWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    terminalWindow = null;
  });
}

generateMenu = () => {
  const template = [
    {
      label: 'File',
			submenu: [{ role: 'about' }, { role: 'quit' }],
		},
		{
			label: 'Edit',
			submenu: [
				{ role: 'undo' },
				{ role: 'redo' },
				{ type: 'separator' },
				{ role: 'cut' },
				{ role: 'copy' },
				{ role: 'paste' },
				{ role: 'pasteandmatchstyle' },
				{ role: 'delete' },
				{ role: 'selectall' },
			],
		},
		{
			label: 'View',
			submenu: [
				{ role: 'reload' },
				{ role: 'forcereload' },
				{ role: 'toggledevtools' },
				{ type: 'separator' },
				{ role: 'resetzoom' },
				{ role: 'zoomin' },
				{ role: 'zoomout' },
				{ type: 'separator' },
				{ role: 'togglefullscreen' },
			],
		},
		{
			role: 'window',
			submenu: [{ role: 'minimize' }, { role: 'close' }],
		},
		{
			role: 'help',
			submenu: [
				{
					click() {
						require('electron').shell.openExternal(
							'https://github.com/Benji-Leboe/codeCast',
						);
					},
					label: 'Learn More',
				},
				{
					click() {
						require('electron').shell.openExternal(
							'https://github.com/Benji-Leboe/codeCast/issues',
						);
					},
					label: 'File Issue on GitHub',
				},
			],
		},
	];
	Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.on('ready', () => {
  createMainWindow();
	generateMenu();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
	if (mainWindow === null) {
		createMainWindow();
	}
});

ipcMain.on('load-page', (event, arg) => {
	mainWindow.loadURL(arg);
});
