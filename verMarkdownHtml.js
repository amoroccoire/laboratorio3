function verMarkdownHtml() {
    const url = 'http://localhost:3000/contenido';
    var markdownJson = "";
    
    fetch(url).then(
        response => {
            markdownJson = response.json()
        }
    );
}