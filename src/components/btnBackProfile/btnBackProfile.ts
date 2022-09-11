import Block from 'core/Block';
import './btnBackProfile.css';
import { BtnBackProfileProps } from './types';
import left_arrow from 'img/leftArrow.svg';

export class BtnBackProfile extends Block {
  static componentName = 'BtnBackProfile';
  constructor({ href }: BtnBackProfileProps) {
    super({ href });
  }
  protected getStateFromProps(props: BtnBackProfileProps): void {
    this.state = {
      href: props.href,
    };
  }
  protected render(): string {

    return `
      <li class="profile-btn">
        <a href="${this.state.href}" class="profile-btn__link" aria-label="Вернуться назад">
          <div class="profile-btn__wrap">
            <img
              class="profile__icon"
              src="${left_arrow}"
              alt="Вернуться назад"
            />
          </div>
        </a>
      </li>
    `;
  }
}
