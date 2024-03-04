//Libreias Importadas para la funcionalidad del componente login
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

//Declaracion del componente
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//Clase del componente y se exporta
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  showErrorModal: boolean = false;

  //Constructor del componente
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  //Metodo OnInit del ciclo de vida del componente
  ngOnInit(): void {
  }

  //Metodo onSubmit para el envio de datos del formulario
  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => {
        console.log(error);
        this.showErrorModal = true;
      });
  }

  //Metodo para el login con Google
  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => console.log(error));
  }

  //Metodo para el registro de usuario
  OnClick1() {
    this.router.navigate(['/register']);
  }
}
