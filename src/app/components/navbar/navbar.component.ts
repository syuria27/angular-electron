import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private router: Router
  ) { }

  get isLoggedIn(){
    return this.auth.sudahLogin()
  }

  get user(){
    return this.auth.getNamaUser();
  }


  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
