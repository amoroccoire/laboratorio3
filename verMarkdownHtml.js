function verMarkdownHtml(tituloMarkdown) {
    const url = 'http://localhost:3000/contenido';
    var contenidoDiv = document.querySelector('#contenido');
    var markdownJson = "";  //Para almacenar la respuesta 
    
    fetch(url).then(
        (response) => {
            return response.json()
        }
    ).then(
        (data) => {
            let contentMarkdown = "";  //Aquí se almacenará el contenido Markdown
            
            //Bucle que recorra en el array json para almacenar el contenido respecto al título
            for(let i = 0; i < markdownJson.texts.length; i++) {
                if(tituloMarkdown == markdownJson.texts[i].title) {
                    contentMarkdown = `<br><h2>${data.texts[i].text}</h2>`;
                }
            }
            contenidoDiv.innerHTML = contentMarkdown;
        }
    );
}