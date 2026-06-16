import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegisterEtudiant } from '../register-etudiant/register-etudiant';
import { RegisterFormateur } from '../register-formateur/register-formateur';
import { Home } from '../../home/home';

@Component({
  selector: 'app-register',
  imports: [RouterOutlet, RouterLink,CommonModule,FormsModule,RegisterEtudiant,RegisterFormateur,Home],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  typeCompte = 'ETUDIANT';
}
