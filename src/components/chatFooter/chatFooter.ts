import { Block } from 'core';
import './chatFooter.css';
import { ChatFooterProps } from './types';
import attachBtn from 'img/attachBtn.svg';
import sendBtn from 'img/sendBtn.svg';

export class ChatFooter extends Block {
  static componentName = 'ChatFooter';

  constructor({ onSubmit, onClick }: ChatFooterProps) {
    super({ events: { submit: onSubmit, click: onClick } });
  }

  protected render(): string {

    return `
      <div class="chat-footer">
        <form class="chat-footer__form">
          <button class="chat-footer__btn-attach" type="button" aria-label="Прикрепить файл">
            <img
              class="chat-footer__icon-attach"
              src="${attachBtn}"
              alt="Прикрепить файл"
            />
          </button>
          <input class="chat-footer__input" type="text" placeholder="Поиск" required />
          <button class="chat-footer__btn-send" type="submit" aria-label="Отправить сообщение">
            <img
              class="chat-footer__icon-send"
              src="${sendBtn}"
              alt="Отправить сообщение"
            />
          </button>
        </form>
      </div>
    `;
  }
}
