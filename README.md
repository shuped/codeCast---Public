# CodeCast

### CodeCast is a live streaming platform designed by coders, for coders, and increases the ability to understand a project being shared. 
CodeCast wraps extra functionality around an existing YouTube live stream to provide an interactive environment for the viewer to engage with a coding project being streamed. 
Along with the live stream video, CodeCast can broadcast:

- A chosen project directory, which is displayed to viewers as an interactive file tree component

- The contents of any file on request, with live updates when the file is changed

- The complete streamed history of the broadcasters terminal output, which can be scrolled through at ease and closely examined

- A fully-featured chat component for viewers, with desktop notifications for the broadcaster when they are mentioned.

## To set up:
- Fork and clone this repo
- Run `npm run install-all` in root directory. If 'concurrently' isn't installed globally, run 'npm install' first.
- In Electron App directory run `npm run rebuild-pty` to rebuild the node-pty binaries against the Electron node version
- For development, run `npm start` in the **ROOT DIRECTORY**. This will run the react scripts in `/client` and the server in `/server/server.js`
- For Electron app to work **make sure that the server is running**. If server not active on Heroku, run locally
- **COMMIT OFTEN AND ATOMICALLY**. Focus on one component at a time. 
- Load the component you're working on in to App.jsx inside the empty div. This will render it on `localhost:3000` for you to reference. Nodemon will update any time you make changes.
