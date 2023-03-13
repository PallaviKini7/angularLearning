import { Component,OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  
  personalDetailForm: FormGroup | any;


  constructor(private fb:FormBuilder)
  {
     
  }
  setingValue ={
    firstName: "John",
    lastName: "Doe",
    email: "ychag@example.com",
    phone: "0123456789"
  }
  ngOnInit()
  {
    // this.personalDetailForm = new FormGroup(
    //   {
       
    //     firstName: new FormControl(),
    //     lastName: new FormControl(),
    //     email: new FormControl(),
    //     phone: new FormControl(),
    //   }
    // )
    this.personalDetailForm = this.fb.group({
      firstName: new FormControl('',
      [
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/)
      ]
     ),
      lastName: new FormControl(),
      email: new FormControl('',
      [Validators.email,
      Validators.required]
      ),
      phone: new FormControl(),
    })

    
    // this.personalDetailForm.setValue(this.setingValue)

    // this.personalDetailForm.patchValue(this.setingValue)
  }
  
  


  submitDetails()

  {
    console.log(this.personalDetailForm.value);
    console.log(this.personalDetailForm.get('firstName').value)
    console.log('valid',this.personalDetailForm.valid)
    console.log('invalid',this.personalDetailForm.invalid)
    console.log('touched',this.personalDetailForm.touched)
    console.log('dirty',this.personalDetailForm.dirty)
    console.log('pristine',this.personalDetailForm.pristine)
    
    

  }
  resetForm()
  {
    this.personalDetailForm.reset()
  }

 

}
