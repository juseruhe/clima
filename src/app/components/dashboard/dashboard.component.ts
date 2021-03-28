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
   query = false;
   temperatura = 0;
   clima = "";
   humedad = 0;
   loading=false;
   mostrarError=false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }


  obtenerClima(){

  this.query = false;

  this.loading =true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
     this.loading = false
     this.temperatura = data.main.temp - 273
     this.humedad = data.main.humidity
     this.clima = data.weather[0].main
    }, error => {

      this.loading = false;
      this.error();
    })
  }

  error(){

this.mostrarError = true;
setTimeout(()=>{
this.mostrarError = false;
this.ciudad = "";

},3000)
  }
}
