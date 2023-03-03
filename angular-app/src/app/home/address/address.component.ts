import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
 @Input() adressdata:any
 childData ="this is the address child data";

}
