import {Component, OnInit} from '@angular/core';
import {BudgetService} from '@/app/services/budget';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-liste-budgets',
  imports: [FormsModule, CommonModule],
  templateUrl: './liste-budgets.html',
  styleUrl: './liste-budgets.css',
})
export class ListeBudgets implements OnInit {

  budgets: any[] = [];

  constructor(private service: BudgetService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(res => {
      this.budgets = res;
    });
  }

  supprimer(id: number) {
    if (confirm('Supprimer ce budget ?')) {
      this.service.delete(id).subscribe(() => this.load());
    }
  }

}
