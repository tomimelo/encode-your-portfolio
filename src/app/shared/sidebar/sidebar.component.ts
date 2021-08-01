import { Component, OnInit } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { appIcons } from 'src/app/utils/icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public panelHidden: boolean = false;

  constructor(iconService: IconService) {
    iconService.registerAll(appIcons);
  }

  ngOnInit(): void {
  }

}
