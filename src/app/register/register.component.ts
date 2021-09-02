import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData : any = {}
  location = Location;

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
    if (location.protocol === 'http:') {
      window.location.href = location.href.replace('http', 'https');
    }
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          //localStorage.setItem('token',res.token) 
          this._router.navigate(['/login']) 
        },
          err => console.log(err)
      )
    //console.log(this.registerUserData)
  }

}
