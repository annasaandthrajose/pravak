import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
acno="";


pswd=""

accountDetails:any={
  1000:{acno:1000,username:"userone",balance:5000,password:"user1"},
  1001:{acno:1001,username:"usertwo",balance:3000,password:"user2"},
  1002:{acno:1002,username:"userthree",balance:3000,password:"user3"},
  1003:{acno:1003,username:"userfour",balance:3000,password:"user4"}
  

  }
  constructor(private router:Router,private service:DataService,private fb:FormBuilder) { }
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})
  ngOnInit(): void {
    
  }

  login(){
    if(this.loginForm.valid)
    {
      var acno=this.loginForm.value.acno;
      var pswd=this.loginForm.value.pswd;
      var users=this.service.accountDetails;
      if(acno in users){
        if(pswd==users[acno]["password"]){
        
        alert("login Sucessful")
        this.router.navigateByUrl("welcome")
          
        }
        else{
          alert("incorrect password")
        }
      }
    else{
      alert("user doesnt exist,please register")
    }
   
    }
    
  else{
    alert("invalid form")
  }
 

}

}



