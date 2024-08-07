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
    return this.http.get((environment as any).weatherApiBaseUrl, {
      headers : new HttpHeaders()
      .set((environment as any).xRapidAPIHostHeaderName, (environment as any).xRapidAPIHostHeaderValue)
      .set((environment as any).xRapidApiKeyHeaderName, (environment as any).xRapidApiKeyHeaderValue),
      params: new HttpParams()
      .set('city', cityName.toString())
      .set('lang', 'EN')
    })
  }
}
