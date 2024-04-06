var data1 = {
    labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007"],
    datasets: [
      {
        data: [28.49, 65.69, 24.92, 28.89, 37.37, 64.28, 71.11, 102.05],
        backgroundColor: [
          "#FF6384", // vermelho
          "#36A2EB", // azul
          "#FFCE56", // amarelo
          "#4BC0C0", // turquesa
          "#9966FF", // roxo
          "#FF8A80", // rosa
          "#8D6E63", // marrom
          "#80CBC4", // verde azulado
        ],
      },
    ],
  };
  var data2 = {
    labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
    datasets: [
      {
        data: [61.75, 79.04, 105.04, 105, 104.07, 96.23, 50.75, 42.81],
        backgroundColor: [
          "#4CAF50", // verde
          "#9C27B0", // roxo
          "#FF9800", // laranja
          "#2196F3", // azul
          "#F44336", // vermelho
          "#607D8B", // cinza azulado
          "#FFC107", // amarelo
          "#009688", // verde esmeralda
        ],
      },
    ],
  };
  var data3 = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        data: [52.80, 61.40, 39.40, 68.72, 97.10, 68.72, 81.21, 81.25],
        backgroundColor: [
          "#FF5722", // laranja escuro
          "#03A9F4", // azul claro
          "#9E9E9E", // cinza
          "#FFEB3B", // amarelo claro
          "#795548", // marrom escuro
          "#8BC34A", // verde claro
          "#FF5722", // laranja escuro (repetido para demonstração)
          "#673AB7", // roxo escuro
        ],
      },
    ],
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  var ctx1 = document.getElementById("chart1").getContext("2d");
  new Chart(ctx1, {
    type: "bar",
    data: data1,
    options: options,
  });

  var ctx2 = document.getElementById("chart2").getContext("2d");
  new Chart(ctx2, {
    type: "bar",
    data: data2,
    options: options,
  });

  var ctx3 = document.getElementById("chart3").getContext("2d");
  new Chart(ctx3, {
    type: "bar",
    data: data3,
    options: options,
  });
