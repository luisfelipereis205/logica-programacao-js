const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const carros = [] // vetor carros

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)

    carros.push({modelo, preco}) //adiciona dados ao vetor carros
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    inModelo.focus()

    frm.btnListar.dispatchEvent(new Event("click"))  //dispara um evento de click em btn-listar (equivale a um click no botão na página)
})

frm.btnListar.addEventListener("click", () => {

    if(carros.length == 0){
        alert("Não há carros na lista")
        return //1️- interrompe a execução da função
                //2️- impede que o resto do código continue executando
    }

    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btnFiltrar.addEventListener("click", () => {
    
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if (maximo == 0 || isNaN(maximo)){
        return
    }
    // cria um novo vetor com os objetos que atendem a condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if(carrosFilter.length == 0) {
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }
    let lista = ""
    for (const carro of carrosFilter) {
    lista = lista + `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

frm.btnSimular.addEventListener("submit", () => {
    const desconto = Number(prompt("Qual o percentual de desconto: "))
    if(desconto == 0 || inNaN(desconto)) {
        return
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo, preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = ""
    for (const carro of carrosDesc) {
        lista = lista `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})