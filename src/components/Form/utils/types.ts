import { FlexProps } from "@chakra-ui/react";

export interface IFormConfig {
  title?: string;
  dependantValidation?: Record<string, Record<string, string>>;
  subTitle?: string;
  formFields: Array<IFormFields>;
  ctaText?: string;
  validators?: string;
}

export interface IFormFields {
  label: string;
  placeholder: string;
  inputKey: string;
  type: string;
  required: boolean;
  validators?: string;
  message?: string;
  options?: OPTION[];
  disabled?: boolean;
  upperCase?: boolean;
  disableCache?: boolean;
  subfields?: Record<string, Array<IFormFields>>;
  className?: string;
  valueMapper?: Record<any, string>;
}

export interface InputFieldsProps extends IFormFields {
  key: string;
  onInput: (e: InputProps) => void;
  onBlur: (e: InputProps) => void;
  value: any;
  errorMsg: string;
  formStyle: FlexProps;
  className: string;
}

export interface OPTION {
  label: string;
  value: string;
}

export interface InputProps {
  value: any;
  inputKey: string;
}

export enum FormTypes {
  TEXT = "text",
  TEXTAREA = "textarea",
  PASSWORD = "password",
  NUMBER = "number",
  MOBILE_NUMBER = "mobile-number",
  DATE = "date",
  SELECT = "select",
  FILE = "file",
  DATETIME = "datetime-local",
}

export enum FormState {
  INIT = "init",
  RESET = "reset",
}

export type TValidatorFunction = (value: string | number) => string | undefined;

export type TFormValidators = Record<string, TValidatorFunction>;

export type TFormInitialState = Record<string, any>;

export type TInitialFormErrors = Record<string, string>;

export type TErrorResetActionType = {
  type: FormState.RESET;
};

export type TFormActionType = {
  inputKey: string;
  value: string;
};

export type TInitFormActionType = {
  type: FormState;
  initialValues: Record<string, any>;
};

export type TFormErrorActionType = {
  inputKey: string;
  error: string;
};

export interface IAppInputProps {
  formFields: Array<IFormFields>;
  formConfig: IFormConfig;
  formValue: any;
  formErrors?: Record<string, any>;
  formValidators?: TFormValidators;
  dispatchValue: (obj: TFormActionType) => void;
  dispatchError?: (obj: TFormErrorActionType) => void;
  onInput?: Function;
  formStyle?: FlexProps;
  onBlur?: Function;
}
