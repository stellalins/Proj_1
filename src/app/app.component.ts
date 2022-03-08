import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'exer002-contador';
  resultado : number = 0;

  acrescenta(): void {
    this.resultado++
  }

  decrementa(): void{
    if(this.resultado > 0){      
      this.resultado--
    }
  }
}