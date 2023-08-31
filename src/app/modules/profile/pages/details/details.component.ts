import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { CustomvalidationService } from 'src/app/core/validators/customvalidation.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {


  form!: FormGroup;
  loading = false;
  submitted = false;
  error = this.authenticationService.currentUserValue?.user.username;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private customValidator: CustomvalidationService
  ) {


  }
  ngOnInit() {
    this.authenticationService.currentUser

    this.form = this.formBuilder.group({
      username: [this.authenticationService.currentUserValue?.user.username, [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: [this.authenticationService.currentUserValue?.user.password, Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      passwordConfirmation: [this.authenticationService.currentUserValue?.user.password, Validators.required],
      name: [this.authenticationService.currentUserValue?.user.name, Validators.required],
      documentId: [this.authenticationService.currentUserValue?.user.documentId, Validators.required],
      phone: [this.authenticationService.currentUserValue?.user.phone, Validators.required],
      email: [this.authenticationService.currentUserValue?.user.email, Validators.required],
      country: [this.authenticationService.currentUserValue?.user.country, Validators.required],
      city: [this.authenticationService.currentUserValue?.user.city, Validators.required],
      address: [this.authenticationService.currentUserValue?.user.address, Validators.required],
    }, {
      validator: this.customValidator.MatchPassword('password', 'passwordConfirmation'),
    });
    this.form.disable();
  }
  get f() { return this.form.controls; }



}
