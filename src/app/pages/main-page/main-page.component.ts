import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const toggleButton = document.getElementById("toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");

    toggleButton?.addEventListener("click", () => {
      sidebar?.classList.toggle("active");
    });
  }
  closeSidebar(): void {
    const sidebar = document.querySelector(".sidebar");
    sidebar?.classList.remove("active");
  }
}
