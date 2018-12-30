import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldService(){
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  serviceWithPath(name){
    /* let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    }) */
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`
    //, {headers: header}
    );
  }

  /* createBasicAuthenticationHttpHeader(){
    let username: string = 'rajdatheist';
    let password: string = 'password';
    let basicAuthHeaderString: string = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  } */
}
