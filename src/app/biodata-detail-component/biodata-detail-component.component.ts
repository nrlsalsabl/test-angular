import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-biodata-detail-component',
  templateUrl: './biodata-detail-component.component.html',
  styleUrls: ['./biodata-detail-component.component.css']
})
export class BiodataDetailComponentComponent implements OnInit {
  person: Person = {
    id: 1,
    name: 'Nurul Salsabila',
    gender: 'Female',
    birthday: new Date(),
    assets: 100000000,
    phone: '081234567891',
    limit: 0.0267 
  }

  constructor () { }
  
  ngOnInit(): void{

  }

}
