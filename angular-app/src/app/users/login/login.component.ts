import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  getvaluedadat()
  {
    return "hkjshlkfshkfjs"
  }
  danger="danger";
  multiclass =["underline","success"]
  multiselection ={
    color:"red",
    fontsize:"32px",
    textdecoration :"underline"
  }
  hasError = false;
  txt='';
  text ='';

  hideshow:boolean = true;
  cond_vall=false;

  btntext="showingbutton";
  btntext2="hidingbutton"
  
  hidngdata()
  {
    this.cond_vall=!this.cond_vall;
  }

  age =13;

}
