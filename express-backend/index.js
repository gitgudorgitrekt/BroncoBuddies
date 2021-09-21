const express = require('express');
const app = express();
const http = require('http').createServer

app.get('/', (req, res) => {
	res.send('Hello world');
})

app.get('/members', (req, res) => {
	res.send('Benjamin Aldrich, Amal Anu, William Armstrong, Clarence-Hugues Domond, Celine Mangahas');
})

app.listen(80, () => console.log('Listening on port 80'));

