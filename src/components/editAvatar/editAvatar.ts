import Block from 'core/Block';
import './editAvatar.css';
import { EditAvatarProps } from './types';
import avatar from 'img/avatar.svg';

export class EditAvatar extends Block {
  static componentName = 'EditAvatar';
  constructor({ onClick }: EditAvatarProps) {
    super({ events: { click: onClick } });
  }
  protected render(): string {

    return `
      <div class="edit-avatar">
        <img class="edit-avatar__img" src="${avatar}" alt="Аватар" />
        <span class="edit-avatar__span">Поменять аватар</span>
      </div>
    `;
  }
}
