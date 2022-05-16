function guardarMarkdown(){
    
    //obtener los datos: titulo y contenido
    const titulo = document.querySelector('#tituloMarkdown').value
    const texto = document.querySelector('#contenidoMarkdown').value

    const url = 'http://localhost:3000/priv'
    const datos = {
        title: titulo
        text: texto
    }
    console.log(datos)

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    }

    fetch(url, request)
        .then(
            response => response.json()
        
        ).then(
            data => {document.querySelector('#htmlCode').innerHTML = data}
        )
}
