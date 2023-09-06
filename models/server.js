import express from 'express';
import cors from 'cors';

import router from '../routes/user.js';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares  
        this.middlewares();

        // Rutas de aplicacion
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // lectura y Parseo del body
        this.app.use( express.json() );
        
        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto http://localhost:'+this.port);
        });
    }
    
}

export default Server;