import { Block } from 'core';
import './authLink.css';
import { AuthLinkProps } from './types';

export class AuthLink extends Block {
  static componentName = 'AuthLink';

  constructor({ onClick, ...rest }: AuthLinkProps) {
    super({ events: { click: onClick }, ...rest });
  }

  protected getStateFromProps(props: AuthLinkProps): void {
    this.state = {
      text: props.text,
    };
  }

  protected render(): string {
    const { text } = this.state;

    return `
      <Button class="auth-link" type="button">${text}</Button>
    `;
  }
}
