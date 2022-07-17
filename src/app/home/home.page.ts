import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  weatherData:any;
  temperature:string;
  mainWeather:string;
  differentTime:Array<any>;

  constructor(
    private weatherService: WeatherService,
  ) {}

  ngOnInit() {
    this.temperature = '°';
    this.getWeatherData();
   
  }


  getWeatherData(){
    this.weatherService.getWeatherData().subscribe(res=> {
      
      var name_zone = res.timezone;
      name_zone = name_zone.split("/").pop().replace('_', ' ');
      res = {...res, name_zone};

      this.weatherData = res;
      this.mainWeather = this.weatherData?.current.weather[0].main;
    
  
    })
  }

  getDateToday(){
    const date= new Date();
   
    return date.toString()
            .split(date.getFullYear()
                    .toString()
              )[0];
  }

}
