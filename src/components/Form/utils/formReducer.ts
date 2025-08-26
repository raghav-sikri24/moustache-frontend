import {
  FormState,
  TErrorResetActionType,
  TFormActionType,
  TFormErrorActionType,
  TInitFormActionType,
} from "./types";

export const isFormInitActionType = (
  value: TInitFormActionType | TFormActionType,
): value is TInitFormActionType => {
  return "type" in value && value.type === FormState.INIT;
};

export const isErrorResetActionType = (
  value: TErrorResetActionType | TFormErrorActionType,
): value is TErrorResetActionType => {
  return "type" in value && value.type === FormState.RESET;
};

export const formReducer = (
  state: any,
  action: TFormActionType | TInitFormActionType,
) => {
  if (isFormInitActionType(action)) {
    return {
      ...state,
      ...action.initialValues,
    };
  }
  return {
    ...state,
    [action.inputKey]: action.value,
  };
};

export const formErrorsReducer = (
  state: any,
  action: TErrorResetActionType | TFormErrorActionType,
) => {
  if (isErrorResetActionType(action)) {
    return {};
  }
  const newState = {
    ...state,
    [action.inputKey]: action.error,
  };

  if (!action.error) {
    delete newState[action.inputKey];
  }

  return newState;
};
