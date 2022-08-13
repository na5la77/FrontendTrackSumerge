import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
 @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() {
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges called');
    console.log(changes);


   }

  ngOnInit() {
    console.log('onInit called');

  }

}
