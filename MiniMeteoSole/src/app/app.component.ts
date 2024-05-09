import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniMeteoSole';
  nome: any;
  temp: any;
  clouds: any;
  desc: any;
  feelslike: any;
  humidity: any;
  rain: any;
  windSpeedKmh: any;
  windSpeed: any;
  apikey = '';
  loading = false;

  constructor() {}

  ngOnInit() {}

  prendiMeteo(citta: any) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citta+'&lang=It&appid='+ this.apikey + '72a4cdac4e93a45c094c08b164ce82ba')
    .then(response => response.json())
    .then(data => {
      this.temp = (data['main']['temp'] - 273.15).toFixed(2); 
      this.nome = data['name'];
      this.desc = data['weather'][0]['description'];
      this.clouds = data['clouds']['all'];
      this.feelslike = (data['main']['feels_like'] - 273.15).toFixed(2); 
      this.humidity = data['main']['humidity'];
      this.rain = data['rain'] ? data['rain']['1h'] : 0; 
      this.windSpeed = data['wind']['speed'];
      this.windSpeedKmh = (this.windSpeed * 3.6).toFixed(2);
      this.loading = true;
    });
  }
}
