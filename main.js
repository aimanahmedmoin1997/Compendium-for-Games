const electron = require('electron')
const url = require('url')
const path = require('path')
const fs = require('fs');
const express = require('express');
const request = require('request');
var stream = fs.createWriteStream("imagesFile.txt", { flags: 'a' });
const app1 = express();

const { app, BrowserWindow } = electron;
let mainWindow;

console.log("WDa");

app1.use(express.json());
app1.use(express.urlencoded({extended: true}));

app1.use(express.static(__dirname + '/public'));

app1.use((err, req, res, next) => {
  res.status(500)
  .json({
    "error": err
  });
});

// Express Stuff

// let port = process.env.PORT || 3000;
// app1.listen(port, () => {
//   console.log('Listening on port ' + port);
// });

function showWindow() {

    mainWindow = new BrowserWindow({})
    mainWindow.setMenu(null);
    mainWindow.setTitle("Meme Viewer");
    mainWindow.setSize(800, 600, 1);
    mainWindow.setResizable(false)
}

app.on('ready', function () {

    showWindow();
});

