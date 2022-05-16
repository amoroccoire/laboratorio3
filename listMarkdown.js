function listMarkdown () {
	const url = 'http://localhost:3000/contenido';
	let listDiv = document.querySelector('#list');

	fetch(url).then(
		(response) => {return response.json();}
	).then(
		(data) => {
			let listHtml = '';
			for (let i = 0; i < data.texts.length; i++){
				let title = data.texts[i].title;
				listHtml += `<h3>${title}</h3>\n<button onclick='verMarkdownHtml("${title}")'>Ver Markdown</button><hr>\n`;
			}
		}
	);
}
