import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public isWrongData = false

  public form: FormGroup

  public submitted: boolean = false

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
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
      this.router.navigate(['/'])      
    }, (err) => {
      console.log('err', err);
      this.isWrongData = true
    })

    this.submitted = false

  }
}
