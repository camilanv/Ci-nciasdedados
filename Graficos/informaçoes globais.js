
{

    "total_pessoas_conectadas": 5.04e9,

  "tempo_medio": 2.38,

  "total_pessoas_mundo": 7.888e9

}

const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

    const res = await fetch(url)

    const dados = await res.json()

    console.log(dados);

}

visualizarInformacoesGlobais()


