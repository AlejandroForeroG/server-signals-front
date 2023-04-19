import ValuesAdm from "./valuesAdm.js"
import GraphAdmin from "./dataGraph.js";
import Evaluator from "./evaluator.js";
const evaluator = new Evaluator();
const graphAdmin = new GraphAdmin();

class Signal{
    constructor(signal){
        
        this.chart = graphAdmin.dataGraph(signal)
        this.valuesAdm= new ValuesAdm(signal)
        this.name=signal;
        this.samples= this.chart.data.labels//completo
        this.nextValue;
        this.time;
        this.intervalID;

        if(sessionStorage.getItem('labels'+this.getName())!=null){
            this.sample=this.chart.data.labels[9] //valor solo
        }else{
            this.sample=1;
        }
    }
    
    
    //methoods
    ejecutor(){
       this.intervalID= setInterval(()=>{
            this.addData()  
        },this.getTime()*1000)  
    }

    detenerEjecutor(){
        clearInterval(this.intervalID)
    }

    aumentaSample(){
        this.sample++
    }

    addData(){
        this.valuesAdm.dataRun(this.chart,this.sample,this.nextValue)
        evaluator.evaluate(this)
        this.aumentaSample() 
        sessionStorage.setItem('labels'+this.getName(),this.chart.data.labels)      
    }
    clearData(){
        this.chart.data.labels=[1,2,3,4,5,6,7,8,9,10];
        this.chart.data.datasets[0].data=[];
        this.sample=1;
        this.valuesAdm.clearData();
        this.chart.update();
    }

    
    //getters y setters
    setSample(){
        this.time= document.getElementById(this.name+'value').value
        console.log(this.time)
    }
    getChart(){
        return this.chart;
    }

    getName(){
        return this.name;
    }

    setValue(value){
        this.nextValue=value;
    }
 
    getValue(){
        return this.nextValue;
    }

    getSample(){
        return this.sample;
    }

    getSamples(){
        return this.samples;
    }

    setSamples(sample){
        this.chart.data.labels=sample
    }

    getData(){
        return this.chart.data.datasets[0].data.slice(0,9);
    }

    setData(){
        this.chart.data.datasets[0].data=this.valuesAdm.getData();
        this.chart.update();
    }

    getBackground(){
        return this.chart.data.datasets[0].backgroundColor;
    }

    setBackground(color){
        this.chart.data.datasets[0].backgroundColor=color
        // this.chart.update();
    }  

    setTime(){
        this.time= document.getElementById(this.name+'value').value
    } 
    
    getTime(){
        return this.time;
    }
    
}

export default Signal;
