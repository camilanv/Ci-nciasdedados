@@ -1,3 +1,5 @@
import { getCSS } from "./common.js"
async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
@@ -9,14 +11,23 @@ async function quantidadeUsuariosPorRede() {
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar'
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color')
    }
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
    Plotly.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede()