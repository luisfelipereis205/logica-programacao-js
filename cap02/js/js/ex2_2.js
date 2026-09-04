const frmm = document.querySelector("form");
const respp1 = document.querySelector("h3");
const respp2 = document.querySelector("h4");

frmm.addEventListener("submit", (e) => {
    const nomef = frmm.inTitle.value;
    const duracao = Number(frmm.inDuration.value);

    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    respp1.innerText = `${nomef}`;
    respp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault();
});

/* maneira 2 

// cria referencia ao form e aos elementos h3 e h4 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
const nome = frm.inTitulo.value; // obtém o nome do filme digitado no form
const duracao = Number(frm.inDuracao.value); // obtém a duração do filme

  const horas = Math.floor(duracao / 60); // arredonda para baixo o resultado da divisão
  const minutos = duracao % 60; // obtém o resto da divisão

  resp1.innerText = nome; // exibe o nome do filme
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`; // exibe a duração formatada
  e.preventDefault(); // evita o envio do form
}}; */
