import { Component, Input } from '@angular/core';
import { BudgetService } from '@/app/services/budget';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier-budget',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modifier-budget.html',
  styleUrl: './modifier-budget.css',
})
export class ModifierBudget {

  @Input() budget: any;

  constructor(private service: BudgetService) {}

  modifier() {
    this.service.update(this.budget.id, this.budget)
      .subscribe(() => {
        alert('Budget modifié');
      });
  }
}
