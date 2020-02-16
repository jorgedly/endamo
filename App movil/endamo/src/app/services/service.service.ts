import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  token = null;

  constructor(private http: HttpClient, private storage: Storage) { }

  login(email: string, password: string) {
    const data = { email, password };

    return new Promise(resolve => {
      this.http.post('',data)
      .subscribe(resp => {
        console.log(resp);
        /*
          if(loginCorrecto)
          {
            //si los datos son correctos, se guarda la informacion en el local storage
            this.storage.set('token',ID);
            this.storage.set('isClient', 1 cliente 0 empresa)
            resolve(true);
          }
          else
          {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        */
      });
    });

  }

  registro_cliente(name: string, email: string, password: string, avatar: string) {
    const data = {name, email, password, avatar};

    return new Promise(resolve => {
      this.http.post('',data)
      .subscribe(resp => {
        console.log(resp);
        /*
          if(registroCorrecto)
          {
            //si los datos son correctos, se guarda la informacion en el local storage
            this.storage.set('token',ID);
            this.storage.set('isClient', 1 cliente)
            resolve(true);
          }
          else
          {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        */
      });
    });
  }

  registro_empresa(name: string, email: string, password: string) {
    const datos = {name, email, password};

    return new Promise(resolve => {
      this.http.post('',datos)
      .subscribe(resp => {
        console.log(resp);
        /*
          if(registroCorrecto)
          {
            //si los datos son correctos, se guarda la informacion en el local storage
            this.storage.set('token',ID);
            this.storage.set('isEmpresa', 1 empresa)
            resolve(true);
          }
          else
          {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        */
      });
    });
  } 
}
