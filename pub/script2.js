function guardarMarkdown(){
    
    //obtener los datos: titulo y contenido
    const titulo = document.querySelector('#tituloMarkdown').value
    const texto = document.querySelector('#contenidoMarkdown').value

    const url = 'http://localhost:3000/'
    const datos = {
        title: titulo
        text: texto
    }
    console.log(datos)
}
