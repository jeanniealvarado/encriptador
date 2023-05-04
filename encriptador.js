//function mostrarMensaje(valor) {
//   document.getElementById('resultado').innerHTML = valor
//}

function encriptar() {

    var mensaje = document.getElementById('encriptador').value.toLowerCase();

    var mensajeEncriptado = mensaje.replace(/e/img, 'enter');
    var mensajeEncriptado = mensajeEncriptado.replace(/o/img, 'ober');
    var mensajeEncriptado = mensajeEncriptado.replace(/i/img, 'imes');
    var mensajeEncriptado = mensajeEncriptado.replace(/a/img, 'ai');
    var mensajeEncriptado = mensajeEncriptado.replace(/u/img, 'ufat');

    document.getElementById('resultado').innerHTML = mensajeEncriptado
}

document.getElementById('encriptarbtn').addEventListener('click', function () {
    encriptar();
});

function desencriptar() {
    var mensajeEncriptado = document.getElementById('encriptador').value.toLowerCase();


    var mensajeDesencriptado = mensajeEncriptado.replace(/enter/img, 'e');
    var mensajeDesencriptado = mensajeDesencriptado.replace(/ober/img, 'o');
    var mensajeDesencriptado = mensajeDesencriptado.replace(/imes/img, 'i');
    var mensajeDesencriptado = mensajeDesencriptado.replace(/ai/img, 'a');
    var mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/img, 'u');

    document.getElementById('resultado').innerHTML = mensajeDesencriptado;
};

document.getElementById('desencriptarbtn').addEventListener('click', function () {
    desencriptar();
});

function copiarTexto() {
    var textoEncriptado = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(textoEncriptado);
}
document.getElementById('copiar').addEventListener('click', function () {
    copiarTexto();
})

function refreshPage() {
    location.reload()
}
document.getElementById('refresh').addEventListener('click', function () {
    refreshPage();
})