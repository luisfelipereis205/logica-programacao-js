const frm = document.querySelector("form")
const saidaAluno = document.querySelector("#outAluno")
const saidaMedia = document.querySelector("#outMedia")
const saidaRecuperacao = document.querySelector("#outRecuperacao")
const saidaMediaFinal = document.querySelector("#outMediaFinal")
const saidaSituacao = document.querySelector("#outSituacao")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inName.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const nota3 = Number(frm.inNota3.value)
    const nota4 = Number(frm.inNota4.value)

    // Calculando a média das quatro notas

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    // Mostrando o nome e a média

    saidaAluno.innerText = `Aluno: ${nome}`

    saidaMedia.innerText = `Média das notas: ${media.toFixed(1)}`

    // Verificando a situação

    if (media >= 7) {

        // Aluno aprovado

        saidaRecuperacao.innerText = "Não foi necessário fazer recuperação."

        saidaMediaFinal.innerText = `Média final: ${media.toFixed(1)}`

        saidaSituacao.innerText = `Parabéns ${nome}! Você foi aprovado(a)!`

        saidaSituacao.style.color = "green"

    }

    else if (media >= 4) {

        // Aluno está de recuperação

        // Verificando se a nota de recuperação foi preenchida

        if (frm.inRecuperacao.value === "") {

            saidaRecuperacao.innerText = "O aluno precisa fazer recuperação."

            saidaMediaFinal.innerText = ""

            saidaSituacao.innerText = "Informe a nota da recuperação."

            saidaSituacao.style.color = "orange"

            return
        }

        const recuperacao = Number(frm.inRecuperacao.value)

        saidaRecuperacao.innerText = `Nota de recuperação: ${recuperacao.toFixed(1)}`

        // Calculando a média final

        const mediaFinal = (media + recuperacao) / 2

        saidaMediaFinal.innerText = `Média final: ${mediaFinal.toFixed(1)}`

        // Verificando a média final

        if (mediaFinal >= 5) {

            saidaSituacao.innerText = `Parabéns ${nome}! Você foi aprovado(a) na recuperação!`
            saidaSituacao.style.color = "green"

        } else {

            saidaSituacao.innerText = `Ops ${nome}! Você foi reprovado(a).`
            saidaSituacao.style.color = "red"
        }
    }

    else {

        // Aluno reprovado

        saidaRecuperacao.innerText = "Não foi necessário fazer recuperação."

        saidaMediaFinal.innerText = `Média final: ${media.toFixed(1)}`

        saidaSituacao.innerText = `Ops ${nome}! Você foi reprovado(a).`

        saidaSituacao.style.color = "red"
    }
})