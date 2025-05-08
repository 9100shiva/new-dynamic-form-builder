import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-generated-form',
  templateUrl: './generated-form.component.html',
  styleUrls: ['./generated-form.component.css']
})
export class GeneratedFormComponent implements OnInit {
  generatedForm: FormGroup = this.fb.group({});
  formFields: any[] = [];
  submittedData: any = null

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    const formConfig = this.formDataService.getFormConfig();  // Retrieve the form configuration
    if (formConfig) {
      this.formFields = formConfig.fields;  // Extract fields
      this.createForm();
    }
  }

  createForm(): void {
    const controls = this.formFields.reduce((acc, field) => {
      const initialValue = '';
      const validators = [];
  
      // Add required validator if field is required
      if (field.required) {
        validators.push(Validators.required);
      }
  
      // Add email validator if field type is 'email'
      if (field.type === 'email') {
        validators.push(Validators.email);
      }
      
      acc[field.label] = this.fb.control(initialValue, validators);
      return acc;
    }, {});
  
    this.generatedForm = this.fb.group(controls);
  }
  

  isControlInvalid(label: string): boolean {
    const control = this.generatedForm.get(label);
    return control ? control.invalid && control.touched : false;
  }

  submitForm() {
    if (this.generatedForm.valid) {
      this.submittedData = this.generatedForm.value;
      console.log("Submitted Data: ", this.submittedData);  // Log the form data to the console
    } else {
      this.generatedForm.markAllAsTouched();
    }
  }

  clearForm() {
    this.generatedForm.reset();
    this.submittedData = null;
  }

  redirectToConfig() {
    this.router.navigate(['/form-config']);
  }
}  

