import Block from 'core/Block';
import 'styles/chat.css';
import right_arrow from 'img/rightArrow.svg';
import chats from 'data/chats.json';
import messages from 'data/messages.json';
import { ChatType, MessageProps } from 'types';
import { Chat } from 'utils/classes/Chat';
import { Popup } from 'utils/classes/Popup';
import { FormValidator } from 'utils/classes/FormValidator';
import { config, ADD_USER_FORM, DELETE_USER_FORM } from 'utils/consts';
import { handleSubmitForm, checkOnValueInput } from 'utils/functions';

const addUserFormValidator = new FormValidator(
  config,
  ADD_USER_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector,
  config.inputHelperTextSelector,
  config.isShowHelperTextSelector
);

const deleteUserFormValidator = new FormValidator(
  config,
  DELETE_USER_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector,
  config.inputHelperTextSelector,
  config.isShowHelperTextSelector
);

export class ChatPage extends Block {
  protected getStateFromProps() {
    this.state = {
      addClassForActiveElement: (evt: Event) => {
        new Chat(config).addActiveClassName(evt);
      },
      handleSearchByChats: () => {
        new Chat(config).toggleStateImg();
      },
      handleOpenUserMenu: () => {
        new Popup(
          config.menuListElementUserSelector,
          config.burgerMenuSelector,
          config.isShowMenuSelecor,
          config
        ).handleOpenPopup();
      },
      handleOpenFileMenu: () => {
        new Popup(
          config.menuListElementFileSelector,
          config.btnAttachSelector,
          config.isShowMenuSelecor,
          config
        ).handleOpenPopup();
      },

      handleChangeAddUserInput: (evt: Event) => {
        checkOnValueInput(evt);
        addUserFormValidator.clearError();
        addUserFormValidator.toggleBtnState();
      },
      handleSubmitAddUserForm: (evt: Event) => {
        evt.preventDefault();
        handleSubmitForm({
          stateForm: addUserFormValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: ADD_USER_FORM,
          disableBtn: addUserFormValidator.disableBtn,
          addErrors: addUserFormValidator.addErrorsForInput,
        });
      },
      handleValidateAddUserInput: (evt: Event) => {
        addUserFormValidator.handleFieldValidation(evt);
      },

      handleChangeDeleteUserInput: (evt: Event) => {
        checkOnValueInput(evt);
        deleteUserFormValidator.clearError();
        deleteUserFormValidator.toggleBtnState();
      },
      handleSubmitDeleteUserForm: (evt: Event) => {
        evt.preventDefault();
        handleSubmitForm({
          stateForm: deleteUserFormValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: DELETE_USER_FORM,
          disableBtn: deleteUserFormValidator.disableBtn,
          addErrors: deleteUserFormValidator.addErrorsForInput,
        });
      },
      handleValidateDeleteUserInput: (evt: Event) => {
        deleteUserFormValidator.handleFieldValidation(evt);
      },
    };
  }
  render() {

    return `
      <div class="page">
        <ul class="chat">
          <li class="chat__column chat__column_left">
            <a class="chat__link-profile page__link-profile" href="/profile">
              <span class="chat__link-text">Профиль</span>
              <img class="chat__link-img" src="${right_arrow}" alt="Перейти к профилю пользователя">
            </a>
            {{{SearchChat onSearchByChats=handleSearchByChats }}}
            <ul class="chat__list">
              ${chats.payload
                .map(
                  (chat: ChatType) =>
                    `{{{ListItem
                      userName="${chat.userName}"
                      lastMessage="${chat.lastMessage}"
                      time="${chat.time}"
                      countNotReadMessage="${chat.countNotReadMessage}"
                      srcAvatar="${chat.srcAvatar}"
                      onClick=addClassForActiveElement
                    }}}`
                )
                .join('')}
            </ul>
          </li>
          <li class="chat__column chat__column-default">
            <h2 class="chat__title">Выберите чат чтобы отправить сообщение</h2>
          </li>
          <li class="chat__column chat__column-dialog chat__column_is-hidden">
            <div class="chat__header">
              <div class="chat__inner">
                {{{Avatar
                  srcAvatar="https://plitkar.com.ua/files/2021/12/5fa3ce7f32b70_ov_1_2.jpg"
                  userName="Олег"
                }}}
                <p class="chat__user-name">Олег</p>
              </div>
              {{{BurgerMenu onClick=handleOpenUserMenu}}}
            </div>
            <p class="chat__text-date">25 сентября</p>
            <ul class="chat__messages">
              ${messages.payload
                .map(
                  (message: MessageProps) =>
                    `{{{Message
                      owner=${message.owner}
                      text="${message.text ? message.text : ''}"
                      time="${message.time}"
                      srcImg="${message.srcImg ? message.srcImg : ''}"
                      isRead=${message.isRead ? true : false}
                    }}}`
                )
                .join('')}
            </ul>
            {{{ChatFooter onClick=handleOpenFileMenu}}}
          </li>
        </ul>
        {{{Menu isUser=true}}}
        {{{Menu isUser=false}}}
        {{{Popup
          onClick=handleSubmitAddUserForm
          onInput=handleChangeAddUserInput
          onFocus=handleValidateAddUserInput
          onBlur=handleValidateAddUserInput
          title="Добавить пользователя"
          helperText="Логин"
          textBtn="Добавить"
          classesPopup="popup_add-user"
          classesForm="popup__form_add-user"
          isDefault=true
          name="popup__form_add-user"
        }}}
        {{{Popup
          onClick=handleSubmitDeleteUserForm
          onInput=handleChangeDeleteUserInput
          onFocus=handleValidateDeleteUserInput
          onBlur=handleValidateDeleteUserInput
          title="Удалить пользователя"
          helperText="Логин"
          textBtn="Удалить"
          classesPopup="popup_delete-user"
          classesForm="popup__form_delete-user"
          isDefault=true
          name="popup__form_delete-user"
        }}}
      </div>
    `;
  }
}
