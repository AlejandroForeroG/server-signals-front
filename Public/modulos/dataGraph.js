
class graphAdmin{
    dataGraph(chartname){
        //data stored in session 
        let valor =[]
        if(sessionStorage.getItem(chartname)){
            valor = sessionStorage.getItem(chartname).split(',').map(Number);
        }
        let sample = [];
        if(sessionStorage.getItem('labels'+chartname)){
            sample = sessionStorage.getItem('labels'+chartname).split(',').map(Number);
            var labels = sample;
        }else{
            var labels =[ "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
        }
        //chart
        const ctx = document.getElementById(chartname).getContext('2d');
        
        let gradient  = ctx.createLinearGradient(0,0,0,400);
        gradient.addColorStop(0,'rgba(13, 148, 68, 0.7)')
        gradient.addColorStop(1,'rgba(0, 188, 212, 0.5)')
        const data ={
        labels:labels,
        datasets:[{
            data:valor,
            label:chartname,
            fill: true,
            backgroundColor:gradient,      
            }]
        }
        const config ={
            type:'line',
            data:data,
            options:{
                responsive:true,
                animation: { // Configuración de animaciones
                duration: 300, // Duración de la animación en milisegundos
                easing: 'easeInOutQuad', // Función de easing para la animación
            }
            }
        }
    
        const result = new Chart(ctx,config);
        return result
    }

}
export default graphAdmin;