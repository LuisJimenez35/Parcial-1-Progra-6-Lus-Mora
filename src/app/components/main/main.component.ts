// Librerias y Componentes importados
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

//Declaracion del componente
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
//Clase del componente y se exporta
export class MainComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  //Metodo OnInit del ciclo de vida del componente
  ngOnInit(): void {
  }

  //Metodo para el logout de usuario
  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

}
