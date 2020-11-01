import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscussionComponent } from './pages/discussion/discussion.component';

import { ChatComponent } from './pages/main/chat.component';

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'chat/:id', component: DiscussionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
