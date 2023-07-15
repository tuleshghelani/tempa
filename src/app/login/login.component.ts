import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserserviceService,
              private router: Router) { }
  loginMessage : string = "";

  ngOnInit(): void {
  }
  loginData: any = {}; // Object to store login form data

  onSubmit(form: NgForm) {
    // Perform API request or authentication logic here
    console.log(this.loginData); // Example: Print login form data to the console
    
    this.userService.login(this.loginData).subscribe((res)=>{
      console.log(res);
      if(res?.role === 'Admin' && res?.status === true) {
        this.router.navigate(["/addUser"]);
      } else if (res?.role === 'Standard' && res?.status === true)  {
        console.log("Standard login");
      } else {
        this.loginMessage = "Invalid";
      }
    });
  }
}
