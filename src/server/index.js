const express = require('express');
const app = express();

/** middle ware */
app.use(function(req, res, next){
    console.log('heree');
    next();
});

app.use(express.static('dist/public'));
app.listen(3003, () => console.log(`Example app listening on port !`));

/*import Webserver from './web.server';
const webserver = new Webserver();

webserver.start().then(() => {
    console.log('started') 
}).catch(e => {

});*/