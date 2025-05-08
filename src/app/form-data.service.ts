import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formConfigData: any;

  setFormConfig(data: any): void {
    this.formConfigData = data;
  }

  getFormConfig(): any {
    return this.formConfigData;
  }
}
