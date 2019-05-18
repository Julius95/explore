import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hide:boolean;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
    this.hide = this.authService.isLoggedIn();
  }

  hideHeader(){
    return this.hide
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }


}
