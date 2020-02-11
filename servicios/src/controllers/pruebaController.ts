import { Request, Response} from 'express';
import pool from '../database';

class PruebaController{

    public prueba(req: Request, res : Response){
        pool.query('DESCRIBE');
        res.json('prueba');
        res.send('Prueba');
    }
}

const pruebaController  = new PruebaController();
export default pruebaController;