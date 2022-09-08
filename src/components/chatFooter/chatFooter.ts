import Block from 'core/Block';
import './chatFooter.css';
import { ChatFooterProps } from './types';
import attach_btn from 'img/attachBtn.svg';
import send_btn from 'img/sendBtn.svg';

export class ChatFooter extends Block {
  static componentName = 'ChatFooter';
  constructor({ onClick }: ChatFooterProps) {
    super({ events: { click: onClick } });
  }
  protected render(): string {

    return `
      <div class="chat-footer">
        <form class="chat-footer__form">
          <button class="chat-footer__btn-attach" type="button" aria-label="Прикрепить файл">
            <img
              class="chat-footer__icon-attach"
              src="${attach_btn}"
              alt="Прикрепить файл"
            />
          </button>
          <input class="chat-footer__input" type="text" placeholder="Поиск" required />
          <button class="chat-footer__btn-send" type="submit" aria-label="Отправить сообщение">
            <img
              class="chat-footer__icon-send"
              src="${send_btn}"
              alt="Отправить сообщение"
            />
          </button>
        </form>
      </div>
    `;
  }
}
