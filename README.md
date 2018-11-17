# Final Project

## Add to this README if you make changes we all need to know about

## To set up:
- Fork and clone this repo
- Run `npm run install-all` in root directory
- In Electron App directory run `npm run rebuild-pty` to rebuild the node-pty binaries against the Electron node version
- For development, run `npm start` in the **ROOT DIRECTORY**. This will run the react scripts in `/client` and the server in `/server/server.js`
- For Electron app to work **make sure that the server is running**. If server not active on Heroku, run locally
- **COMMIT OFTEN AND ATOMICALLY**. Focus on one component at a time. 
- Load the component you're working on in to App.jsx inside the empty div. This will render it on `localhost:3000` for you to reference. Nodemon will update any time you make changes.
- **DO NOT MAKE CHANGES TO THE SERVER WITHOUT CONFIRMING WITH BENJI PLS**