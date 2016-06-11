const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');
let win;

function createWindow () {
  win = new BrowserWindow({
    frame        : false,
    width        : 1200,
    height       : 700,
    'min-width'  : 1100,
    'min-height' : 650
  });

  win.loadURL(path.join('file://', __dirname, '/index.html'));
  win.webContents.openDevTools();

  var template = [{
    label   : 'Application',
    submenu : [
      { label: 'About Application', selector: 'orderFrontStandardAboutPanel:' },
      { type: 'separator' },
      { label: 'Quit', accelerator: 'Command+Q', click: function () { app.quit(); } }
    ]
  }, {
    label   : 'Edit',
    submenu : [
      { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
      { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
      { type: 'separator' },
      { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
      { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
      { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
      { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' }
    ]
  }];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (null === win) {
    createWindow();
  }
});
