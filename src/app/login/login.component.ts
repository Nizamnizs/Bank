import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data="Happy Banking with us .."
pdata="Enter Account No."

login(){
  alert("login clicked")
}

}