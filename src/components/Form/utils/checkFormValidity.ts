import { isNullOrUndefined } from "../../../utils/helpers";
import { IFormFields } from "./types";

function checkForRequiredFields(
  formFields: IFormFields[],
  formState: Record<string, any>
): boolean {
  if (!formFields) return false;
  for (const item of formFields) {
    if (
      item.required &&
      (isNullOrUndefined(formState[item.inputKey]) ||
        formState[item.inputKey] == "" ||
        (Array.isArray(formState[item.inputKey]) &&
          formState[item.inputKey]?.length < 1))
    ) {
      if (formState[item.inputKey] === false) {
        continue;
      } else {
        return true;
      }
    }
    if (item.subfields) {
      const ans = checkForRequiredFields(
        item?.subfields?.[formState[item.inputKey]] || [],
        formState
      );
      if (ans) return ans;
    }
  }
  return false;
}

export function checkFormValidity(
  formErrors: Record<string, any>,
  formFields: Array<IFormFields>,
  formState: Record<string, any>
): boolean {
  const anyError = Object.values(formErrors).some((errorValue) => !!errorValue);
  if (anyError) {
    return anyError;
  }
  return checkForRequiredFields(formFields, formState);
}
