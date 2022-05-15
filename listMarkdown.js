function listMarkdown () {
	const url = 'http://localhost:3000/contenido';
	let listDiv = document.querySelector('#list');

	fetch(url).then(
		(response) => {return response.json();}
	).then(
		(data) => {console.log(data){
	);
}
