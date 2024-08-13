import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-biodata-header-component',
  templateUrl: './biodata-header-component.component.html',
  styleUrls: ['./biodata-header-component.component.css']
})
export class BiodataHeaderComponentComponent implements OnInit{
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