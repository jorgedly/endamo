import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import pruebasRoutes from './routes/pruebasRoutes';

class Server{
	public app:Application;
	constructor(){
		this.app = express();
		this.config();
		this.routes();
	}

	config():void{
		this.app.set('port',process.env.PORT || 3000);
		this.app.use(morgan('dev')); /*de esta manera se puede ver que piden los clientes */
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: false}));
	}

	routes():void{
		this.app.use('/',indexRoutes);
		this.app.use('/api/pruebas',pruebasRoutes);
	}

	start():void{
		this.app.listen(this.app.get('port'), ()=>{
			console.log('Server on port', this.app.get('port'))
		});
	}
}
const server = new Server();
server.start();

/*var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3525;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*
GET = Obtener
POST = Crear
PUT = Actualizar
DELETE = Eliminar
*/
/*
app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

app.get('/holis', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine holis!'
	});
});


app.post('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
  });

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
});*/