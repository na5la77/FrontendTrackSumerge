import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Output() linkSelected = new EventEmitter<string>();
 onSelect(choosenLink:string){
  this.linkSelected.emit(choosenLink);

 }

}

