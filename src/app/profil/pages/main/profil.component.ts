import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../shared/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  infos : any;

  constructor(private profilService : ProfilService) {
    this.getInfosUsers();
  }

  ngOnInit(): void {
  }

  getInfosUsers() {
    this.profilService.getInfosUser()
      .subscribe(data => {
        this.infos = JSON.parse(JSON.stringify(data)).data;
      })
  }

}
