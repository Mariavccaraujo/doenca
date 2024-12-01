//DOENÇA DE CHAGAS

var chagas1 = document.getElementById('myChart11').getContext('2d');
var myChart11 = new Chart(chagas1, {
  type: 'bar',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste' ],
    datasets: [{
      label: '2020',
      data: [138, 3, 4, 4, 1],
      backgroundColor: ["#F16B10", "#ffa467", "#ED9C10", "#08655e", "#003a34"]
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Número de casos da Doença de Chagas, por região. Brasil, 2020'
      }
    }
});

var chagas2 = document.getElementById('myChart12').getContext('2d');
var myChart12 = new Chart(chagas2, {
    type: 'doughnut',
    data: {
      labels: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
      datasets: [
        {
          backgroundColor: ["#F16B10", "#ffa467", "#ED9C10", "#08655e", "#003a34"],
          data: [38, 400, 862, 98, 348]
        }
      ]
    },
    options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Óbitos registrados pela Doença de Chagas. Brasil, 2020'
      }
    }
});