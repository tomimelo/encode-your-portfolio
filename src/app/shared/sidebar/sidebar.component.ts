import { Component, OnInit } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { IAccordion } from 'src/app/models/accordion.interface';
import { appIcons } from 'src/app/utils/icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public panelHidden: boolean = false;
  public accordions: IAccordion[] = [
    {
      title: 'Menu',
      active: true,
      children: [
        {
          icon: "bx bxl-html5",
          text: "index.html",
          routerLink: 'home'
        },
        {
          icon: "bx bxl-css3",
          text: "about_me.css",
          routerLink: 'about-me'
        },
        {
          icon: "bx bxl-javascript",
          text: "my_projects.js",
          routerLink: 'my-projects'
        }
      ]
    }
  ];

  constructor(iconService: IconService) {
    iconService.registerAll(appIcons);
  }

  ngOnInit(): void {
  }

}
