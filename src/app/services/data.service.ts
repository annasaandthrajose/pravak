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
  constructor(private router:Router) { 
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
    var users=this.accountDetails
if(acno in users){
  return false
// alert("user exists,please login")
}
else{
users[acno]={
  username:uname,
  acno,
  password:pswd

  
}
this.saveDetails()
return true
// alert("registration Sucessful")
// this.router.navigateByUrl("")
}


}


  
  }

