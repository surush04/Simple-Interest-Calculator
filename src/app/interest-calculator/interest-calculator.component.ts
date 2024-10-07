import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-calculator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './interest-calculator.component.html',
  styleUrl: './interest-calculator.component.css'
})
export class InterestCalculatorComponent {
  principal: number = 0; 
  amount: number = 0
  mP: boolean = true
  totalMonth = 0
  rate: number = 0; 
  time: number = 0; 
  interest: number = 0; 
  totalAmount: number = 0; 
  
    monthlyBreakdown: { month: number; amount: number; date: string; monthlyPayment: number }[] = [];
  updatePrincipal(event: Event) {
    const input = event.target as HTMLInputElement;
    this.principal = Number(input.value);
    this.amount = Number(input.value)
  }

  updateRate(event: Event) {
    const input = event.target as HTMLInputElement;
    this.rate = Number(input.value) / 100;
  }

  updateTime(event: Event) {
    const input = event.target as HTMLInputElement;
    this.time = Number(input.value)/12;
  }
  calculateInterest() {
    this.interest = this.principal * this.rate * this.time;
    this.totalAmount = this.principal + this.interest;
    const monthlyPayment=this.interest/(this.time*12)
    
    
    const startDate = new Date();
     this.monthlyBreakdown = []; // Сброс массива
     for (let i = 0; i < this.time * 12; i++) {
      const paymentDate = new Date(startDate);
      paymentDate.setMonth(startDate.getMonth() + i); // Увеличиваем месяц
      const amount = this.principal + (this.interest / (this.time * 12)) * (i + 1);
      this.monthlyBreakdown.push({ month: i + 1, amount, date: paymentDate.toLocaleDateString(),monthlyPayment });
    }
  }

  mPercantage(p: any){
    
  }
}
