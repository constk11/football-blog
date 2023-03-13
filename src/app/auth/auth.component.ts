import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public errorMessage = ''

  public isWrongData = false

  public form: FormGroup

  public submitted = false

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private auth: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['authFailed']) {
        this.errorMessage = 'Сессия истекла. Авторизуйтесь заново'
      }
    })

    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  public submit() {
    if (this.form.invalid) { return; }

    this.submitted = true

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    
    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.errorMessage = ''
      this.router.navigate(['/'])      
    }, (err) => {
      console.log('err', err);
      this.isWrongData = true
      this.errorMessage = 'Неверный логин или пароль'
    })

    this.submitted = false

  }
}
