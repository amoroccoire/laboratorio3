const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

add.use(express.static('priv'));
app.use(express.static('pub'));//para que index.js acceda a pub/index.html

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")

});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/contenido', (request, response) => {
	response.header('Content-Type', 'application/json');
	response.sendFile(path.resolve(__dirname, 'priv/contenido.json'));
});

app.get('/listMarkdown.js', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'listMarkdown.js'))
});

app.post('/markdown', (request, response) => {
	let markDownText = request.body.text;
	let htmlText = md.render(markDownText);
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify({
		markdown: htmlText
	}))
});

//parte encargada de guardar el markdown - falta probarlo
app.post('/archivos', (request, response) => {
	fs.appendFile(request.body.title + '.md', request.body.text, function (err){
		if (err){
			console.error(err);
			response.status(500).send('Ha ocurido un error');
		}
	});

	response.setHeader('Content-type', 'html/plain');
	response.send('Su archivo a sido guardado');
});


