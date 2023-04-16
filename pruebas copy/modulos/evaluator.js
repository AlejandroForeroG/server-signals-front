
 
 class Evaluator {


  evaluate(signal) {
    console.log(signal.getData());
    if (signal.getData().length < 0) {
        var promedio= signal.getValue();
    }else{
        var num = signal.getData().slice(-1);
        console.log(num,signal.getValue());
        promedio= Math.sqrt((Math.pow(num,2)+Math.pow(signal.getValue(),2))/2);
    }
    

    fetch('./limites.json')
      .then(response => response.json())
      .then(limits => {
        if (limits[signal.getName()] == undefined) {
          console.log("no existe");
        } else {
          console.log(promedio);
          try {
            if (
                limits[signal.getName()].amarilla.limite_superior >= promedio &&
                limits[signal.getName()].amarilla.limite_inferior <= promedio
                ) {
                    console.log('amarillo');
                    signal.setBackground("rgb(243, 216, 61,0.7)");
            }else if(
                limits[signal.getName()].naranja.limite_superior>=promedio &&
                limits[signal.getName()].naranja.limite_inferior<=promedio){
                    console.log('naranja')
                    signal.setBackground("rgb(232, 116, 44,0.7)");
            }else if(
                limits[signal.getName()].roja.limite_inferior<=promedio){
                    console.log('rojo')
                    signal.setBackground("rgb(232, 44, 72,0.7)");
            }else{
                signal.setBackground("rgba(13, 148, 68, 0.7)");
                
            }
            
       
          } catch (error) {
            console.log(error);
          }
        }
      })
      .catch(error => console.error(error));
  }
}
export default Evaluator;