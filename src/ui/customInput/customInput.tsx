import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IProps {
  type?: string | number;
  name: string;
  placeholder?: string;
  errors?: object | any;
  register?: UseFormRegister<FieldValues> | any;
  defaultValue?: string | number | object;
  smallSize?: boolean;
  date?: boolean;
  required?: string;
}

export const CustomInput: FC<IProps> = ({
  type,
  name,
  placeholder,
  register,
  defaultValue,
  errors,
  date,
  required,
}) => {
  const error = errors[name];

  return (
    <div>
      <StyledInput
        error={error}
        date={date}
        errors={errors}
        placeholder={placeholder}
        type={type}
        {...register(name, { required })}
        defaultValue={defaultValue}
      />

      {errors[name] &&
        (errors[name].type === "required" ||
          errors[name].type === "validate") && (
          <div style={{ color: `${theme.lightestRed}` }}>
            <ValidationMessage>
              {errors[name] && errors[name].message}
            </ValidationMessage>
          </div>
        )}
    </div>
  );
};

const StyledInput = styled.input<{
  date?: boolean;
  error?: string;
}>`
  border: ${(props) =>
    props.error ? `1px solid ${theme.lightestRed}` : "none"};
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  margin-top: 8px;
  height: 40px;
  line-height: 24px;
  width: calc(100% - 14px);
  padding: 0 0 0 12px;
  background: ${theme.lightestGrey1};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${theme.lightestGrey};
  }
`;

const ValidationMessage = styled.p`
  font-size: 12px;
  line-height: 0;
  color: ${theme.lightestRed};
`;
