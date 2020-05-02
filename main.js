const { app, BrowserWindow } = require('electron')

function createWindow() {
    const myWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    myWindow.loadFile('index.html')
}
    app.whenReady().then(createWindow)

    // const tray = new Tray('/my-icon')
    //
    // const contextMenu = Menu.buildFromTemplate([
    //     {label: 'Cool', type: 'radio'},
    // ])
    //
    // tray.setToolTip('Electron rocks!')
