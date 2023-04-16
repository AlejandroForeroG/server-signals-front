class ChartData {
  constructor() {
    this.counter = [];
    this.prober = 0;
    this.cont = 0;
  }

  // Función principal para ejecutar la lógica de actualización de datos
  dataRun(chart, sample, variable) {
    // Se crea una promesa para evaluar los primeros 10 símbolos
    // y evitar la acumulación de etiquetas y datos en el gráfico
    const proberPromise = new Promise((resolve, reject) => {
      if (this.prober !== 1) {
        if (sample <= 10) {
          reject(chart, sample, variable);
        } else {
          resolve(chart, sample, variable);
        }
      } else {
        resolve(chart, sample, variable);
      }
    });
    proberPromise
      .then(() => {
        this.ad(chart, sample, variable);
        sessionStorage.setItem('prober', this.prober);
      })
      .catch(() => {
        this.addInit(chart, sample, variable);
      });
  }

  // Método para agregar los primeros 10 datos en el gráfico
  addDataInit(chart, label, dataS) {
    chart.data.labels.splice(label - 1, 1, label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(dataS);
    });
    this.almacenamiento(chart);
  }

  // Método para agregar datos al gráfico antes de los primeros 10 datos
  addData(chart, label, dataS) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(dataS);
    });
    this.almacenamiento(chart);
  }

  // Método para remover el primer dato del gráfico
  removeData(chart) {
    chart.data.labels.shift();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.shift();
    });
  }

  // Método para actualizar el gráfico después de agregar nuevos datos
  ad(chart, sample, variable) {
    this.prober = 1;
    this.addData(chart, sample, variable);
    chart.update();
    this.removeData(chart);
    this.cont++;
  }

  // Método para agregar los primeros datos en el gráfico
  addInit(chart, sample, variable) {
    this.addDataInit(chart, sample, variable);
    chart.update();
    this.counter++;
  }

  // Método para manejar el almacenamiento de datos en sessionStorage
  almacenamiento(chart) {
    const valor = sessionStorage.getItem("prober");
    const nombre = chart.data.datasets[0].label;
    const datos = chart.data.datasets[0].data.slice(0, 9);

    const bool =
      valor !== 1 ? datos.length <= 10 : datos.length === 10;
    if (!bool) {
      return;
    }

    sessionStorage.setItem(nombre, datos);
  }
}

export default ChartData;