import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  uname:any;
  pwd:any

  Reguserarray:any[]=[];

  RegUser:any=
  {
    username:'',
    password:''
  }

  reg(data1:any,data2:any)
  {
  
  this.RegUser.username=data1;
  this.RegUser.password=data2;
  console.warn(this.RegUser)

  this.Reguserarray.push(this.RegUser )
  localStorage.setItem('reguser',JSON.stringify(this.RegUser))
  }
  
  registerForm:FormGroup | any;

  // registerForm = new FormGroup
  // (
  //   {
  //     username: new FormControl(),
  //     password: new FormControl()
  //   }
  // )
  regSubmit()
  {
    console.log('Regdata',this.registerForm.value)
  }
  constructor(private fb:FormBuilder)
  {

  }
  ngOnInit()
  {
    this.registerForm = this.fb.group(
  {   
      username :new FormControl(),
      password : new FormControl()
  })
} 

end()
{
  console.log(this.registerForm.value)
}
}