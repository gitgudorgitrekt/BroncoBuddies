const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http').createServer

mongoose.connect('mongodb+srv://Owner:gitgudbronco@cluster0.dmveh.mongodb.net/students')

//basic hello world function
app.get('/', (req, res) => {
	res.send('Hello world');
})

//test function
app.get('/members', (req, res) => {
	res.send('Benjamin Aldrich, Amal Anu, William Armstrong, Clarence-Hugues Domond, Celine Mangahas');
})

//HTTP API for Amal Anu
app.get('/amalanu', (req, res) => {
	res.send('This is my url');
})

app.get('/main', (req, res) => {
	res.send('Welcome to Bronco Buddies, find your friends and gallop away!');
})

//xml2js function for Amal Anu
var parseString = require('xml2js').parseString;
var xml = "<root>This is a test xml</root>"
var json;
parseString(xml, function (err, result) {
	json = result;
    console.dir(result);
});
app.get('/xml2js-test', (req, res) => {
	res.send(json);
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);