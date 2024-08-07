import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { 

  }

  getWeatherData(cityName: String) {
    this.http.get(environment.weatherApiBaseUrl, {
      headers : new HttpHeaders()
      .set(environment.xRapidAPIHostHeaderName, environment.xRapidAPIHostHeaderValue)
      .set(environment.xRapidApiKeyHeaderName, environment.xRapidApiKeyHeaderValue),
      params: new HttpParams()
      .set('city', cityName.toString())
      .set('lang', 'EN')
    })
  }
}
