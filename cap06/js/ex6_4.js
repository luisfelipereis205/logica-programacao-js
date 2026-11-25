const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const criancas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inName.value
    const idade = Number(frm.inIdade.value)

    criancas.push({nome, idade});

    frm.reset() // limpa os campos do formulário e restaura seus valores iniciais.
    frm.inNome.focus() // coloca o cursor novamente no campo de nome.
    frm.btListar.dispatchEvent(new Event("click")) // Dispara um novo evento ao enviar o formulário. No caso ele meio que aperta o botão listar todos.
})

frm.btListar.addEventListener("click", () => { // Aqui nesse bloco é  responsável por mostrar todas as crianças cadastradas.
    
    // Primeiro temos que verificar se o vetor está vazio

    if (criancas.length == 0){
        alert("Não há crianças registradas na lista")
        return 
    }

    let lista = "" // para concatenar a lista

    for (const crianca of criancas) {
        const {nome, idade } = crianca
        lista += nome + "-" + idade + " anos\n"
    }

    resp.innerText = lista;

})

frm.btResumir.addEventListener("click", () => { 
    if(criancas.length == 0){
        alert("Não há crianças registradas na lista")
        return 
    }

    const copia = [...criancas] // aqui utilizando o metodo spread

    copia.sort((a, b) => a.idade - b.idade) // aqui ele ordena pela idade.

    let resumo = ""
    let aux = copia[0].idade // menor idade do vetor ordenado.

    let nomes = [] // vetor para inserir nomes de cada idade

    for (const crianca of copia){
        const {nome, idade} = crianca
        if (idade == aux) {// se é da mesma idade auxiliar
            nomes.push(nome)
        }  
        else {
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade  // obtém a nova idade na ordem
            nomes = []  // limpa o vetor dos nomes
            nomes.push(nome) // adiciona o primeiro da nova idade
        }
    }

    // adicina a ultima criança

    resumo += aux + " ano (s): " + nomes.length + " criança(s) - "
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resumo;
})