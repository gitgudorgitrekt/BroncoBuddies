const express = require('express');
const app = express();
const http = require('http').createServer

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


app.listen(80, () => console.log('Listening on port 80'));