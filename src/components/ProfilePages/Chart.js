import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = () => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Diagramme des taux '
    },
    xAxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
    },
    yAxis: {
      title: {
        text: 'Quantité'
      }
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        stacking: 'normal',
        grouping: false
      }
    },
    series: [{
      name: 'Phospote',
      data: [29, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
    }, {
      name: 'nitrate',
      data: [19, 62, 88, 92, 105, 136, 112, 108, 183, 139, 89, 42]
    }, {
      name: 'ammonium',
      data: [12, 43, 69, 71, 82, 96, 75, 80, 135, 102, 64, 31]
    }]
  };

  return (
    <div className="chart-container">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default Chart;
