import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import { router } from "../routes/user.js"

dotenv.config();


class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.usersPath = "/api/users";

        //Middlewares
    
        this.middlewares();


        //Rutas
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura-parseo body
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static("public"))
    }

    routes(){
        this.app.use(this.usersPath, router)
    }

    listen(){
        this.app.listen(this.port);
    }
}

export {
    Server
} 