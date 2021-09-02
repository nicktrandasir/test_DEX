import React, { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";

interface IProps {
  register: UseFormRegister<FieldValues>;
  errors?: object | any;
  name: string;
  required?: string;
}

export const Checkbox: FC<IProps> = ({ register, errors, name, required }) => {
  const error = errors[name];
  return (
    <div>
      <CheckboxStyle
        type="checkbox"
        {...register(name, { required })}
        error={error}
      />
      <AgreementText error={error}>I accept the agreement</AgreementText>
      {errors[name] && errors[name].type === "required" && (
        <div style={{ color: `${theme.lightestRed}` }}>
          <ValidationMessage>
            {errors.checkbox && errors.checkbox.message}
          </ValidationMessage>
        </div>
      )}
    </div>
  );
};

const CheckboxStyle = styled.input<{ error?: string }>`
  position: relative;
  height: 12px;
  width: 12px;
  align-items: baseline;
  font-size: 14px;
  line-height: 24px;
  background: ${theme.lightestGrey1};
  background: ${theme.white};
  margin-right: 10px;
  vertical-align: text-bottom;
  border-radius: 2px;

  border: ${(props) =>
    props.error ? `1px solid ${theme.lightestRed}` : `1px solid ${theme.grey}`};
  appearance: none;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.red};
    background: ${theme.white};
  }

  &::before {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 3px;
    width: 3px;
    height: 6px;
    border-style: solid;
    border-color: ${theme.white};
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg);
    opacity: 0;
  }

  &:checked {
    color: ${theme.white};
    border-color: ${theme.red};
    background: ${theme.red};

    &::before {
      opacity: 1;
    }

    ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

const AgreementText = styled.span<{ error?: string }>`
  color: ${(props) => (props.error ? `${theme.lightestRed}` : `${theme.grey}`)};
`;

const ValidationMessage = styled.p`
  font-size: 12px;
  line-height: 0;
  color: ${theme.lightestRed};
`;
