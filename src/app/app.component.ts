import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RequestformComponent} from "./requestform/requestform.component";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, RequestformComponent,MatButtonModule,MatLabel,
      MatFormField, MatInput,FormsModule,MatDatepickerModule,MatInputModule,
    MatFormFieldModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'winwallpro';
}
