import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';

@Component({
  selector: 'app-root',// this is the custom html tag for the component. When you need to use component it should access with this name
  standalone: true, 
  imports: [RouterOutlet,RolesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Frontend';
  name = 'Chamod';
}
