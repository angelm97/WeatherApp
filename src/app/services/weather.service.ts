import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http:HttpClient
  ) { }

  getWeatherData(): Observable<any>{
    const lat = 18.4861;
    const lon = -69.9312;
    const apiId = '7b65696cfabe3422f9c23b694600c98a';
    const queryString = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourle,alerts&appid=${apiId}`;

    return this.http.get(queryString);
  }


}
