const app = require('app');
const path = require('path');
const BrowserWindow = require('browser-window');
const Menu = require('menu');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function () {
  if ('darwin' !== process.platform) {
    app.quit();
  }
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    frame        : false,
    width        : 1200,
    height       : 700,
    'min-width'  : 1100,
    'min-height' : 650
  });
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));
  mainWindow.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  // Create the Application's main menu
  var template = [{
    label   : 'Application',
    submenu : [
      { label: 'About Application', selector: 'orderFrontStandardAboutPanel:' },
      { type: 'separator' },
      { label: 'Quit', accelerator: 'Command+Q', click: function () { app.quit(); } }
    ]}, {
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
});
