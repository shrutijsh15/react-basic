const express = require('express');
const app = express();

export default class WebServer{
    constructor(){
       app.use(express.static('dist/public'));
    }
    
    start(){
        console.log('here')
        return new Promise((resolve, reject) => {
            try{
                this.server = app.listen(3003, () => {
                    resolve();
                });
            } catch(e){
                console.error(e)
                reject(e);
            }
        });
    }
}