import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  name = "Pallavi";
  text:any;
  getyourname(a: any, b: any) {
    const sum = a + b;
    return sum;
  }

  namingdata() {
    return this.name;
  }
  dataalert(a: any) {
    alert(a)
  }
  details = {
    name: "palls",
    role: "eng"
  }
  b = 300;
  a = 500;

  prsentUrl = window.location.href;

  getvalue(val: any) {
    console.warn(val)
  }
  yourname = ''
  obtaindata(val: any) {
    this.yourname = val
  }
  getaddress(val: any) {
    console.warn(val)
  }
  num1=2;
  num2=20;
  sum=0;

  calculate(num1:any,num2:any)
  {
    this.sum=num1+num2;
  }
  eventhandling(val:any)
  {
     console.log(val)
  }

  passdata ="Passing the data from app component to child component"

  setData(data:any){
    console.log(data);
    
  }
  dataget(data:any)
  {
        console.log(data)
  }

  loginUser:any[] =[];
   logingUser:any={
    uname:'',
    pwd:''

  };
  constructor() { }
  loginftn()
  {
    this.loginUser.push(this.logingUser);
    
    localStorage.setItem('loginUser', JSON.stringify(this.loginUser));
  }

}
