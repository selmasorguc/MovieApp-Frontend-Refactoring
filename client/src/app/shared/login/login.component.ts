import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceResponse } from 'src/app/core/models/serviceResponse';
import { User } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  isLoggedIn = false;
  user: User;
  loginForm: FormGroup;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
   this.loginForm = new FormGroup({
     'username' : new FormControl(null),
     'password' : new FormControl(null)
   });
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(response => {
      this.isLoggedIn = true;
      this.user = JSON.parse(this.userService.getCurrentUser());
      this.toastr.success("Hello there, " + this.user.username + "!");
    });
  }
}
