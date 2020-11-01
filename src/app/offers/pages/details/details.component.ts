import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id_offre;

  constructor(private _Activatedroute: ActivatedRoute) {
    this.id_offre = this._Activatedroute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
  }

}
