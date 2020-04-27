import { NgModule } from '@angular/core';

import LoginComponent from './login.component';
import { MatFormField } from '@angular/material/form-field';

@NgModule({
  declarations: [LoginComponent],
  imports: [MatFormField],
  exports: [MatFormField],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
