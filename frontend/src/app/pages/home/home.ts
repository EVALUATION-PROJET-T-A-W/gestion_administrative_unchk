
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from '../auth/login/login';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, Login],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
