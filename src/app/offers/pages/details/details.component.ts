import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from '../../shared/offre.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {

  id_offre;
  offer;

  constructor(private _Activatedroute: ActivatedRoute, private offerService: OffreService, private cd : ChangeDetectorRef) {
    this.id_offre = this._Activatedroute.snapshot.paramMap.get("id");
    this.getOffer();
  }

  ngOnInit(): void {
  }

  // Get the offer to display
  getOffer() {
    this.offerService.getOneOffer(this.id_offre)
      .subscribe(data => {
        this.offer = JSON.parse(JSON.stringify(data)).data;
        this.cd.detectChanges();
      })
  }

}
