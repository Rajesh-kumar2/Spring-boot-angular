import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'rajeshk'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,
              private hrdAuth: HardcodedAuthService) { }

  ngOnInit() {
  }

  handleLogin(){
    //if(this.username==="rajeshk" && this.password === 'dummy'){
    if (this.hrdAuth.authenticate(this.username,this.password)){ 
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
  }

}
