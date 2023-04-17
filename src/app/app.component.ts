import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private weather: WeatherService) {}
  title = 'ng-weather-app';

  city: string = '';
  conditions = {
    location: '',
    temp: '',
    wind: '',
    humidity: '',
  };

  fetchWeatherData() {
    this.weather.getWeatherData(this.city).subscribe(
      (response) =>
        (this.conditions = {
          location: response.location.name,
          temp: response.current.temp_c,
          wind: response.current.wind_kph,
          humidity: response.current.humidity,
        })
    );

    this.city = '';
  }
}
