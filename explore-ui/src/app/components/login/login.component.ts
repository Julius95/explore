import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  })
  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const body = new HttpParams()
      .set('username', this.profileForm.controls.username.value)
      .set('password', this.profileForm.controls.password.value)
      .set('grant_type', 'password');

    this.auth.login(body.toString(), (success:boolean) => {
      if(success){
        this.router.navigate(['/']);
      }else{
        alert('Invalid username or password');
      }
    });
  }

}
