// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow



function createWindow() {
  // mainWindow = new BrowserWindow({
  //   width: 400,
  //   height: 600
  // })
  // mainWindow.loadFile('index.html')
  // mainWindow.on('closed', function () {
  //   mainWindow = null
  // })

  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL("https://electron.org.cn/")
  mainWindow.on('closed', function () {
  mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.