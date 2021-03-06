import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title;
  @Input() subtitle;

  constructor() { }

  ngOnInit(): void {
  }

}
