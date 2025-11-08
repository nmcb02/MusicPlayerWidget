const { app, BrowserWindow } = require('electron');
const path = require('path');

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  watch: [
    path.join(__dirname, 'src'),
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'dist')   // 👈 watch the bundle output
  ]
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

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});