const { app, BrowserWindow, shell, ipcMain, Menu } = require('electron');
const { StringDecoder } = require('string_decoder');
const url = require('url')
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require ('fs');
const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');
const directoryWatcher = require('./src/fileServices/directoryWatcher')
const chokidar = require('chokidar');
const { readDir, done } = require('./src/fileServices/fs-mapper.js');

// axios to send content to the server
const axios = require('./src/redux/ducks/api');

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

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'public/build/index.html'),
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
	});
}

let terminalWindow, watcher
function createTerminalWindow() {
	terminalWindow = new BrowserWindow({
		backgroundColor: '#F7F7F7',
		minWidth: 40,
		height: 800,
		width: 800
	});

	terminalWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'indexTerminal.html'),
		protocol: 'file:',
		slashes: true
	}));
	 
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

	let projectRootDirectroy = path.join(__dirname, '..')

	chokidar.watch('.', {
		ignored: /node_modules|\.git/,
		persistent: true,
		ignoreInitial: true
		// followSymlinks: false,
		// useFsEvents: false,
		// usePolling: false
	}).on('all', function(event, pathArg) {
		const eventMethods = {
			'add': (filePath) => {
			console.log('add', filePath)
				
			},
			'addDir': (filePath) => {
				console.log('addDir', filePath)

			},
			'change': (filePath) => {
				console.log('change', filePath)

			},
			'unlink': (filePath) => {
				console.log('unlink', filePath)

			}
		}
		console.log('event, path:', event, pathArg )  
		// event specific behavior
		eventMethods[event] ? eventMethods[event](pathArg) : console.log('Event missed:', event);
	})
		.on('ready', async function() {
			console.log('Ready');
			readDir(__dirname, done(__dirname))
		//  TODO: Move the axios to here instead of fs-mapper
	});
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
	if (mainWindow === null) {
		createMainWindow();
	}
});

ipcMain.on('terminalOpen', (event, arg) => {
	console.log('terminalOpen in createWindow')
	createTerminalWindow()
});