const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

// fs 모듈을 사용하여 파일을 읽는 함수 노출
contextBridge.exposeInMainWorld('electron', {
    readFile: (filePath) => {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });
    },
    // 다른 Electron 및 Node.js API를 여기에 추가할 수 있습니다.
});

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
});
