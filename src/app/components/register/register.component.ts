// Object: RegisterComponent
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

//Declaracion del componente
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

//Clase del componente y se exporta
export class RegisterComponent implements OnInit {

  formReg: FormGroup;
  showErrorModal: boolean = false;

  //Constructor del componente
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  //Metodo OnInit del ciclo de vida del componente
  ngOnInit(): void {
  }

  //Metodo onSubmit para el envio de datos del formulario
  onSubmit() {
    if (this.formReg.valid) {
      this.userService.register(this.formReg.value)
        .then(response => {
          console.log(response);
          this.router.navigate(['/login']);
        })
        .catch(error => {
          console.log(error);
          // Mostrar el modal de error
          this.showErrorModal = true;
        });
    }
  }

  //Metodo para el cierre del modal de error
  closeModal() {
    this.showErrorModal = false;
  }

}


