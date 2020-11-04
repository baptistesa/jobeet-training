import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  base_url = "http://localhost:3001";
  socket;

  constructor() {
    this.socket = io(this.base_url, { transport: ['websocket'] });
  }

  // Join the room
  joinRoom(id_room, nickname) {
    console.log("tet");
    this.socket.connect();
    this.socket.emit('join', { id_room: id_room, nickname: nickname })
  }

  // Send message
  sendUserMessage(id_room, message, nickname) {
    this.socket.emit('send-message', { id_room: id_room, text: message, nickname: nickname });
  }

  // Send writing status
  sendWriting(id_room, nickname) {
    this.socket.emit("writing", {
      id_room: id_room,
      nickname: nickname
    });
  }

  // Send stop writing status
  stopWriting(id_room, nickname) {
    this.socket.emit("nowriting", {
      id_room: id_room,
      nickname: nickname
    });
  }

  // OBSERVABLES TO RECEIVE MESSAGES

  getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }

  // Get in live messages
  getStatusWriting = () => {
    return Observable.create((observer) => {
      this.socket.on('writing', (message) => {
        observer.next(message);
      });
    });
  }

  // Get in live messages
  getStatusNoWriting = () => {
    return Observable.create((observer) => {
      this.socket.on('nowriting', (message) => {
        observer.next(message);
      });
    });
  }
}
