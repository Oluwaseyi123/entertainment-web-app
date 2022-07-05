import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: Boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  login(e:any){
    e.preventDefault()
    console.log('logged in')
    this.isLoading = true
    console.log(this.isLoading)
  }

}
