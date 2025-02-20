// Funzione per generare un colore casuale in formato esadecimale
function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0;i < 6;i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Cambia il colore di sfondo della pagina
function changeBackgroundColor() {
	const randomColor = getRandomColor();
	document.body.style.backgroundColor = randomColor;
}

// Esegui la funzione quando la pagina viene caricata
window.onload = changeBackgroundColor;
