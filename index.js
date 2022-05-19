const avaliacoes = [];
const legendas = document.querySelectorAll('.legenda')
const legendasArray = Array.from(legendas);

const exportCSV = document.querySelector('.download-csv');

legendasArray.map(span => {
  const label = span.parentElement;
  label.addEventListener('click', () => {
    if (window.confirm('Tem certeza da sua Avaliação ?')) {
      const avaliacao = span.innerHTML
      avaliacoes.push(avaliacao)
    }

    const todasAvaliacoes = avaliacoes.join("\n")
    exportCSV.addEventListener('click', () => {
      exportCSV.setAttribute('href', `data:text/csvcharset=utf-8,${encodeURIComponent(todasAvaliacoes)}`)

      exportCSV.setAttribute('download', 'avaliacoes.csv')
    })
  })
})

