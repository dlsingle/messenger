import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: any[] | undefined;
  messageInput: string | undefined;
  isFocus: boolean | undefined;

  constructor() { }

  ngOnInit() {
    this.messages = [
      {
        isSender: false,
        avatar: 'assets/img/avatars/5.jpg',
        type: 'text',// text || image
        body: 'Привет! Как дела?',
        timestamp: '6 Октября, 2023 2:25'
      },
      {
        isSender: true,
        type: 'image',// text || image
        body: 'https://otvet.imgsmail.ru/download/310903694_6c67f9c1438dfc4c915fc2b58cc6a308_800.gif',
        timestamp: '6 Октября, 2023 2:27'
      },
      {
        isSender: true,
        type: 'text',// text || image
        body: 'Где ты?',
        timestamp: '6 Октября, 2023 2:29'
      },
      {
        isSender: false,
        avatar: 'assets/img/avatars/5.jpg',
        type: 'text',// text || image
        body: 'Скоро буду',
        timestamp: '6 Октября, 2023 2:31'
      }
    ];
  }

  toggleFocus(isFocus: boolean) {
    this.isFocus = isFocus;
  }

  nl2br(text: string) {
    if (!text) return text;

    return text.replace(/\n/ig, '<br>');
  }
}
