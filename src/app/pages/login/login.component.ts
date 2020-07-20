import { Component, OnInit, NgZone, EventEmitter, Input, Output  } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private _router:Router,
    private fb: FormBuilder,
    private toast: ToastrService,
    private authService: AuthService,
    public router: Router,
    private ngZone: NgZone,
    private helperService: HelperService,
    ) { }

  ngOnInit() {
    
    this.loginForm = this.fb.group({
      user_name: new FormControl('', {validators: [Validators.required]}),
      password:  new FormControl('', {validators:[Validators.minLength(6), Validators.maxLength(12)]})
    });
  }

  ngAfterViewInit() {
    if (this.authService.checkIfLoggedIn()) {
      this.loginHandler();
      return;
    }
  }
  submitForm() {
   this.helperService.validateAllFormFields(this.loginForm);
    if (this.loginForm.invalid) {
      this.helperService.showToast('All fields are required!', 'error');
      return;
    }

    const formData = this.loginForm.value;

    this.authService.login(formData).subscribe( 
      (success: any) => {
        const userDetails = success.data;
        this.authService.setAuthUser(userDetails);
        this.loginForm.reset();
        this.loginHandler();
      },
      (error: any) => {
        console.log(error.error.message);
        const errors_array = error.error.errors;
        for(let key in errors_array) {
          // if key has nested "errors", get and set the error message, else set null
          this.toast.error(errors_array[key]);
        }
        
        if (!error.error.error) {
          this.helperService.showToast(error.error.message);
        } else {
          this.helperService.showToast(error.error.message);
        }
      }
    );

  }

  loginHandler() {
    this._router.navigate([`/admin/online-consultation`]);
  }

}
