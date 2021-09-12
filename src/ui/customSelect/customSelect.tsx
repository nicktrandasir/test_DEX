import React, {useEffect, useMemo} from "react";
import Select from "react-select";
import { MenuPlacement } from "react-select/src/types";
import { theme } from "../../assets/theme/theme";
import { ValueContainer } from "./components/multiLabelContainer";
import styled from "styled-components";

export const CustomSelect = ({
  options,
  defaultValue,
  isMulti,
  isSearchable,
  isClearable,
  menuPlacement,
  onChange,
  errors,
  pageCount
}: {
  options?: Array<object>;
  defaultValue?: object;
  isMulti?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  menuPlacement?: MenuPlacement;
  onChange?: (values: any) => void;
  errors?: string | any;
  pageCount?: boolean;
}) => {
  const StyleForSelect = {
    container: (styles: any) => {
      return {
        ...styles,
        width: "100%",
        height: "40px",
        fontSize: "14px",
      };
    },
    valueContainer: (styles: any) => {
      return {
        ...styles,
        flexWrap: "no-wrap",
        height: "inherit",
      };
    },
    control: (styles: any, state: any) => {
      return {
        ...styles,
        dispatch: "grid",
        height: "100%",
        boxShadow: 0,
        border: state.isMulti
          ? errors
            ? `0.5px solid ${theme.lightestRed}`
            : `0.5px solid ${theme.lightestGrey}`
          : pageCount
          ? `0.5px solid ${theme.lightestGrey}`
          : errors
          ? `0.5px solid ${theme.lightestRed}`
          : "none",
        backgroundColor: state.isMulti
          ? `${theme.white}`
          : pageCount
          ? `${theme.white}`
          : `${theme.lightestGrey1}`,

        boxSizing: "border-box",
        borderRadius: "4px",
        cursor: state.isFocused ? "default" : "pointer",
        alignContent: "center",
        textCol: `${theme.white}`,
        "&:hover": {
          backgroundColor: `${theme.lightestGrey1}`,
        },
        "@media screen and (max-width: 513px)": {
          width: "100%",
        },
      };
    },
    menu: (styles: any) => {
      return {
        ...styles,
        border: "0.5px solid #D1D1D1",
        ":focus-visible": {
          border: "none",
        },
      };
    },
    menuList: (styles: any) => {
      return {
        ...styles,
        lineHeight: "center",
      };
    },
    indicatorsContainer: (styles: any) => {
      return {
        ...styles,
        cursor: "pointer",
      };
    },
    clearIndicator: (styles: any) => {
      return {
        ...styles,
        color: `${theme.lightestGrey}`,
      };
    },
    dropdownIndicator: (styles: any) => {
      return {
        ...styles,
        height: "inherit",
        color: `${theme.lightestGrey}`,
      };
    },
    multiValue: (styles: any) => {
      return {
        ...styles,
        backgroundColor: `${theme.red}`,
        height: "24px",
        borderRadius: "4px",
        color: `${theme.white}`,
        lineHeight: "19px",
        fontSize: "14px",
        marginRight: "3px",
      };
    },
    singleValue: (styles: any) => {
      return {
        ...styles,
        color: `${theme.darkGrey}`,
        lineHeight: "24px",
      };
    },
    multiValueLabel: (styles: any) => {
      return {
        ...styles,
        margin: 0,
        color: `${theme.white}`,
      };
    },
    multiValueRemove: (styles: any) => {
      return {
        ...styles,
        color: `${theme.white}`,
        cursor: "pointer",
      };
    },
    option: (styles: any, state: any) => ({
      ...styles,
      display: "grid",
      height: "37px",
      borderBottom: `0.5px solid ${theme.lightestGrey}`,
      backgroundColor: state.isSelected ? `${theme.darkRed}` : `${theme.white}`,
      color: `${theme.lightGrey}`,
      alignContent: "center",

      ":last-child": {
        border: "none",
      },
      ":hover": {
        backgroundColor: state.isMulti
          ? `${theme.darkRed}`
          : `${theme.lightestRed}`,
        color: state.isMulti ? `${theme.white}` : `${theme.white}`,
        cursor: "pointer",
      },
      "&:active": {
        backgroundColor: `${theme.darkRed}`,
      },
      padding: 20,
    }),
  };

  console.log(defaultValue)

  return (
    <div>
      <Select

        errors={errors}
        styles={StyleForSelect}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        menuPlacement={menuPlacement}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isMulti={isMulti}
        components={{ ValueContainer }}
      />

      {errors && errors.type === "required" && (
          <SpanForMessage>
            <ValidationMessage>
              {errors && errors?.message}
            </ValidationMessage>
          </SpanForMessage>
      )}
    </div>
  );
};

const SpanForMessage = styled.span`
  color: ${theme.lightestRed};
`;

const ValidationMessage = styled.p`
  font-size: 12px;
  line-height: 0;
  color: ${theme.lightestRed};
`;
