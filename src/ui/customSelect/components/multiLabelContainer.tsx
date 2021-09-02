import React from "react";
import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";
import { components } from "react-select";

export const ValueContainer = ({ children, getValue, ...props }: any) => {
  let maxToShow = 2;
  var length = getValue().length;
  let displayChips = React.Children.toArray(children).slice(0, maxToShow);
  let shouldBadgeShow = length > maxToShow;

  return (
    <components.ValueContainer {...props}>
      {!props.selectProps.inputValue && displayChips}
      {length > 2 ? (
        <StyledHideMultiLabels>
          {shouldBadgeShow && "..."}
        </StyledHideMultiLabels>
      ) : (
        " "
      )}
    </components.ValueContainer>
  );
};

const StyledHideMultiLabels = styled.div`
  display: grid;
  align-items: center;
  margin-left: 2px;
  height: 24px;
  width: 24px;
  background-color: ${theme.red};
  text-align: center;
  color: ${theme.white};
  border-radius: 4px;
`;
