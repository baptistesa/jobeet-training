import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  displayMenu : boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (window.location.href == "http://localhost:4200/" || window.location.href == "http://localhost:4200/signup")
      this.displayMenu = false;
  }

}
