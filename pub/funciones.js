function guardarMarkdown(){
    
    //obtener los datos: titulo y contenido
    const titulo = document.querySelector('#tituloMarkdown').value
    const texto = document.querySelector('#contenidoMarkdown').value
    
    if (titulo == '' || texto = '')
        return false;

    const url = 'http://localhost:3000/archivos'
    const datos = {
        title: titulo,
        text: texto
    }
    console.log(datos);

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    }

    fetch(url, request)
        .then(
            response => response.text();
        ).then(
            data => {document.querySelector('#mensaje').innerHTML = data};
            //#mensaje sera una etiqueta que contenga el mensaje del servidor
            //no debe tener contenido y estara entre el espacio para ingresar texto
            //y el boton de registrar
        )
}
