import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservablesComponent } from "./components/observables/observables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObservablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RxJS_Operators';
}
