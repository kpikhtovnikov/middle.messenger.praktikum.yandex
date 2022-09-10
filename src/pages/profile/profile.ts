import Block from 'core/Block';
import { Popup } from 'utils/classes/Popup';
import { config } from 'utils/consts';
import 'styles/profile.css';
import dataProfile from 'data/profile.json';

const { email, login, name, lastName, chatName, phone } = dataProfile.payload;

export class ProfilePage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleEditAvatar: () => {
        new Popup(
          config.popupChangeAvatarSelector,
          config.editAvatarSelector,
          config.isOpenPopupSelector,
          config
        ).handleOpenPopup();
      },
    };
  }
  render() {

    return `
      <div class="profile">
        <ul class="profile__wrapper">
          {{{BtnBackProfile href="/chat"}}}
          <li class="profile__column">
            <form class="profile__form">
              {{{EditAvatar onClick=handleEditAvatar}}}
              <p class="profile__user-name">Иван</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  type="email"
                  helperText="Почта"
                  value="${email}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Логин"
                  value="${login}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя"
                  value="${name}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Фамилия"
                  value="${lastName}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя в чате"
                  value="${chatName}"
                }}}
                {{{InputProfileWrapper
                  type="tel"
                  helperText="Телефон"
                  value="${phone}"
                }}}
              </ul>
              <ul class="profile__list">
                {{{BtnProfile
                  href="/edit-profile"
                  text="Изменить данные"
                  classes="btn-profile__link_color_red"
                }}}
                {{{BtnProfile
                  href="/edit-password"
                  text="Изменить пароль"
                  classes="btn-profile__link_color_red"
                }}}
                {{{BtnProfile
                  href="/"
                  text="Выйти"
                  classes="btn-profile__link_color_blue"
                }}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup
          title="Загрузите файл"
          textBtn="Поменять"
          classesPopup="popup_change-avatar"
          isDefault=false
        }}}
      </div>
    `;
  }
}
