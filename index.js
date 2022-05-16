const fs = require('fs');
const path = require('path');
const express = require('express');
const bp = require('body-parser');
const { response } = require('express');
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
    fs.readFile(path.resolve(__dirname, 'priv/contenido.json'), 'utf-8',
    (err, data) => {
        if(err) {
            console.error(err)
            response.status(500).json({
                error: 'Error'
            })
            return
        }
        console.log(request.body)
        let markDownText = request.body.text
        //Mostrar el markDown a la consola
        console.log(markDownText)
        let htmlText = md.render(markDownText)
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify({
            text: htmlText
        }))
    })
})