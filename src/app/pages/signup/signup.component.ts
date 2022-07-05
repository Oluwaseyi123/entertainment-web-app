import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading: Boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  signup(e:any){
    e.preventDefault()
    console.log('logged in')
    this.isLoading = true
    console.log(this.isLoading)
  }

}
