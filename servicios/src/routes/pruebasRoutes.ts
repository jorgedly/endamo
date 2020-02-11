import { Router } from 'express';

class PruebasRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req,res)=> res.send('Hello_Prueba'));
    }
}

const pruebasRoutes = new PruebasRoutes();
export default pruebasRoutes.router;