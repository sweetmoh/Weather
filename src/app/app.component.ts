import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    console.log('url', (environment as any).weatherApiBaseUrl);
    
    this.weatherService.getWeatherData('Los Angeles').subscribe(resp => {
      console.log(resp);
    })
  }
}
