import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent implements OnInit {
  formConfig: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private router: Router
  ) {
    this.formConfig = this.fb.group({
      fields: this.fb.array([])
    });
  }

  ngOnInit(): void {
    const savedConfig = this.formDataService.getFormConfig();
    if (savedConfig) {
      this.loadSavedConfig(savedConfig);
    }
  }

  get fields(): FormArray {
    return this.formConfig.get('fields') as FormArray;
  }

  addField() {
    const fieldGroup = this.fb.group({
      label: ['', Validators.required],
      type: ['text'],
      required: [false],
      options: this.fb.array([]),
    });
    this.fields.push(fieldGroup);
  }

  addOption(i: number): void {
    const field = this.fields.at(i);
    const options = field.get('options') as FormArray;
    options.push(this.fb.control(''));  // Add a new option
  }

  removeOption(i: number, j: number): void {
    const field = this.fields.at(i);
    const options = field.get('options') as FormArray;
    options.removeAt(j);  // Remove option at index j
  }

  removeField(i: number): void {
    this.fields.removeAt(i);  // Remove field at index i
  }

  submitConfig() {
    if (this.formConfig.valid) {
      this.formDataService.setFormConfig(this.formConfig.value);
      this.router.navigate(['/generated-form']);
    } else {
      this.formConfig.markAllAsTouched(); // This will trigger validation for all fields
    }
  }

  getOptions(field: AbstractControl) {
    return (field.get('options') as FormArray)?.controls;
  }

  loadSavedConfig(savedConfig: any) {
    this.formConfig = this.fb.group({
      fields: this.fb.array(
        savedConfig.fields.map((field: any) => {
          return this.fb.group({
            label: [field.label, Validators.required],
            type: [field.type, Validators.required],
            required: [field.required],
            options: this.fb.array(
              field.type === 'dropdown' ? field.options.map(() => this.fb.control('')) : []
            )
          });
        })
      )
    });
  }

  resetFormConfig() {
    this.formConfig = this.fb.group({
      fields: this.fb.array([])
    });
    this.formDataService.setFormConfig(null); // Clear the saved form configuration
  }
}
