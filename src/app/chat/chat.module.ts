import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/main/chat.component';
import { CustomMaterialModule } from '../core/material.module';
import { RecentsComponent } from './components/recents/recents.component';
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChatComponent, RecentsComponent, DiscussionComponent, MessageComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    CustomMaterialModule,
    FormsModule
  ]
})
export class ChatModule { }
