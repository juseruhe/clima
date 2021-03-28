import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url='http://api.openweathermap.org/data/2.5/weather?appid=';
  key ='0695de5fe8ea45c2bf4ba4b6d21116b8';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>{

    const URL = this.url+this.key+'&q='+ciudad

    return this.http.get(URL)
  }
}
