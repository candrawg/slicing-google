// Light Mode
if (localStorage.getItem('theme') == 'light') {
	setLightMode();
}

function setLightMode() {
	let icon = '';
	let isLight = document.body.classList.toggle('light-mode');

	if (isLight) {
		icon = '<i class="material-icons ">brightness_high</i>';
		localStorage.setItem('theme', 'light');
	} else {
		icon = '<i class="material-icons ">brightness_2</i>';
		localStorage.removeItem('theme');
	}
	document.getElementById('lightBtn').innerHTML = icon;
}

// Search
function search() {
	let { value } = document.getElementById('searchInput');

	const url = 'https://google.com/search?q=';
	if (!value) {
		url = '#';
	}
	location.replace(url + value);
}

function handleKeyPress(event) {
	if (event.keyCode === 13) {
		// Panggil fungsi yang diinginkan di sini
		search();
	}
}
