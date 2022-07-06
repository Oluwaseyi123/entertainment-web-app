import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: Boolean = false

  constructor(
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

  login(e:any){
    e.preventDefault()
    console.log('logged in')
    this.isLoading = true
    console.log(this.isLoading)
    setTimeout(() => {
      this.router.navigateByUrl('/trending')
    }, 2000)
    
  }

}
