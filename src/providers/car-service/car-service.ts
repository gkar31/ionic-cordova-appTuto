import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CarServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CarServiceProvider {
  data : any;
  constructor(public http: Http) {
    console.log('Hello CarServiceProvider Provider');
  }


  getCarsList(){
    if (this.data){
      return Promise.resolve(this.data);
    }

    let opt: RequestOptions;
    let myHeaders: Headers = new Headers();

    myHeaders.set('Accept', 'application/json; charset=utf-8');
    myHeaders.append('Content-type', 'application/json; charset=utf-8');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    opt = new RequestOptions({
      headers: myHeaders
    })


    return new Promise(resolve => {this.http.get('http://musclecars.herokuapp.com/carlist',opt)
    .map(res => res.json())
    .subscribe(data => {
      this.data = data;
      console.log(data);
      resolve(this.data);
    });
  });
  }
}
