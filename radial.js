const getChartRadial = () => {
    return {
      series: [40],
      colors: ["#1C64F2"],
      chart: {
        height: 320,
        width: "100%",
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          track: {
            background: '#E5E7EB',
          },
          dataLabels: {
            show: true,
          },
          hollow: {
            margin: 0,
            size: "60%",
          }
        },
      },
      labels: ["Occupation"],
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (value) {
            return value + '%';
          }
        }
      }
    }
  }
  
  if (document.getElementById("radial-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.querySelector("#radial-chart"), getChartRadial());
    chart.render();
  }
  