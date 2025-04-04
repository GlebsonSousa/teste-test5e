const weatherApiKey = "d25f83878404746f0483dfec3c2bd5fd";
const pexelsApiKey = "lySbgcALWnqsghKYKkwLZW7s5kJ4u1A6EgznD3xogk9grduC1GSnP0Nk";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Clima em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscaCidade(cidade) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${weatherApiKey}&lang=pt_br&units=metric`;
        const resposta = await fetch(url);
        const dados = await resposta.json();

        colocarDadosNaTela(dados);
    } catch (erro) {
        console.log("Erro ao buscar cidade!", erro);
    }
}

function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscaCidade(cidade);
}

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const cidade = document.querySelector(".input-cidade").value;
        buscaCidade(cidade);
    }
});
