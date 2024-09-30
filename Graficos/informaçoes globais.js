
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

{

  "total_pessoas_conectadas": 5.04e9,

"tempo_medio": 2.38,

"total_pessoas_mundo": 7.888e9

}
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

}
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

    }
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

    async function visualizarInformacoesGlobais() {
    
            const res = await fetch(url)
    
            const dados = await res.json()
    
            console.log(dados);
    
        }
    
        visualizarInformacoesGlobais()
…          async function vizualizarInformacoesGlobais() {
            const res = await fetch(url)
            const dados = await res.json()
            cosole.log(dados);
            const paragrafo = document.createElement('p')
            paragrafo.classList.add('graficos-container__texto')
            paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
            
            const container = document.getElementById(‘graficos-container’)
            container.appendChild(paragrafo)
          }
          
          vizualizarInformacoesGlobais()
          .graficos-container {
            margin: 5rem;
           }
           async function vizualizarInformacoesGlobais() {
            const res = await fetch(url)
            const dados = await res.json()
            cosole.log(dados);
            const paragrafo = document.createElement('p')
          }
          
          vizualizarInformacoesGlobais()
          async function vizualizarInformacoesGlobais() {
            const res = await fetch(url)
            const dados = await res.json()
            cosole.log(dados);
            const paragrafo = document.createElement('p')
            paragrafo.classList.add('graficos-container__texto')
          }
          
          vizualizarInformacoesGlobais()
          paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
          async function vizualizarInformacoesGlobais() {
            const res = await fetch(url)
            const dados = await res.json()
            cosole.log(dados);
            const paragrafo = document.createElement('p')
            paragrafo.classList.add('graficos-container__texto')
            paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
            
            const container = document.getElementById(‘graficos-container’)
            container.appendChild(paragrafo)
          }
          
          vizualizarInformacoesGlobais()
          const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

          async function vizualizarInformacoesGlobais() {
            const res = await fetch(url)
            const dados = await res.json()
          
            const paragrafo = document.createElement('p')
            paragrafo.classList.add('graficos-container__texto')
            paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
            
            const container = document.getElementById(‘graficos-container’)
            container.appendChild(paragrafo)
          }
          
          vizualizarInformacoesGlobais()
          const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
          async function visualizarInformacoesGlobais() {
            const res = await fetch(url)
            const dados = await res.json()
            const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
          }
          paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_conectadas}</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`

          // código omitido
// código omitido
const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`

// código omitido
// código omitido
const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`

// código omitido
// código omitido
const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos = (dados.tempo_medio - horas) * 100

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e ${minutos} minutos conectadas.`

// código omitido
const minutos = Math.round((dados.tempo_medio - horas) * 100)
async function vizualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
  const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
  const horas = parseInt(dados.tempo_medio)
  const minutos = Math.round((dados.tempo_medio - horas) * 100)

  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.`

  const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)
}
const porcentagemConectada = (pessoasConectadas / pessoasNoMundo) * 100
(const porcentagemConectada = (pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
{
  "Facebook": 3049,
  "Youtube": 2491,
  "WhatsApp": 2000,
  "Instagram": 2000,
  "Tiktok": 1562,
  "WeChat":1336
}
https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json
const grafico = document.createElement('div')
grafico.className = 'grafico'
async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys(dados)
  const quantidadeUsuarios = Object.values(dados)

const data = [
  {
    x: nomeDasRedes,
    y: quantidadeUsuarios,
    type: 'bar'
  }
]

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data)

}

quantidadeUsuarios()
                             