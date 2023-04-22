//const sensores = ["temperature","bmp","oxigenSaturation","gsrResistance","grsVoltage","airflux"]
function renderGui(sensores){
    const divSignal = document.createElement("div");
    divSignal.setAttribute('class','text-center')
    document.body.appendChild(divSignal)  

    for(let i = 0; i<sensores.length;i++){
        if(i%3==0){
            const divfila = document.createElement("div")
            divfila.setAttribute('class','row')
            divSignal.appendChild(divfila)
        }
        let graph = document.createElement('div');
        let canvas = document.createElement('canvas')
        graph.setAttribute('class','graph col-3')
        canvas.setAttribute('id',sensores[i])
        canvas.setAttribute('class','signal')
        graph.appendChild(canvas) 
        divSignal.appendChild(graph)

    }

    const tiempo  = document.getElementById('tiempos')
    for(let i=0; i<sensores.length;i++){
        // Crear div para el formulario
        const div = document.createElement('div');
        div.setAttribute('class', 'col-md-12'); // Utilizar clase 'col-md-3' para que quede en formato de form pequeño y se muestre en 4 columnas
        tiempo.appendChild(div);

        // Crear label
        const label = document.createElement('label');
        label.setAttribute('for', sensores[i] + 'value');
        label.innerText = sensores[i];
        div.appendChild(label);

        // Crear select
        const select = document.createElement('select');
        select.setAttribute('id', sensores[i] + 'value');
        select.setAttribute('class', 'form-control form-control-sm'); // Utilizar clase 'form-control form-control-sm' para el estilo de formulario pequeño
        div.appendChild(select);

        // Agregar opciones al select
        const opciones = [1, 5, 10, 30, 60, 120,0.5];
        for (let j = 0; j < opciones.length; j++) {
            const option = document.createElement('option');
            option.value = opciones[j];
            option.text = opciones[j];
            select.appendChild(option);
  }
    }
}   

