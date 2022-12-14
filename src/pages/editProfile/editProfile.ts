import { Block, store, BrowseRouter as router } from 'core';
import 'styles/profile.css';
import { Popup, FormValidator } from 'utils/classes';
import { config, FORM_ELEMENTS } from 'utils/consts';
import { handleSubmitForm, checkIsLoginIn } from 'utils';
import { authService, profileService } from 'services';
import { UserInfoDTO, UserInfoType, StoreEvents } from 'types';

const editProfileformValidator = new FormValidator(
  config,
  FORM_ELEMENTS.EDIT_PROFILE_FORM,
  config.inputProfileSelector,
  config.btnSubmitFormSelector,
  config.inputProfileHelperTextSelector,
  config.isShowInputProfileHelperTextSelector
);

export class EditProfilePage extends Block {
  constructor(...args: any) {
    super(...args);

    authService.getInfo();

    store.on(StoreEvents.update, () => {
      this.setProps(store.getState());
    });
  }

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
      handleChangeInput: () => {
        editProfileformValidator.clearError();
        editProfileformValidator.toggleBtnState();
      },
      handleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: editProfileformValidator.checkStateForm(),
          inputSelector: config.inputProfileSelector,
          formSelector: FORM_ELEMENTS.EDIT_PROFILE_FORM,
          disableBtn: editProfileformValidator.disableBtn,
          addErors: editProfileformValidator.addErrorsForInput,
          isValidField: editProfileformValidator.isValidFieldWithCustomRules(),
        });

        if (dataForm) {
          const { chatName, email, lastName, login, name, phone } =
            dataForm as UserInfoType;

          dataForm &&
            profileService.changeUserInfo({
              first_name: name,
              second_name: lastName,
              display_name: chatName,
              login,
              email,
              phone,
            } as UserInfoDTO);
        }
      },
      handleValidateInput: (evt: Event) =>
        editProfileformValidator.handleFieldValidation(evt),
      handleBackBtn: () => router.back(),
    };
  }
  render() {
    checkIsLoginIn();

    const { userInfo = [] } = this.props;
    const { avatar, display_name, email, first_name, login, phone, second_name } =
      userInfo;

    return `
      <div class="profile">
        <ul class="profile__wrapper">
          {{{BtnBackProfile onClick=handleBackBtn}}}
          <li class="profile__column">
            <form
              class="profile__form profile__form_el_edit-form"
              novalidate
            >
            {{{EditAvatar avatar="${avatar}" onClick=handleEditAvatar}}}
              <p class="profile__user-name">${display_name ? display_name : ''}</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="email"
                  helperText="??????????"
                  value="${email ? email : ''}"
                  name="email"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="??????????"
                  value="${login ? login : ''}"
                  minlength="3"
                  maxlength="20"
                  name="login"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="??????"
                  value="${first_name ? first_name : ''}"
                  minlength="1"
                  maxlength="50"
                  name="name"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="??????????????"
                  value="${second_name ? second_name : ''}"
                  minlength="1"
                  maxlength="50"
                  name="lastName"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="tel"
                  helperText="??????????????"
                  value="${phone ? phone : ''}"
                  minlength="10"
                  maxlength="15"
                  name="phone"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="text"
                  helperText="?????? ?? ????????"
                  value="${display_name ? display_name : ''}"
                  minlength="1"
                  maxlength="50"
                  name="chatName"
                  formName="profile__form_el_edit-form"
                }}}
                {{{Button
                  onClick=handleSubmitForm
                  textBtn="??????????????????"
                  classes="button_page_edit-profile"
                  type="submit"
                }}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup
           title="?????????????????? ????????"
           textBtn="????????????????"
           classesPopup="popup_change-avatar"
           isDefault=false
          }}}
      </div>
    `;
  }
}
