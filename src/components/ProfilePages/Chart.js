import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
function Chart() {
  const [clientData, setClientData] = useState(null);
  const { clientName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/users/${clientName}`)
      .then(response => response.json())
      .then(data => {
        setClientData(data);
      })
      .catch(error => console.error('Erreur lors de la récupération des données du client : ', error));
  }, [clientName]);

  if (!clientData) {
    return <div>Loading...</div>;
  }

  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: `Diagramme des taux pour ${clientData.name}`
    },
    xAxis: {
      categories: ['Phosphate', 'Nitrate', 'Ammonium']
    },
    yAxis: {
      title: {
        text: 'Quantité'
      }
    },
    series: [{
      name: 'Taux',
      data: [clientData.tauxPho, clientData.tauxNit, clientData.tauxAmo]
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
}

export default Chart;
