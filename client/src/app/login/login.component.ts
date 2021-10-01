import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../core/models/user';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  isLoggedIn = false;
  user: User;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
   
  }

  login() {
    this.userService.login(this.model).subscribe(response => {
      this.isLoggedIn = true;
      this.user = JSON.parse(this.userService.getCurrentUser());
      this.toastr.success("Hello there, " + this.user.username + "!");
    })
  }
}
