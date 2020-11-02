import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-offers',
  templateUrl: './card-offers.component.html',
  styleUrls: ['./card-offers.component.scss']
})
export class CardOffersComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() displayButton;
  @Input() idOffre;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // go to details offer
  goToDetails() {
    this.router.navigate(["/offers/offer", this.idOffre]);
  }

}
