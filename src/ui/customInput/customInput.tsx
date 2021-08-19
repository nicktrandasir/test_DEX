import React from "react";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";

export const CustomInput = ({
  type,
  name,
  placeholder,
  register,
  defaultValue,
  errors,
  checkbox,
  addTeam,
  addPlayer,
  smallSize,
  date
}: {
  type?: string | number;
  name: string;
  placeholder?: string;
  errors?: object | any;
  register?: any;
  defaultValue?: string | number | object;
  checkbox?: boolean;
  addTeam?: boolean;
  addPlayer?: boolean;
  smallSize?: boolean;
  date?: boolean;
}) => {

  return (
    <DivForInput addTeam={addTeam} addPlayer={addPlayer}>
      {checkbox ? (
        <CheckboxStyle
          type={type}
          {...register(name, { required: true })}
          defaultValue={defaultValue}
        />
      ) : (
        <StyledInput
          addTeam={addTeam}
          addPlayer={addPlayer}
          smallSize={smallSize}
          date={date}
          placeholder={placeholder}
          type={type}
          {...register(name, { required: true })}
          defaultValue={defaultValue}
        />
      )}

      {checkbox ? "I accept the agreement" : ""}
      {errors[name] && errors[name].type === "required" && (
        <div style={{ color: `${theme.lightestRed}` }}>
          {name === "checkbox" ? (
            <ValidationMessage>
              You must be accept the agreement.
            </ValidationMessage>
          ) : (
            <ValidationMessage>Required</ValidationMessage>
          )}
        </div>
      )}
    </DivForInput>
  );
};

const DivForInput = styled.div<{ addPlayer?: boolean; addTeam?: boolean }>`
  padding-bottom: ${(props) =>
    props?.addPlayer || props?.addTeam ? "24px" : ""};
`;

const StyledInput = styled.input<{
  smallSize?: boolean;
  date?: boolean;
  addTeam?: boolean;
  addPlayer?: boolean;
}>`
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  margin-top: 8px;
  height: ${(props) => (props.date ? "42px" : "40px")};
  line-height: 24px;
  max-width: ${(props) => (props.smallSize ? "159px" : "354px")};
  width: 100%;
  padding-left: 12px;
  background: ${theme.lightestGrey1};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${theme.lightestGrey};
  }

  @media screen and ${maxW.ssm} {
    max-width: ${(props) =>
      props.addTeam
        ? "calc(100% - 14px)"
        : props.addPlayer
        ? "calc(100% - 14px)"
        : "calc(100vw - 62px)"};
  }
`;

const ValidationMessage = styled.p`
  font-size: 12px;
  line-height: 0;
  color: ${theme.lightestRed};
`;

const CheckboxStyle = styled.input`
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
  border: 1px solid ${theme.grey};
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
