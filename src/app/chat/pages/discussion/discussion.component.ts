import { ViewportRuler, ScrollDispatcher, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../shared/chat.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {


  is_writting = false;
  messages = [];
  message;
  username;

  constructor(private chatService: ChatService, private _Activatedroute: ActivatedRoute) {
    this.username = this._Activatedroute.snapshot.paramMap.get("id");
    this.chatService.joinRoom(1, this.username);
  }

  ngOnInit(): void {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
    this.chatService
      .getStatusWriting()
      .subscribe((writing) => {
        if (writing.nickname != this.username)
          this.is_writting = true;
      });
    this.chatService
      .getStatusNoWriting()
      .subscribe((nowriting) => {
        if (nowriting.nickname != this.username)
          this.is_writting = false;
      });
  }

  // Send status writting
  updateStatus(event) {
    if (this.message == "") {
      this.chatService.stopWriting(1, this.username);
    }
    else {
      this.chatService.sendWriting(1, this.username);
    }
  }

  // Send message
  sendMessageUser() {
    this.chatService.stopWriting(1, this.username);
    this.chatService.sendUserMessage(1, this.message, this.username);
    this.message = "";
  }

}
