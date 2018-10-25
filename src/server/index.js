import Webserver from './web.server';

const webserver = new Webserver();

webserver.start().then(() => {
    console.log('started') 
}).catch(e => {

});
// "scripts": {
    //   "build": "npm run build-server && npm run build-client",
    //   "build-server": "babel src/server --out-dir ./dist",
    //   "build-client": "babel src/client --copy-files --out-dir ./dist/public",
    //   "start": "node ./dist/index.js"
    // },