import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: ''};
  errorMessage = '';
  loggedIn: boolean;
  loading: boolean = false;
  
  constructor(
    private auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.loading = true;
    this.auth.login(this.credentials.username, this.credentials.password)
      .subscribe(
        data =>{
          this.loading = false;
          this.router.navigate(['/home']);
        },
        err =>{
          this.loading = false;
          this.errorMessage = err;
        }
      )
  }

}
