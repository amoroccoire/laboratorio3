const fs = require('fs');
const path = require('path');
const express = require('express');
const bp = require('body-parser');
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt()
const app = express();

app.use(express.static('priv'))
app.use(bp.json())
app.use(bp.urlencoded({
    extended: true
}))

app.listen(3000, () => {
	console.log('Escuchando en: http://localhost:3000')
});

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'))
});

//Para que desde index.html se conecte con mi javascript(verMardownHtml.js)
app.get('/verMarkdownHtml.js', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'verMarkdownHtml.js'))
})

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

app.get('/guardarMarkdown.js', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'guardarMarkdown.js'))
});

app.post('/priv', (request, response) => {
	
	fs.readFile('contenido.json', function(err, data){
		
		let contenido = {texts: []};

		if(err){
			response.send('Ha ocurrido un error');
		}

		contenido = JSON.parse(data);
		contenido.texts.Push({title: request.body.title, text: request.body.text});
		let json = JSON.stringify(contenido);

		fs.writeFile('contenido.json', json, function(err){
			if(err){
				response.send('Ha ocurrido un error');
			}
		});

	});

	response.setHeader('Content-type', 'html/plain');
	response.send('Su archivo a sido guardado');
});

