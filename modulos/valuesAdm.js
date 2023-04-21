
class valuesAdm{
    constructor(){    
        this.counter = [];
        this.prober = 0;
        this.cont = 0;
    }

    dataRun(chart, sample, variable) {
    // Se evaluan los  los primeros 10 símbolos
    // y evitar la acumulación de etiquetas y datos en el gráfico
      if (this.prober !== 1) {
          if (sample <= 15) {
            this.addInit(chart, sample, variable);
          } else {
            this.ad(chart, sample, variable);
            sessionStorage.setItem('prober', this.prober);
          }
      }else{
        this.ad(chart, sample, variable);
        sessionStorage.setItem('prober', this.prober);
      }
    }

    addInit(chart, sample, variable) {
       
        // chart.data.labels.splice(sample - 1, 1, sample);
        chart.data.datasets.forEach((dataset) => {
        dataset.data.push(variable);
        });
        this.almacenamiento(chart);
        chart.update();
        this.counter++;
    }

    // Método para actualizar el gráfico después de agregar nuevos datos
    ad(chart, sample, variable) {
        this.prober = 1;
        this.addData(chart, sample, variable);
        chart.update();
        this.removeData(chart);
        this.cont++;
    }
        
   // Método para agregar datos al gráfico antes de los primeros 10 datos
    addData(chart, sample, variable) {
        chart.data.labels.push(sample);
        chart.data.datasets.forEach((dataset) => {
        dataset.data.push(variable);
        });
        this.almacenamiento(chart);
    }
  //metodo para eliminar datos del gráfico
    removeData(chart) {
        chart.data.labels.shift();
        chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
    });
    }

   // Método para manejar el almacenamiento de datos en sessionStorage
    almacenamiento(chart) {
        const valor = sessionStorage.getItem("prober");
        const nombre = chart.data.datasets[0].label;
        const datos = chart.data.datasets[0].data.slice(0, 14);
        const bool =
        valor !== 1 ? datos.length <= 14 : datos.length === 14;
        if (!bool) {
        return;
        }
        sessionStorage.setItem(nombre, datos);
    }

    clearData(){
        this.counter = [];
        this.prober = 0;
        this.cont = 0;
        sessionStorage.clear()
    }

}


export default valuesAdm;