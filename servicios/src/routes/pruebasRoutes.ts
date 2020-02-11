import { Router } from 'express';
import pruebaController from '../controllers/pruebaController';

class PruebasRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', pruebaController.prueba);
    }
}

const pruebasRoutes = new PruebasRoutes();
export default pruebasRoutes.router;