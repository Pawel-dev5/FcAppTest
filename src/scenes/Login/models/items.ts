import { FieldErrors, Control } from 'react-hook-form';
import { KeyboardTypeOptions } from 'react-native';

export interface InputInterface {
  label: string;
  errors: FieldErrors;
  control: Control<any>;
  name: string;
  type: KeyboardTypeOptions;
  autoComplete?: 'tel' | 'username' | 'email';
}
