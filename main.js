const {app, BrowserWindow, Menu, ipcMain} = require('electron');
const os = require('os');

let mainWindow;
const meunTemplate = [
    {
        label: '操作',
        submenu: [
            {
                label: '访问项目',
                submenu: [
                    {
                        label: 'Gitee库地址(最新版)',
                        click: function () {
                            require('electron').shell.openExternal('https://gitee.com/TangHanF/excel_function_manual_webpack');
                        }
                    },
                    {
                        label: 'GitHub库地址（最新版）',
                        click: function () {
                            require('electron').shell.openExternal('https://github.com/TangHanF/excel_function_manual_webpack');
                        }
                    },
                    {
                        label: 'Gitee库地址(第一版)',
                        click: function () {
                            require('electron').shell.openExternal('https://gitee.com/TangHanF/excel_function_manual');
                        }
                    },
                    {
                        label: 'GitHub库地址（第一版）',
                        click: function () {
                            require('electron').shell.openExternal('https://github.com/TangHanF/excel_function_manual');
                        }
                    }
                ],

            },
            {
                label: '返回',
                click: () => {
                    console.log('返回');
                }
            },
            {
                label: '前进',
                click: () => {
                    console.log('前进');
                }
            }
        ],
    },
    {

        label: '编辑',
        submenu: [ {
            label: '复制',
            accelerator: 'CmdOrCtrl+C',
            selector: 'copy:'
        }, {
            label: '粘贴',
            accelerator: 'CmdOrCtrl+V',
            selector: 'paste:'
        }, {
            label: '全选',
            accelerator: 'CmdOrCtrl+A',
            selector: 'selectAll:'
        }]
    }
];

function createWindow() {
    // 创建一个浏览器窗口.
    mainWindow = new BrowserWindow();

    // 然后在app内加载"index.html"
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // mainWindowdow.loadURL('https://tanghanf.github.io/excel_function_manual_webpack/#/');

    // 打开"开发者工具".
    // mainWindow.webContents.openDevTools()
    // 当窗口关闭时触发事件.
    mainWindow.on('closed', function (event, cmd) {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    meunTemplate.unshift({
        label: app.getName(),
        submenu: [
            {role: 'about'},
            {type: 'separator'},
            {role: 'quit'}
        ]
    });
    const menu = Menu.buildFromTemplate(meunTemplate);
    Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

//最大化
ipcMain.on('max-window', () => {
    mainWindow.maximize();
});

