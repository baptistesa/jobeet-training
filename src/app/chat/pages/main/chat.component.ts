import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {

  username;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  // Go to room
  goToRoom() {
    this.router.navigate(["/chat/chat", this.username]);
  }

}
