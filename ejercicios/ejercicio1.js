window.onload = () => {
    // Aquí obtengo los elementos que hay por el don a través de su identificador
    const input_euros = document.getElementById('euros')
    const span_pesetas = document.getElementById('pesetas')
    const boton_convertir = document.getElementById('convertir')

    // Le establezco un evento al botón. En este caso cuando pulsen en el botón haré una
    // operación matemática

    boton_convertir.addEventListener('click', () => {
        const pesetas = 166.386

        // Recuperamos el valor del input y como es una cadena de texto la convertimos a un
        // tipo de dato numérico en este caso a un número con decimales
        const total = pesetas * parseFloat(input_euros.value)

        // Por último añadimos el resultado a la etiqueta span, como espera una cadena de texto
        // convertimos el valor numérico a una cadena de texto
        span_pesetas.innerText = total.toString()
    })
}