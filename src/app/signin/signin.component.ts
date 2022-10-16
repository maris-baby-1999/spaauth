import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signinform = this.formbuilder.group(
      {
        name: [''],
        email: [''],
        password: [''],
      }
    )
  }

  signinform!: FormGroup
  signin() {
    this.http.get<any>(' http://localhost:3000/user').subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.signinform.value.email && a.password === this.signinform.value.password
      });
      
      if (user) {
        alert('user exists!');
        this.signinform.reset();
      }else{
        alert("user not found")
        this.signinform.reset();
      }
    }
    )
    
  }

}
