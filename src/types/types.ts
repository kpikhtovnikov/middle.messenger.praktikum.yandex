type InputType = {
  text: "text",
  email: "email",
  password: "password",
  tel: "tel",
  number: "number",
}

enum ButtonType {
  'button',
  'submit',
}

type ChatType = {
  userName: string;
  lastMessage: string;
  time: Date;
  countNotReadMessage: number;
  srcAvatar: string;
};

interface MessageProps {
  owner: boolean;
  text?: string;
  time: string;
  srcImg?: string;
  isRead?: boolean;
}

export { InputType, ButtonType, ChatType, MessageProps };
