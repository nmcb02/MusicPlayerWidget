const indexPath = require('path').join(__dirname, '../index.html');
const srcPath = require('path').join(__dirname, './');

const { app, BrowserWindow } = require('electron');
require('electron-reload')('.', {
  watch: [indexPath, srcPath]
});

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile(indexPath);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});