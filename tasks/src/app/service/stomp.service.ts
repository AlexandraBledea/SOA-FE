import { Injectable, NgZone } from '@angular/core';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StompService {
  // private client!: Client;
  // private readonly URL_BASE = 'http://localhost:4000';
  // private readonly topic = '/topic/updates';
  //
  // private messagesSubject = new BehaviorSubject<string[]>([]);
  // public messages$ = this.messagesSubject.asObservable();
  //
  // constructor(private ngZone: NgZone) {}
  //
  // /**
  //  * Initialize and activate WebSocket connection.
  //  */
  // initialize(): void {
  //   if (this.client) {
  //     return; // Prevent multiple initializations
  //   }
  //
  //   this.client = new Client({
  //     webSocketFactory: () => new SockJS(`${this.URL_BASE}/sba-websocket`),
  //     debug: (msg) => console.log('WebSocket Debug:', msg),
  //     reconnectDelay: 5000,
  //   });
  //
  //   this.client.onConnect = () => {
  //     console.log('WebSocket connected');
  //     this.client.subscribe(this.topic, (message) => {
  //       this.ngZone.run(() => {
  //         const currentMessages = this.messagesSubject.value;
  //         this.messagesSubject.next([...currentMessages, message.body]);
  //       });
  //     });
  //   };
  //
  //   this.client.onDisconnect = () => console.log('WebSocket disconnected');
  //
  //   this.client.activate(); // Activate WebSocket connection
  // }
  //
  // disconnect(): void {
  //   if (this.client) {
  //     this.client.deactivate(); // Clean up WebSocket connection
  //     this.client = undefined!;
  //   }
  // }
}
