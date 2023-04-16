
function dataGraph(chartname){
    
    //chart
    const ctx = document.getElementById(chartname).getContext('2d');
    const labels =[ "1","2","3","4","5","6","7","8","9","10"]
  
    const data ={
    labels:labels,
    datasets:[{
        data:[],
        label:chartname,
        fill: true,
        backgroundColor:'rgba(13, 148, 68, 0.7)',      
        }]
    }
    const config ={
        type:'line',
        data:data,
        options:{
            responsive:true
        }
    }

    const result = new Chart(ctx,config);
    return result
}

