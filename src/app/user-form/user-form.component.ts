import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
// import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userData = {
    username: '',
    password: '',
    birthdate: '',
    files: [] as File[]
  };
  responseMessage = '';
  

  constructor(private userService:UserserviceService) {}

  onFileSelected(event: any) {
    this.userData.files = event.target.files;
  }

  saveUser() {
    const convertedBirthdate = new Date(this.userData.birthdate).toISOString();
    // const passwordMd5 = CryptoJS.MD5(this.userData.password).toString();
    const formData = new FormData();
    formData.append('username', this.userData.username);
    formData.append('password', this.userData.password);
    formData.append('birthdate', convertedBirthdate);

    for (let i = 0; i < this.userData.files.length; i++) {
      formData.append('files', this.userData.files[i]);
    }

    this.userService.createUser(formData).subscribe((response) => {
      console.log(response);
      this.responseMessage = response.message;
    },
    (err) => {
      console.log(err);
    });
  }

}
