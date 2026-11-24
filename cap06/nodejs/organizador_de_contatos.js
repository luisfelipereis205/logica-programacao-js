// Sistema de Gerenciamento de Nomes, simulando uma pequena agenda de contatos pelo terminal.

const prompt = require("prompt-sync")();

let nomes = [];

let opcao;

do {
  console.log("---------- ORGANIZADOR DE CONTATOS ---------- ");
  console.log("1 - Cadastrar nome");
  console.log("2 - Listar nomes");
  console.log("3 - Ordenar A → Z");
  console.log("4 - Ordenar Z → A");
  console.log("5 - Mostrar os três primeiros");
  console.log("6 - Pesquisar nome");
  console.log("0 - Sair");

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      const nome = prompt("Digite o nome: ").trim(); // O trim() remove os espaços em brancos.

      if (nome === "") {
        console.log("Nome inválido! Digite novamente.");
      } else {
        nomes.push(nome);
        console.log(`${nome} cadastrado com sucesso!!`);
      }
      break;
    case "2":
      console.log("--- Lista de contatos ---");

      if (nomes.length == 0) {
        console.log("Nenhum contato foi cadastrado ainda.");
      } else {
        nomes.forEach((nome, indice) => {
          console.log(`${indice + 1} - ${nome}`);
        });
      }
      break;
    case "3":
      console.log("--- Contatos listados em ordem alfabética (A-Z) ---");

      const crescente = nomes.slice();

      crescente.sort();

      console.log(crescente.join(", "));

      break;

    case "4":
      console.log("--- Contatos listados em ordem alfabética reversa (Z-A) ---");

      const decrescente = nomes.slice();

      decrescente.sort().reverse()

      console.log(decrescente.join(", "));
      break;

    case "5":
      console.log("--- 3 primeiros contatos ---")
      
      const ordenados = nomes.slice()

      ordenados.sort()
      
      const primeiros = ordenados.slice(0, 3);

      console.log(primeiros);
      break;

    case "6":
     const pesquisa = prompt("Digite o nome que deseja pesquisar: ")
     
     const resultado = nomes.filter(nome => nome.toLowerCase().includes(pesquisa.toLowerCase())) // includes verifica se o nome digitado existe. Então ele acessa o nome e ve se o que foi pesquisado existe ali. 

     if (resultado.length > 0){
        console.log("Nome (s) encontrado(s):");
        console.log(resultado)
     } else {
        console.log("Nome não encontrado")
     }
     break;

    case "0":
        console.log("Encerrando o sistema...")
        break;
    default: 
        console.log("Opção inválida. Tente novamente!!");
  }
} while (opcao !== "0");
