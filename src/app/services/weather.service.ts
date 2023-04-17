import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    this.http.get(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}$q=${cityName}`
    );
  }
}
