import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  


  constructor( private formbuilder:FormBuilder,private http:HttpClient,private router:Router) {
   
   }

  ngOnInit(): void {
    this.signupform=this.formbuilder.group(
      {
        name:[''],
        email:[''],
        password:[''],
      }
    )
  }
  
signupform!: FormGroup
signup(){
  this.http.post<any>(' http://localhost:3000/user',this.signupform.value).subscribe((res)=>
  alert("done")

  )
}
}
