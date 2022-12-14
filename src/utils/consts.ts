const config = {
  inputSelector: 'input__text-field',
  inputPasswordSelector: "input[type='password']",
  inputErrorSelector: 'input__text_error',
  inputHelperTextSelector: 'input__helper-text',
  isShowHelperTextSelector: 'input__helper-text_show',
  btnSubmitFormSelector: 'button',
  isDisableBtnSubmitSelector: 'button_disable',
  labelTextSelector: 'input__text',
  isValuelabelTextSelector: 'input__text_isValue',
  messagesSelector: 'list-item',
  contentDefaultSelector: 'chat__column-default',
  contentDialogSelector: 'chat__column-dialog',
  popupAddUserSelector: 'popup_add-user',
  popupDeleteUserSelector: 'popup_delete-user',
  popupChangeAvatarSelector: 'popup_change-avatar',
  popupAddChatSelector: 'popup_add-chat',
  isActiveChatSelector: 'list-item_is-active',
  hiddenChatSelector: 'chat__column_is-hidden',
  burgerMenuSelector: 'burger-menu',
  isActiveBurgerMenuSelector: 'burger-menu_active',
  isOpenPopupSelector: 'popup_opened',
  popoverSelector: 'popover',
  btnAttachSelector: 'chat-footer__btn-attach',
  isShowPopoverSelector: 'popover_is-show',
  menuItemSelector: 'menu__item',
  popup–°ontainerSelector: 'popup__container',
  editAvatarSelector: 'edit-avatar',
  editAvatarTextSelector: 'edit-avatar__span',
  menuListElementUserSelector: 'menu__list_element_user',
  menuListElementFileSelector: 'menu__list_element_file',
  menuClassSelector: 'menu',
  isShowMenuSelector: 'menu_is-show',
  menuBtnSelector: 'menu-button',
  searchInputByChatsSelector: 'input-chat',
  imgFromSearchInputByChatsSelector: 'search-chat__img',
  inputProfileSelector: 'input-profile',
  menuBtnAddUserSelector: 'menu__btn_add-user',
  menuBtnDeleteUserSelector: 'menu__btn_delete-user',
  inputProfileHelperTextSelector: 'input-profile-wrapper__error',
  isShowInputProfileHelperTextSelector: 'input-profile-wrapper__error_is-show',
  addChatBtnSelector: 'search-chat__btn',
  usersSelector: 'users',
  userItemSelector: 'user-item',
  userItemWrapperSelector: 'user-item__wrapper',
  userItemAvatarSelector: 'user-item__avatar',
  userItemLoginSelector: 'user-item__text-login',
  userItemTextEmailSelector: 'user-item__text-email',
  userItemBtnSelector: 'user-item__btn',
  tooltipSelector: 'tooltip',
  tooltipIsSuccessSelector: 'tooltip_is-success',
  tooltipIsErrorSelector: 'tooltip_is-error',
  chatFooterInputSelector: 'chat-footer__input',
};

const DAYS = ['–ü–Ĺ', '–í—ā', '–°—Ä', '–ß—ā', '–ü—ā', '–°–Ī', '–í—Ā'];
const MONTH = [
  '—Ź–Ĺ–≤–į—Ä—Ź',
  '—Ą–Ķ–≤—Ä–į–Ľ—Ź',
  '–ľ–į—Ä—ā–į',
  '–į–Ņ—Ä–Ķ–Ľ—Ź',
  '–ľ–į—Ź',
  '–ł—é–Ĺ—Ź',
  '–ł—é–Ľ—Ź',
  '–į–≤–≥—É—Ā—ā–į',
  '—Ā–Ķ–Ĺ—ā–Ķ–Ī—Ä—Ź',
  '–ĺ–ļ—ā—Ź–Ī—Ä—Ź',
  '–Ĺ–ĺ—Ź–Ī—Ä—Ź',
  '–ī–Ķ–ļ–į–Ī—Ä—Ź',
];

const PATHNAMES = {
  SIGNIN_PATH: '/',
  SIGNUP_PATH: '/sign-up',
  MESSAGER_PATH: '/messenger',
  SETTINGS_PATH: '/settings',
  EDIT_SETTINGS_PATH: '/edit-settings',
  EDIT_PASSWORD_PATH: '/edit-password',
  PATH_NOT_FOUND: '/path-not-found',
};

const ACTIONS_WEBSOCKET = {
  OPEN: 'open',
  CLOSE: 'close',
  MESSAGE: 'message',
  ERROR: 'error',
};

const TYPES_MESSAGE_WEBSOCKET = {
  PING: 'ping',
  PONG: 'pong',
  MESSAGE: 'message',
  GET_OLD: 'get old',
};

