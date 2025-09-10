const botonCambiarColor = document.getElementById('cambiarColorBtn');

botonCambiarColor.addEventListener('click', function() {
    document.body.style.backgroundColor = "#BFDCFF"
});

const mensaje = document.getElementById('mensaje');

botonCambiarColor.addEventListener('mouseover', function() {
    mensaje.textContent = "¡Peek a Boo!";
});

const pagina2 = document.getElementById('pagina2Btn');

pagina2.addEventListener('click', function() {
    window.location.href = "main/pagina2.html";
});

const iragemini = document.getElementById('geminiBtn');

iragemini.addEventListener('click', function() {
    window.location.href = "https://gemini.google.com/";
});

const botonesnavvar1 = document.querySelectorAll('.navvar1Btn');

function manejarClickBoton(evento) {
    botonesnavvar1.forEach(boton => boton.classList.remove('active'));

    evento.target.classList.add('active');
}

botonesnavvar1.forEach(boton => {
    boton.addEventListener('click', manejarClickBoton);
});