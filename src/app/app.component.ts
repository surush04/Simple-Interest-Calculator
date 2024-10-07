import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InterestCalculatorComponent],
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
