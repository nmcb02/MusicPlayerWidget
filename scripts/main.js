const { app, BrowserWindow } = require('electron');
const { electron } = require('process');
require('electron-reload')(__dirname, {
    electron: require('${__dirname}/node_modules/electro')
});

function createWindow(){
    
}