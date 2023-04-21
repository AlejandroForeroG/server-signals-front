
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
const socket = io('http://192.168.10.20:3000');

//import ChartData from "./dataMod.js";
import Signal from "./modulos/MySignals.js"



const names = ["temperature","bpm","oxigenSaturation","grsVoltage","airflux","ECG"]
renderGui(names)

let state=0;



//button comprobation
const signalsArray=[]

for(let i = 0 ;i < names.length;i++){
    signalsArray.push(new Signal(names[i]))
}
const button = document.getElementById('startButton');
button.addEventListener('click',()=>{
    if(button.innerText==="Iniciar conexion"){
        button.innerText="Terminar conexion";
        button.classList.add('pause');
        state=1;
        socket.emit('btninit',state);

        for(let i= 0 ; i<names.length;i++){
            signalsArray[i].setTime();
            signalsArray[i].ejecutor()
        }
       

    }else{
        button.innerText="Iniciar conexion";
        button.classList.remove('pause');
        state=0;
        for(let i= 0 ; i<names.length;i++){
            signalsArray[i].clearData();
            signalsArray[i].detenerEjecutor();
        }
        socket.emit('btninit',state);
    }
})

//when the rasberry send the data 
socket.on('rasberry:data', (dataSerial) => {
    
   for(let i= 0 ; i<names.length;i++){
       signalsArray[i].setValue(dataSerial[names[i]]);
   }

})

socket.on('btninit',(state)=>{console.log(state)})


