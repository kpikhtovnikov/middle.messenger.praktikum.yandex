import { Block } from 'core';
import './btnProfile.css';
import { BtnProfileProps } from './types';

export class BtnProfile extends Block {
  static componentName = 'BtnProfile';

  constructor({ onClick, ...rest }: BtnProfileProps) {
    super({ events: { click: onClick }, ...rest });
  }

  protected getStateFromProps(props: BtnProfileProps): void {
    this.state = {
      text: props.text,
      classes: props.classes,
      type: props.type,
    };
  }

  protected render(): string {
    const { text, classes, type } = this.state;
    const button =
      type === 'link'
        ? `<button class="btn-profile__link ${classes ? classes : ''}">${text}</button>`
        : `<button class="btn-profile__btn ${classes ? classes : ''}">${text}</button>`;

    return `
      <li class="btn-profile">${button}</li>
    `;
  }
}
