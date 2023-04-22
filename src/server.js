const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = 3000;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        // Directorio público
        this.app.use(express.static(__dirname + '../Public'));
    }

    routes(){
        this.app.get('/main',(req,res)=>{
            res.sendFile((__dirname+'../Public/main/index.html'));
         })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

    
}
const server = new Server();
server.listen();