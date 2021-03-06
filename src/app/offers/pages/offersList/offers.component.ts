import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OffreService } from '../../shared/offre.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersComponent implements OnInit {

  offres: any;

  constructor(private offresService: OffreService, private cd: ChangeDetectorRef) {
    this.getAllOffers();
  }

  ngOnInit(): void {
  }

  // Retrieve all offers from WS
  getAllOffers() {
    this.offresService.getOffers()
      .subscribe(data => {
        this.offres = JSON.parse(JSON.stringify(data)).data;
        this.cd.detectChanges();
      }, error => {

      })
  }

}
