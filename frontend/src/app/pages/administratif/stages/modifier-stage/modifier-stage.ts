import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StageService } from '@/app/services/stage';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-modifier-stage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modifier-stage.html',
  styleUrl: './modifier-stage.css',
})
export class ModifierStage {

  @Input() stage: any;

  constructor(private service: StageService) {}

  modifier() {
    this.service.update(this.stage.id, this.stage)
      .subscribe(() => {
        alert('Stage modifié');
      });
  }
}
