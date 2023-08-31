import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { CustomvalidationService } from 'src/app/core/validators/customvalidation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  form!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private customValidator: CustomvalidationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['',  [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      passwordConfirmation: ['', Validators.required],
      name: ['', Validators.required],
      documentId: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    }, {
      validator: this.customValidator.MatchPassword('password', 'passwordConfirmation'),
    });
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    this.loading = true;
    this.authenticationService.signup(this.form.value)
      .pipe(first())
      .subscribe({
        complete: () => {

        },
        next: () => {
          // get return url from route parameters or default to '/'
          this.router.navigate(['/login']);

        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }

}
