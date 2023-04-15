import { FieldErrors, Control } from 'react-hook-form';
import { ImageSourcePropType, KeyboardTypeOptions } from 'react-native';

export interface InputInterface {
  label: string;
  errors: FieldErrors;
  control: Control<any>;
  name: string;
  type: KeyboardTypeOptions;
  autoComplete?: 'tel' | 'username' | 'email';
}

export interface AccountTypeInterface {
  title: string;
  description: string;
  url: ImageSourcePropType;
}

export type AccountTypesContentTypeItem = {
  id: number;
  title: string;
  description: string;
  url: ImageSourcePropType;
};

export type AccountTypesContentType = {
  [key: string]: AccountTypesContentTypeItem[];
};
