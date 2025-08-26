import React, { useCallback } from "react";
import { FormTypes, IAppInputProps } from "./utils/types";
import { getFieldConfigForInput } from "./utils/getFieldConfigForInput";
import CustomTextInput from "./components/CustomTextInput";
import CustomTextareaInput from "./components/CustomTextareaInput";
import CustomPasswordInput from "./components/CustomPasswordInput";
import CustomNumberInput from "./components/CustomNumberInput";
import CustomMobileNumberInput from "./components/CustomMobileNumberInput";
import CustomDateInput from "./components/CustomDateInput";
import CustomSelectInput from "./components/CustomSelectInput";
import CustomFileInput from "./components/CustomFileInput";

const AppInputs = ({
  formConfig,
  formFields,
  formValue,
  formErrors = {},
  formValidators,
  dispatchValue,
  dispatchError = () => {},
  onInput = () => {},
  formStyle = {},
  onBlur = () => {},
}: IAppInputProps) => {
  const handleInput = useCallback(
    ({ value, inputKey }: { value: any; inputKey: string }) => {
      if (inputKey) {
        dispatchValue({
          inputKey,
          value,
        });
        onInput({ inputKey, value });
        dispatchError({
          inputKey,
          error: "",
        });
      }
    },
    [dispatchValue, onInput, dispatchError],
  );

  const handleBlur = useCallback(
    ({ value, inputKey }: { value: any; inputKey: string }) => {
      if (inputKey) {
        const fieldConfig = getFieldConfigForInput(formConfig, inputKey);

        if (
          value &&
          fieldConfig &&
          fieldConfig.validators &&
          formValidators?.[fieldConfig.validators]
        ) {
          const validatorFn = formValidators[fieldConfig.validators];
          if (validatorFn) {
            const errorMsg = validatorFn(value);

            dispatchError({
              inputKey,
              error: errorMsg || "",
            });
          }
        } else {
          dispatchError({
            inputKey,
            error: "",
          });
        }
      }
      onBlur({ inputKey, value });
    },
    [formConfig, formValidators, dispatchError, onBlur],
  );

  return (
    <React.Fragment>
      {formFields.map((fieldConfig) => {
        const value = formValue[fieldConfig.inputKey];

        const errorMsg = formErrors[fieldConfig.inputKey];

        const inputProps = {
          onInput: handleInput,
          onBlur: handleBlur,
          value: value,
          errorMsg: errorMsg,
          formStyle: formStyle,
          className: fieldConfig?.className || "",
          ...fieldConfig,
        };

        if (fieldConfig.type === FormTypes.TEXTAREA) {
          return (
            <CustomTextareaInput
              key={fieldConfig?.inputKey + "txtarea"}
              {...inputProps}
            />
          );
        }

        if ((fieldConfig.type as FormTypes) === FormTypes.PASSWORD) {
          return (
            <CustomPasswordInput
              key={fieldConfig?.inputKey + "pwd"}
              {...inputProps}
            />
          );
        }

        if (fieldConfig.type === FormTypes.NUMBER) {
          return (
            <CustomNumberInput
              key={fieldConfig?.inputKey + "num"}
              {...inputProps}
            />
          );
        }

        if (fieldConfig.type === FormTypes.MOBILE_NUMBER) {
          return (
            <CustomMobileNumberInput
              key={fieldConfig?.inputKey + "mobile-num"}
              {...inputProps}
            />
          );
        }

        if (fieldConfig.type === FormTypes.DATE) {
          return (
            <CustomDateInput
              key={fieldConfig?.inputKey + "date"}
              {...inputProps}
            />
          );
        }

        if (fieldConfig.type === FormTypes.SELECT) {
          return (
            <React.Fragment key={fieldConfig?.inputKey}>
              <CustomSelectInput
                key={fieldConfig.inputKey + "select"}
                {...inputProps}
              />
              {fieldConfig.subfields &&
                fieldConfig.subfields[value] &&
                Array.isArray(fieldConfig.subfields[value]) && (
                  <AppInputs
                    formConfig={formConfig}
                    formFields={fieldConfig.subfields[value]!}
                    formValue={formValue}
                    formValidators={formValidators}
                    formErrors={formErrors}
                    dispatchValue={dispatchValue}
                    dispatchError={dispatchError}
                    onInput={onInput}
                    onBlur={onBlur}
                    formStyle={formStyle}
                  />
                )}
            </React.Fragment>
          );
        }

        if (fieldConfig.type === FormTypes.FILE) {
          return (
            <CustomFileInput
              key={fieldConfig?.inputKey + "file"}
              {...inputProps}
            />
          );
        }

        return (
          <React.Fragment key={fieldConfig?.inputKey}>
            <CustomTextInput
              key={fieldConfig?.inputKey + "txt"}
              {...inputProps}
            />
            {fieldConfig.subfields &&
              fieldConfig.subfields[value] &&
              Array.isArray(fieldConfig.subfields[value]) && (
                <AppInputs
                  key={`subfields${fieldConfig?.inputKey}`}
                  formConfig={formConfig}
                  formFields={fieldConfig.subfields[value]!}
                  formValue={formValue}
                  formValidators={formValidators}
                  formErrors={formErrors}
                  dispatchValue={dispatchValue}
                  dispatchError={dispatchError}
                  onInput={onInput}
                  onBlur={onBlur}
                  formStyle={formStyle}
                />
              )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default AppInputs;
