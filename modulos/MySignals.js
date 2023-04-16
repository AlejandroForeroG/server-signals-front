import ValuesAdm from "./valuesAdm.js"
import GraphAdmin from "./dataGraph.js";
const graphAdmin = new GraphAdmin();

class Signal{
    constructor(signal){
        this.chart = graphAdmin.dataGraph(signal)
        this.valuesAdm= new ValuesAdm(signal)
        this.name=signal;

        if(sessionStorage.getItem('labels'+this.getName())!=null){
            this.sample=this.chart.data.labels[9]
        }else{
            this.sample=1;
        }
        this.samples= this.chart.data.labels
        this.value;
    }
    //methoods
    aumentaSample(){
        this.sample++
    }
    addData(){
        this.valuesAdm.dataRun(this.chart,this.sample,this.value)
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
    
    getChart(){
        return this.chart;
    }
    getName(){
        return this.name;
    }
    setValue(value){
        this.value=value;
    }
    getValue(){
        return this.value;
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
    setData(data){
        this.chart.data.datasets[0].data=this.valuesAdm.getData();
        this.chart.update();
    }
    getBackground(){
        return this.chart.data.datasets[0].backgroundColor;
    }
    setBackground(color){
        this.chart.data.datasets[0].backgroundColor=color
        this.chart.update();
    }    
    
}

export default Signal;