const MESSAGES = {
  SUCCESS_SIGNUP_MESSAGE: '–í—č —É—Ā–Ņ–Ķ—ą–Ĺ–ĺ –∑–į—Ä–Ķ–≥–ł—Ā—ā—Ä–ł—Ä–ĺ–≤–į–Ľ–ł—Ā—Ć!',
  SUCCESS_SIGNIN_MESSAGE: '–í—č —É—Ā–Ņ–Ķ—ą–Ĺ–ĺ –≤–ĺ—ą–Ľ–ł –≤ –Ņ—Ä–ł–Ľ–ĺ–∂–Ķ–Ĺ–ł–Ķ!',
  SUCCESS_CREATE_MESSAGE: '–°–ĺ–∑–ī–į–Ĺ —á–į—ā!',
  SUCCESS_CHANGE_AVATAR_MESSAGE: '–ź–≤–į—ā–į—Ä –ł–∑–ľ–Ķ–Ĺ–Ķ–Ĺ!',
  SUCCESS_CHANGE_USER_INFO_MESSAGE: '–ė–Ĺ—Ą–ĺ—Ä–ľ–į—Ü–ł—Ź –Ņ–ĺ–Ľ—Ć–∑–ĺ–≤–į—ā–Ķ–Ľ—Ź –ł–∑–ľ–Ķ–Ĺ–Ķ–Ĺ–į!',
  SUCCESS_REMOVE_CHAT_MESSAGE: '–ß–į—ā —É–ī–į–Ľ–Ķ–Ĺ!',
  SUCCESS_ADD_USER_TO_CHAT_MESSAGE: '–ü–ĺ–Ľ—Ć–∑–ĺ–≤–į—ā–Ķ–Ľ—Ć –ī–ĺ–Ī–į–≤–Ľ–Ķ–Ĺ –≤ —á–į—ā!',
  SUCCESS_REMOVE_USER_FROM_CHAT: '–ü–ĺ–Ľ—Ć–∑–ĺ–≤–į—ā–Ķ–Ľ—Ć —É–ī–į–Ľ–Ķ–Ĺ –ł–∑ —á–į—ā–į!',
  CONNECTION_PROBLEMS: '–ü—Ä–ĺ–Ī–Ľ–Ķ–ľ—č —Ā –Ņ–ĺ–ī–ļ–Ľ—é—á–Ķ–Ĺ–ł–Ķ–ľ',
  IS_NOT_MATCHED_PASSWORD_MESSAGE: '–ü–į—Ä–ĺ–Ľ–ł –Ĺ–Ķ —Ā–ĺ–≤–Ņ–į–ī–į—é—ā!',
  CUSTOM_ERROR_FOR_NAME_AND_LASTNAME:
    '–ė–ľ—Ź / –§–į–ľ–ł–Ľ–ł—Ź –ī–ĺ–Ľ–∂–Ĺ—č –Ĺ–į—á–ł–Ĺ–į—ā—Ć—Ā—Ź —Ā –∑–į–≥–Ľ–ĺ–≤–Ĺ–ĺ–Ļ –Ī—É–ļ–≤—č –ł–Ľ–ł —Ā "-"',
  CUSTOM_ERROR_FOR_PHONE_FILED: '–Ě–Ķ –ļ–ĺ—Ä—Ä–Ķ–ļ—ā–Ĺ—č–Ļ —Ą–ĺ—Ä–ľ–į—ā',
};

const REGEXP = {
  FIRST_SYMBOL_UPPERCASE: /^[A-Z | –ź-–Į | -]/,
  PHONE: /^((\+7|7|8)+([0-9]){10})$/,
};

const URLS = {
  BASE: 'https://ya-praktikum.tech/api/v2',
  RESOURCES: 'https://ya-praktikum.tech/api/v2/resources',
  WSS: 'wss://ya-praktikum.tech/ws/chats',
};

const HEADERS = { CT_APPLICATION_JSON: { 'Content-Type': 'application/json' } };

const DATA_ATTRIBUTE = {
  CHAT_ID: 'data-chat-id',
  USER_ID: 'data-user-id',
};

const FORM_ELEMENTS = {
  ADD_CHAT_FORM: 'popup__form_add-chat',
  ADD_USER_FORM: 'popup__form_add-user',
  DELETE_USER_FORM: 'popup__form_delete-user',
  EDIT_PASSWORD_FORM: 'profile__form_el_edit-password-form',
  EDIT_PROFILE_FORM: 'profile__form_el_edit-form',
  AUTH_FORM: 'auth',
  USER_NAME_FIELD: 'first_name',
  LAST_NAME_USER_FIELD: 'second_name',
  PHONE_USER_FIELD: 'phone',
};

const lOCALSTORAGE = {
  IS_SIGNIN: 'isSignin',
};

export {
  config,
  PATHNAMES,
  DAYS,
  MONTH,
  ACTIONS_WEBSOCKET,
  TYPES_MESSAGE_WEBSOCKET,
  MESSAGES,
  REGEXP,
  URLS,
  HEADERS,
  DATA_ATTRIBUTE,
  FORM_ELEMENTS,
  lOCALSTORAGE,
};
