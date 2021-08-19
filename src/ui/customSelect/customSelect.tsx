import React from "react";
import Select from "react-select";

export const CustomSelect = ({
  options,
  defaultValue,
  isMulti,
  styles,
  isSearchable,
  isClearable,
  menuPlacement,
  onChange
}: {
  options?: Array<object>;
  defaultValue?: object;
  isMulti?: boolean;
  styles: object;
  isSearchable?: boolean;
  isClearable?: boolean;
  menuPlacement?: object | any;
  onChange?: object | any;
}) => {

  return (
    <div>
      <Select
        styles={styles}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        menuPlacement={menuPlacement}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isMulti={isMulti}
      />

    </div>
  );
};

