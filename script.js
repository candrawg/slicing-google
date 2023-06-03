function search() {
	let { value } = document.getElementById('searchInput');

	const url = 'https://google.com/search?q=';
	if (!value) {
		url = '#';
	}
	location.replace(url + value);
}
