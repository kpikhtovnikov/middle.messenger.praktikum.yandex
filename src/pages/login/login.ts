import Block from 'core/Block';
import 'styles/auth.css';
import { FormValidator } from 'utils/classes/FormValidator';
import { config, AUTH_FORM } from 'utils/consts';
import { handleSubmitForm, checkOnValueInput } from 'utils/functions';

const loginFormValidator = new FormValidator(
  config,
  AUTH_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector,
  config.inputHelperTextSelector,
  config.isShowHelperTextSelector
);

export class LoginPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        checkOnValueInput(evt);
        loginFormValidator.clearError();
        loginFormValidator.toggleBtnState();
      },
      handleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        handleSubmitForm({
          stateForm: loginFormValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: AUTH_FORM,
          disableBtn: loginFormValidator.disableBtn,
          addErrors: loginFormValidator.addErrorsForInput,
        });
      },
      handleValidateInput: (evt: Event) => loginFormValidator.handleFieldValidation(evt),
    };
  }
  render() {

    return `
      <div class="page">
        <main class="page__form">
          <form class="auth" name="login" novalidate>
            <h1 class="auth__title">Вход</h1>
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="text"
              helperText="Логин"
              minlength="3"
              maxlength="20"
              name="login"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="password"
              helperText="Пароль"
              minlength="8"
              maxlength="40"
              classes="input_is-auth"
              name="password"
            }}}
            {{{Button
              onClick=handleSubmitForm
              textBtn="Авторизоваться"
              type="submit"
              classes="button_is-auth"
            }}}
            <a class="auth__link" href="/signup">Нет аккаунта?</a>
          </form>
        </main>
      </div>
    `;
  }
}
