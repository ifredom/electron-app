// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require('electron')

const appInfoBtn = document.getElementById('app-info')

appInfoBtn.addEventListener('click', () => {
  console.log("here");

  ipcRenderer.send('get-app-path')
})

ipcRenderer.on('got-app-path', (event, path) => {
  const message = `This app is located at: ${path}`
  document.getElementById('got-app-info').innerHTML = message
})