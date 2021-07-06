const boton_convertir = document.getElementById('calcular')

boton_convertir.addEventListener('click', function () {
    let numero = document.getElementById('elemento').value;
    document.getElementById('numero1').innerText = parseInt(numero) + 1;
    document.getElementById('numero2').innerText = parseInt(numero) + 2;
    document.getElementById('numero3').innerText = parseInt(numero) + 3;
    document.getElementById('numero4').innerText = parseInt(numero) + 4;
})

