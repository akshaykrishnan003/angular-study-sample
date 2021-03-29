import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Type: 'House',
      Price: 1200,
      Name: 'House One',
    },
    {
      Id: 2,
      Type: 'House',
      Price: 4500,
      Name: 'House Two',
    },
    {
      Id: 3,
      Type: 'House',
      Price: 2300,
      Name: 'House Three',
    },
    {
      Id: 4,
      Type: 'House',
      Price: 2200,
      Name: 'House Four',
    },
    {
      Id: 5,
      Type: 'House',
      Price: 1900,
      Name: 'House Five',
    },
    {
      Id: 6,
      Type: 'House',
      Price: 7300,
      Name: 'House Six',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
