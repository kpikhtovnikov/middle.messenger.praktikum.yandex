import { InputType } from 'types';

export interface InputProps {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  name: string;
  type: InputType;
  minlength?: number;
  maxlength?: number;
}
