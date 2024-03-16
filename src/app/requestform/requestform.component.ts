import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {NgIf} from "@angular/common";
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatIcon} from "@angular/material/icon";
import {RequestserviceService} from "../requestservice.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {FormsModule, NgForm} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {BrowserModule} from "@angular/platform-browser";
import {MatNativeDateModule, provideNativeDateAdapter} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@Component({
  selector: 'app-requestform',
  standalone: true,
  providers: [provideNativeDateAdapter()],

  imports: [
    MatButton,
    MatLabel,
    MatFormField,
    MatInput,
    MatCheckbox, NgIf, MatDatepickerToggle, MatDatepicker, MatIcon,HttpClientModule,
    FormsModule, MatSelect, MatOption, MatRadioGroup, MatRadioButton,MatNativeDateModule,MatDatepickerModule
  ],
  templateUrl: './requestform.component.html',
  styleUrl: './requestform.component.css'
})
export class RequestformComponent {
  constructor(private apiService : RequestserviceService) {}
  selectedOption: any;
  handleCheckboxChange(option: string) :void{
    if (this.selectedOption === option) {
      this.selectedOption = null;
    } else {
      this.selectedOption = option;
    }
  }

  onSubmit(formData:NgForm){
    console.log('Form Data:', formData.value);
    this.apiService.submitFormData(formData).subscribe({
    next:(res)=>{
      console.log(res);
    },
      error:(err)=>{
      console.log(err);
      }
    });
  }
}
