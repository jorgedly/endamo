import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/shopping.svg',
      titulo: 'Todo a un click',
      desc: 'Encuentra todo lo que necesitas con un solo click de distancia.'
    },
    {
      img: '/assets/slides/electronics.svg',
      titulo: 'Nueva tecnología',
      desc: 'Catalogos completos con la tecnología más novedosa en la actualidad.'
    },
    {
      img: '/assets/slides/grow-up.svg',
      titulo: '¿Eres una empresa?',
      desc: 'Impulsa tu negocio y has crecer tu mercado con clientes en todo el pais.'
    }
  ];

  constructor(private route: Router,
              private storage: Storage) { 

    /* se verifica si existen datos en el storage, si existen se redirecciona a las pantallas
    de usuario correspondiente */
    this.storage.get('token').then(token => {

      if(token != null){

        this.storage.get('isClient').then(isClient => {
          
          if(isClient === '1')
            this.route.navigate(['home-cliente']);
          else
            this.route.navigate(['home-empresa']);
        });

      }
    });
  }

  ngOnInit() {
  }

  registrar_usuario(){
    this.route.navigate(['/registro',0]);
  }

  registrar_empresa(){
    this.route.navigate(['/registro',1]);
  }

  iniciar_sesion(){
    this.route.navigate(['/registro',2]);
  }

}
