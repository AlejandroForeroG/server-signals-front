function renderGui(sensores){

    const signalContainer = document.getElementById("signals");
    const valueParametros= document.getElementById("valores");

    for(let i = 0; i<sensores.length;i++){
            if(i%3==0){
                const divfila = document.createElement("div")
                divfila.setAttribute('class','row')
                signalContainer.appendChild(divfila)
            }
            let graph = document.createElement('div');
            let canvas = document.createElement('canvas')
            graph.setAttribute('class','graph col-3')
            canvas.setAttribute('id',sensores[i])
            canvas.setAttribute('class','signal')
            graph.appendChild(canvas) 
            signalContainer.appendChild(graph)

        }

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
    
}