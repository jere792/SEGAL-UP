import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}
