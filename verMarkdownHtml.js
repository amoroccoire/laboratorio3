function verMarkdownHtml() {
    const url = 'http://localhost:3000/contenido';
    var contenidoDiv = document.querySelector('#contenido');
    var textoMarkdown = "";  //Aquí se almacenará el contenido Markdown
    var markdownJson = "";  //Para almacenar la respuesta 
    
    fetch(url).then(
        response => {
            markdownJson = response.json()
        }
    );
}