
import Signal from "./modulos/MySignals.js"
import Evaluator from "./modulos/evaluator.js";
const evaluator = new Evaluator();
const names= ["temperature","bpm","oxigenSaturation","gsrResistance","grsVoltage","airflux","ECG"]

renderGui(names)
const butonValue = document.getElementById('btnvalues');
const butonDelete = document.getElementById('btnDelete')


const signalsArray = []
for(let i = 0 ;i < names.length;i++){
    signalsArray.push(new Signal(names[i]))
}
//button listeners
butonValue.addEventListener('click',()=>{   
    for(let i = 0; i<signalsArray.length;i++){
        signalsArray[i].setValue(parseFloat(document.getElementById(names[i]+"value").value)) 
        if(isNaN(signalsArray[i].value)==false){
            signalsArray[i].addData();
            console.log(signalsArray[i].getData());
            evaluator.evaluate(signalsArray[i])
        } 
    }      
})

butonDelete.addEventListener('click',()=>{
    console.log('borrado')
    for(let i = 0 ;i < names.length;i++){
        document.getElementById(names[i]+"value").value=""
    }
})