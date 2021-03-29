import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
  //template: '<h1>I am a card</h1>',
  //styles: ['h1{font-weight:normal;}'],
})
export class PropertyCardComponent {
  Property: any = {
    Id: 1,
    Type: 'House',
    Price: 1200,
    Name: 'Some House',
  };
}
