import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss']
})
export class RecentsComponent implements OnInit {

  @Input() title;
  @Input() chat;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  // Go to the discussion
  goToChat() {
    this.router.navigate(["/chat/chat", 2]);
  }

}
