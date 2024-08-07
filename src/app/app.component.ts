import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';

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
    console.log("here");
    
    this.weatherService.getWeatherData('Los Angeles').subscribe(resp => {
      console.log(resp);
    })
  }
}
