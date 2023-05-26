import { LoginService } from './../@services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPost } from '../@models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginValue: LoginPost = {
    AccountName: '',
    Password: '',
  };
  constructor(private router: Router, private LoginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    this.LoginService.JWT登入(this.loginValue).subscribe((data: any) => {
      if (data) {
        localStorage.setItem('jwt', data);
        this.router.navigateByUrl('/manage/home');
      }
    });
  }
}
