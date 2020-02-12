import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  id = null;

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  avatars = [
    {
      img: '/assets/avatars/av-1.png',
      seleccionado: true
    },
    {
      img: '/assets/avatars/av-2.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-3.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-4.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-5.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-6.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-7.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  }

  isUserSlide = false;
  textButton = 'Registrar Empresa';

  loginUser = {
    email: '',
    password: ''
  }

  registerUser = {
    name: '',
    email: '',
    password: '',
    avatar: '/assets/avatars/av-1.png'
  }

  constructor(private activeRoute: ActivatedRoute, 
              private service: ServiceService,
              public toastController: ToastController,
              private route: Router) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.slides.slideTo(this.id);
    this.slides.lockSwipes(true);
  }

  /*Métodos de navegación*/
  seleccionarAvatar(avatar){
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.registerUser.avatar = avatar.img;
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);

    if(this.isUserSlide)
    {
      this.slides.slideTo(0);
      this.textButton = 'Registrar Empresa';
    }
    else
    {
      this.slides.slideTo(1);
      this.textButton = 'Registrar Usuario';
    }

    this.isUserSlide = !this.isUserSlide;
    this.slides.lockSwipes(true);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '¡Datos Erroneos! Intenta nuevamente.',
      color: 'danger',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  /*Métodos para consumir servicios e interactuar*/
  async registrar_usuario(fRegistroUsuario: NgForm){
    if(fRegistroUsuario.invalid)
      this.presentToast();
    else
    {
      const valido = await this.service.registro_cliente( this.registerUser.name, 
                                                          this.registerUser.email,
                                                          this.registerUser.password, 
                                                          this.registerUser.avatar);

      if(valido)
        this.route.navigate(['/home-cliente']);
      else
        this.presentToast();
    }
  }

  registrar_empresa(){
  }

  async login(fLogin: NgForm) {
    if(fLogin.invalid)
      this.presentToast();
    else
    {
      const valido = await this.service.login(this.loginUser.email, this.loginUser.password);

      if(valido)
        this.route.navigate(['/home-cliente']);
      else
        this.presentToast();
    }
  }

}
