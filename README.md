<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>
    <tbody>
        <tr><td colspan="3"><span style="font-weight:bold;">Formato</span>: Guía de Práctica de Laboratorio</td></tr>
        <tr><td><span style="font-weight:bold;">Aprobación</span>:  2022/03/01</td><td><span style="font-weight:bold;">Código</span>: GUIA-PRLB-001</td><td><span style="font-weight:bold;">Página</span>: 1</td></tr>
    </tbody>
</table>
</div>

<div>

<div align="center">
<span style="font-weight:bold;">INFORME DE LABORATORIO</span><br />
<span>(formato estudiante)</span>
</div>

<table>
<theader>
<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
<tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 2</td></tr>
<tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">Ajax y NodeJS</td></tr>
<tr>
<td>NÚMERO DE PRÁCTICA:</td><td>03</td><td>AÑO LECTIVO:</td><td>2022 A</td><td>NRO. SEMESTRE:</td><td>III</td>
</tr>
<tr>
<td>FECHA DE PRESENTACIÓN:</td><td>16/05/2022</td><td>HORA DE PRESENTACIÓN:</td><td colspan="3">11:50</td>
</tr>
<tr><td colspan="3">INTEGRANTE(s):
<ul>
<li>Chaisa/Fernández, Anthony Leonel - achaisa@unsa.edu.pe</li>
<li>Moroccoire/Pacompia, Anthony Marcos - amoroccoire@unsa.edu.pe</li>
<li>Diaz/Portilla, Carlo Rodrigo - cdiazpor@unsa.edu.pe</li>
<li>Ticona/Hareth, Anthony Joaquín - aticonaha@unsa.edu.pe</li>
<li>Almonte/Cuba, Axel Frank - aalmontecu@unsa.edu.pe</li>
</ul>
</td>
<td>NOTA:</td><td colspan="2"></td>
</<tr>
<tr><td colspan="6">DOCENTE(s):
<ul>
<li>Richart Smith Escobedo Quispe - rescobedoq@unsa.edu.pe</li>
</ul>
</td>
</<tr>
</tbody>
</table>

<table>
<theader>
<tr><th>Solución y resultados</th></tr>
</theader>
<tbody>
  <tr><td>I. SOLUCIÓN DE EJERCICIOS/PROBLEMAS
      <h3>I. Función listar</h3>
      Realizando está función pude darme cuenta y aprender muchas cosas como la importancia de trabajar con funciones asíncronas cuando hacemos fetch a otros contenidos, para que esta función pueda funcionar de una manera correcta tuve que hacer uso de <code>.then(...)</code> para poder trabajar los contenidos a los cuales hicimos fetch.<br>
      Nosotros haciamos fetch al archivo <code>contenido.json</code> que se encontraba en la url <code>http://localhost:3000/contenido</code>, este contenido teniamos que aplicarle la función <code>.json()</code> para poder trabajar los contenidos de una forma más cómoda y poder extraer los títulos de la siguiente manera <code>data.texts[i].title</code> y poder iterar en cada titulo, luego con los strings literales ir construyendo código html que generaría botones para visualizar el contenido <code>Ver Markdown</code> y por último llamaría a la función <code>verMarkdownHtml('title')</code> enviando así el titulo del contenido que queremos ver.
  </td></tr>

  <tr><td>II. SOLUCIÓN DEL CUESTIONARIO<br>
      <h4>En el Ejemplo "Hola Mundo" con NodeJS. ¿Qué pasó con la línea: "Content type ..."?</h4>
      <h4>En los ejercicios. ¿En qué lugar debería estar el archivo poema.txt?</h4>
      <h4>¿Entiende la expresión regular en el código y se da cuenta de para qué es útil?</h4>
      <h4>Note que la respuesta del servidor está en formato JSON, ¿Habrá alguna forma de verla directamente?</h4>
    </td></tr>            
  <tr><td>III.CONCLUSIONES 
    </td></tr>
</tbody>
</table>

<table>
<theader>
<tr><th>RETROALIMENTACIÓN GENERAL
    </th></tr>
</theader>
<tbody>
<tr><td>
    <pre>                                                                   </pre>
    <pre>                                                                   </pre>
    </td></tr>
</tbody>
</table>
    
</div>    
<p><b>REFERENCIAS Y BIBLIOGRAFÍA</b></p>
<ul>
    <li>https://www.w3schools.com/nodejs/nodejs_intro.asp</li>
    <li>https://nodejs.org/en/docs/guides/getting-started-guide/</li>
    <li>https://www.w3schools.com/js/js_api_fetch.asp</li>
    <li>https://expressjs.com/es/</li>
    <li>https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch</li>
    <li>https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction</li>
</ul>
