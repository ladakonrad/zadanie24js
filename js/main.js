let button;

function alert() {
    console.log('Klik działa!');
}

button = document.querySelector('button').onclick = alert;