import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserRegister } from 'src/app/models/userRegister';
import { AuthenticatService } from 'src/app/services/authentication/authentication.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef  } from 'ngx-bootstrap/modal';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  user: UserRegister;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  userName: string;

  constructor(private authService: AuthenticatService, private fb: FormBuilder, private alertify: AlertifyService,
              public modalRef: BsModalRef) { 
                if (!authService.currentUser)
                  this.userName = "11";
                else  
                  this.userName = authService.currentUser.userName;
                console.log(this.userName)
              }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-orange'
    };
    this.createRegiserForm();
  }

  createRegiserForm() {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      userType: ['regular'],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      street: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {mismatch : true};
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.alertify.success('Successfull registration');
        this.modalRef.hide();
      }, error => {
        this.alertify.error(error);
      }, () => {
        const model: any = {};
        model.password = this.user.password;
        model.email = this.user.email;
        this.authService.login(model).subscribe(() => {
          console.log('logged in');
        });
      });
    }
  }

  registerRenta() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.registerRentacar(this.user).subscribe(() => {
        this.alertify.success('Successfull registration');
        this.modalRef.hide();
      }, error => {
        this.alertify.error(error);
      }, () => {
        const model: any = {};
        model.password = this.user.password;
        model.email = this.user.email;
        this.authService.login(model).subscribe(() => {
          console.log('logged in');
        });
      });
    }
  }

  registerAvio() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.registerAviocompany(this.user).subscribe(() => {
        this.alertify.success('Successfull registration');
        this.modalRef.hide();
      }, error => {
        this.alertify.error(error);
      }, () => {
        const model: any = {};
        model.password = this.user.password;
        model.email = this.user.email;
        this.authService.login(model).subscribe(() => {
          console.log('logged in');
        });
      });
    }
  }

}
