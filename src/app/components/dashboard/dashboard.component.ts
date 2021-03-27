import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImagen = 'https://previews.123rf.com/images/jemastock/jemastock1702/jemastock170211512/72744479-ilustraci%C3%B3n-de-vector-de-sol-tiempo-s%C3%ADmbolo-del-clima.jpg';
  

  constructor() { }

  ngOnInit(): void {
  }

}
