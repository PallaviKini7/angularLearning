import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  getvaluedadat() {
    return "hkjshlkfshkfjs"
  }
  danger = "danger";
  set !: string;
  multiclass = ["underline", "success"]
  multiselection = {
    color: "red",
    fontsize: "32px",
    textdecoration: "underline"
  }
  hasError = false;
  txt = '';
  text = '';

  hideshow: boolean = true;
  cond_vall = false;

  btntext = "showingbutton";
  btntext2 = "hidingbutton"

  hidngdata() {
    this.cond_vall = !this.cond_vall;
    if (this.cond_vall == true) {
      this.set = "Clicked"
    }
    else {
      this.set = " "
    }

  }


  age = 13;
  name = ['pallavi', 'palls', 'panns']

  users = [
    {
      name: "pallavi",
      age: 22
    },
    {
      name: "pannaga",
      age: 16
    },
    {
      name: "mamatha",
      age: 23
    },
    {
      name: "palls",
      age: 28
    },

  ]

  student = [
    {
      name: 'pavan',
      phone: 9090
    },
    {
      name: 'davan',
      phone: 9020
    },
    {
      name: 'mavan',
      phone: 9010
    },
    {
      name: 'ravan',
      phone: 9000
    }
  ]

}
