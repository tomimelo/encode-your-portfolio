import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  public projects: any[] = [
    {
      title: "Project A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lorem sed dui eleifend luctus...",
      img: "../../../assets/imgs/placeholder-image.png"
    },
    {
      title: "Project B",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lorem sed dui eleifend luctus...",
      img: "../../../assets/imgs/placeholder-image.png"
    },
    {
      title: "Project C",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lorem sed dui eleifend luctus...",
      img: "../../../assets/imgs/placeholder-image.png"
    },
    {
      title: "Project D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lorem sed dui eleifend luctus...",
      img: "../../../assets/imgs/placeholder-image.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
