import ValuesAdm from "./valuesAdm.js"

class Signal{
    constructor(signal){
        this.chart = dataGraph(signal)
        this.valuesAdm= new ValuesAdm(signal)
        this.name=signal;
        this.sample=1;
        this.value;
    }
    //methoods
    aumentaSample(){
        this.sample++
    }
    addData(){
        this.valuesAdm.dataRun(this.chart,this.sample,this.value)
        this.aumentaSample()       
    }
    //getters y setters

    getName(){
        return this.name;
    }
    setValue(value){
        this.value=value;
    }
    getValue(){
        return this.value;
    }
    getChart(){
        return this.chart;
    }
    getData(){
        return this.chart.data.datasets[0].data.slice(0,9);
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
