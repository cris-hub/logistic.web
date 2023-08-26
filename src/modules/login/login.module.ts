import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { LoginComponent } from './pages/home/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/core/services/authentication/authentication.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [CurrencyPipe,AuthenticationService]
})
export class LoginModule { }
