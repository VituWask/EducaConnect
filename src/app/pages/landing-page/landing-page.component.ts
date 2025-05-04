import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initScripts(); // Executa os scripts quando o componente for carregado
  }

  initScripts(): void {
    const menu = () => {
      const ativa = document.querySelector('.ativa');
      const desativa = document.querySelector('.desativa');
      const campo = document.querySelector('.menu_mobile ul');

      if (ativa && desativa && campo) {
        ativa.addEventListener('click', () => {
          campo.classList.toggle('menuAparece');
        });

        desativa.addEventListener('click', () => {
          campo.classList.remove('menuAparece');
        });
      }
    };

    menu(); // Executa a função de menu mobile
  }

}
