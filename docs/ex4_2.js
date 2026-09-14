const frm = document.querySelector("form")
const resultado = document.querySelector("#resultado")
const resultadoTitulo = document.querySelector(".resultado h2")
const resultadoTexto = document.querySelector(".resultado p")


// cálculo
frm.addEventListener("submit", (e) => {

    e.preventDefault()

    // Obtém os valores dos campos
    const nome = frm.inName.value.trim()
    const altura = Number(frm.inAltura.value)

    const sexoMasculino = frm.inMasculino.checked


    // Verifica a altura
    if (altura < 0.5 || altura > 2.5) {

        alert("Digite uma altura válida entre 0,50 m e 2,50 m.")

        frm.inAltura.focus()

        return
    }

    // Calcula o peso ideal
    let pesoIdeal
    let fator

    if (sexoMasculino) {

        fator = 22

    } else {

        fator = 21

    }

    pesoIdeal = fator * Math.pow(altura, 2)

    // Exibe o resultado
    resultadoTitulo.innerText =
        `${nome}, seu peso ideal é:`

    resultadoTexto.innerHTML =
        `<strong>${pesoIdeal.toFixed(2)} kg</strong>
        <br>
        <span>
            Cálculo: ${fator} × ${altura.toFixed(2)}²
        </span>`

    // Mostra o card
    resultado.classList.add("mostrar")
})


// Evento de limpar
frm.addEventListener("reset", () => {
    resultado.classList.remove("mostrar")
    resultadoTitulo.innerText = ""
    resultadoTexto.innerText = ""
})