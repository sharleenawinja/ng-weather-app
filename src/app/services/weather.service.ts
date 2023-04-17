import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(
      `https://api.weatherapi.com/v1/current.json?key=66553f3f9b6c4047a2693823231704&q=${cityName}&aqi=no`
    );
  }
}
