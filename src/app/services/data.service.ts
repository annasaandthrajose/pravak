import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails:any={
    1000:{acno:1000,username:"userone",balance:5000,password:"user1"},
    1001:{acno:1001,username:"usertwo",balance:3000,password:"user2"},
    1002:{acno:1002,username:"userthree",balance:3000,password:"user3"},
    1003:{acno:1003,username:"userfour",balance:3000,password:"user4"}
    
  
    }
  constructor(private router:Router,private http:HttpClient) { 
    this.getDetails()
  }
  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
  }
  getDetails(){
    if(localStorage.getItem("accountDetails")){
      this.accountDetails=JSON.parse(localStorage.getItem("accountDetails")||'')
    }
    
  }
  register(uname:any,acno:any,pswd:any){
    const data={
      uname,acno,pswd
    }
return this.http.post("http://localhost:2000/register",data)
    }

    login(acno:any,pswd:any){
      const data={
        acno,pswd
      }
  return this.http.post("http://localhost:2000/login",data)
      }
  }

  