import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImagen = 'https://previews.123rf.com/images/jemastock/jemastock1702/jemastock170211512/72744479-ilustraci%C3%B3n-de-vector-de-sol-tiempo-s%C3%ADmbolo-del-clima.jpg';
   ciudad="";

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }


  obtenerClima(){

    console.log(this.ciudad)

    this._climaService.getClima(this.ciudad).subscribe(data => {

      console.log(data)
    })
  }
}
