let encabezados = ["Sensor","Limite inferior","Limite superior","Limite inferior","Limite superior","Limite inferior","Limite superior"]
let banderas= ["amarilla","naranja","roja"]
function renderGui(sensores){

    const main = document.getElementById("signals");
    const valueParametros= document.getElementById("valores");
    const signalsContainer= document.createElement('div')

    signalsContainer.setAttribute('class','row  justify-content-center')

    for(let i = 0; i<sensores.length;i++){
            if(i%3==0){
                const divfila = document.createElement("div")
                divfila.setAttribute('class','row')
                main.appendChild(divfila)
            }
            let graph = document.createElement('div');
            let canvas = document.createElement('canvas')
            graph.setAttribute('class','graph col-3')
            canvas.setAttribute('id',sensores[i])
            canvas.setAttribute('class','signal')
            graph.appendChild(canvas) 
            signalsContainer.appendChild(graph);
            

        }
        main.appendChild(signalsContainer)

        const form = document.createElement("form");
        valueParametros.appendChild(form)
        for(let i = 0; i<sensores.length;i++){
      
        const divInterContainer = document.createElement("div")
        divInterContainer.setAttribute("class",'container ')
        form.appendChild(divInterContainer)

        const name = document.createElement("label")
        const field=document.createElement("input")
        name.setAttribute('class','col-12')
        field.setAttribute('id',sensores[i] + "value")
        field.setAttribute('type','text')
        field.setAttribute('name',sensores[i] + "value")
        field.setAttribute('class','col')
        name.innerHTML=sensores[i]
        divInterContainer.appendChild(name)
        divInterContainer.appendChild(field)
        }
        
        const btn  =document.createElement('button')
        btn.setAttribute('id','btnvalues')
        btn.setAttribute('type','submit')
        btn.innerHTML="Subir"
        valueParametros.appendChild(btn)

        const btn2  =document.createElement('button')
        btn2.setAttribute('id','btnDelete')
        btn2.innerHTML="Borrar todo"
        valueParametros.appendChild(btn2)

        
        const table =document.createElement("table");
        const thead =document.createElement("thead");
        const tbody =document.createElement("tbody");
        table.setAttribute('class','table table-striped mt-4 table-bordered');

        const tr = document.createElement("tr")
        for(let i = 0; i<encabezados.length;i++){
            const th = document.createElement("th")
            th.setAttribute('scope','col-2')
            if(i==1 || i==2){
                th.setAttribute('class','bg-warning')
            }
            if(i==3 || i==4){
                th.style.backgroundColor='#e85427'
            }
            if(i==5 || i==6){
                th.setAttribute('class','bg-danger')
            }
            th.innerHTML=encabezados[i]
            tr.appendChild(th)
            thead.appendChild(tr)
        }
        table.appendChild(thead)
        
        
        fetch('../info/limites.json')
        .then(response => response.json())
        .then(limits => {
            sensores.forEach(sensor => {
                const tr = document.createElement("tr");

                const tdSensor = document.createElement("td");
                tdSensor.textContent=sensor;
                tr.appendChild(tdSensor);

                for(let i = 0; i<banderas.length;i++){
                    const tdLimiteInferior = document.createElement("td");
                    const tdLimiteSuperior = document.createElement("td");
                    if(limits[sensor]==undefined){
                        tdLimiteInferior.textContent="No hay datos";
                        tdLimiteSuperior.textContent="No hay datos";
                    }else{
                        tdLimiteInferior.textContent=limits[sensor][banderas[i]].limite_inferior;
                        tdLimiteSuperior.textContent=limits[sensor][banderas[i]].limite_superior;

                    }
                    tr.appendChild(tdLimiteInferior);

                    tr.appendChild(tdLimiteSuperior);
                }


                tbody.appendChild(tr);
                table.appendChild(tbody)
                main.appendChild(table)
            });
            
        }).catch(error => console.error(error));
    }