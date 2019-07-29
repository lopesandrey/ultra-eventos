import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuthneticated;
  loginForm: FormGroup;
  createAcount: FormGroup;
  public alerts: [{
    timeout: 5000
  }];

  failed = false;

  configs = {
    isLogin: true,
    actionText: 'Entrar',
    buttonActionText: 'Criar conta.',
    isLoading: false,
    alreadyC: 'Não tem uma conta?'
  };

  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.createFormC();
    this.authService.isAuthneticated.subscribe((res: boolean) => this.isAuthneticated = res)

  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  createFormC(): void {
    this.createAcount = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      celNumber: ['', [Validators.required, Validators.minLength(9)]],
    });
  }

  onSubmit(): void {
    this.configs.isLoading = true;

    const operation: Observable<any> =
      (this.configs.isLogin)
        ? this.authService.signIn(this.loginForm.value)
        : this.authService.signUp(this.createAcount.value);
    operation.subscribe(res => {
      this.configs.isLoading = false;
      const redirect: string = this.authService.redirectUrl  || '/home';
      this.router.navigate([redirect]);
      this.authService.redirectUrl = null;
    },
      err => {
        this.failed = true;
        this.configs.isLoading = false;
      }
    );


  }

  changeAction(): void {
    this.configs.isLogin = !this.configs.isLogin;
    this.configs.actionText = !this.configs.isLogin ? 'Cadastrar' : 'Entrar';
    this.configs.buttonActionText = !this.configs.isLogin ? 'Já tenho uma conta.' : 'Criar conta.';
    this.configs.alreadyC = !this.configs.isLogin ? 'Entre com sua conta: ' : 'Não tem uma conta?';
    !this.configs.isLogin ? this.loginForm.addControl('name', this.nameControl) : this.loginForm.removeControl('name');
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  get name(): FormControl {
    return this.createAcount.get('name') as FormControl;
  }
  get celNumber(): FormControl {
    return this.createAcount.get('celNumber') as FormControl;
  }
  get cpf(): FormControl {
    return this.createAcount.get('cpf') as FormControl;
  }
}
