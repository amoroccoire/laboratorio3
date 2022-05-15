function verMarkdownHtml(tituloMarkdown) {
    const url = 'http://localhost:3000/contenido';
    var contenidoDiv = document.querySelector('#contenido');
    var textoMarkdown = "";  //Aquí se almacenará el contenido Markdown
    var markdownJson = "";  //Para almacenar la respuesta 
    
    fetch(url).then(
        response => {
            markdownJson = response.json()
        }
    );

    //Bucle que recorra en el array json para almacenar el contenido respecto al título
    for(let i = 0; i < markdownJson.texts.length; i++) {
        if(tituloMarkdown == markdownJson.texts[i].title) {
            textoMarkdown = markdownJson.texts[i].text;
        }
    }
    contenidoDiv.innerHTML = textoMarkdown;
}