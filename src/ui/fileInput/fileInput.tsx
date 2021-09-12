import React, { useState } from "react";
import AddPhotoImg from "../../assets/icon/add_a_photo_24px_rounded.svg";
import { maxW, theme } from "../../assets/theme/theme";
import styled from "styled-components";
import { FC } from "react";
import { BaseUrl } from "../../api/baseRequest";

interface IProps {
  team?: boolean;
  name: string;
  setValue: (values: string, file: any) => void;
  defaultValue?: object;
}

export const FileInput: FC<IProps> = ({
  team,
  name,
  setValue,
  defaultValue,
}) => {
  const [img, setImg] = useState<string | null>("");

  const handleChange = (e: any) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          reader?.result && setImg(reader.result.toString());
        },
        false
      );
      parseFloat(file);
      reader.readAsDataURL(file);
    }
    setValue && setValue(team ? "imageUrl" : "avatarUrl", e.target.files[0]);
  };
  return (
    <StyledLabel>
      <input
        style={{ display: "none" }}
        accept=".png"
        type="file"
        name={name}
        onChange={handleChange}
      />
      <DefaultPicture
        style={{ display: "grid" }}
        id="defaultPicture"
        src={AddPhotoImg}
        alt="Add photo"
      />
      {img || defaultValue ? (
        <AddedPicture
          team={team}
          style={{ display: "grid" }}
          id="addedPicture"
          src={img ? img : `${BaseUrl}${defaultValue}`}
          alt="Added photo"
        />
      ) : (
        ""
      )}
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  display: grid;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 336px;
  height: 261px;
  background: ${theme.lightGrey};
  opacity: 0.5;
  border-radius: 10px;
  cursor: pointer;
  padding-bottom: 0;

  @media screen and (${maxW.ssm}) {
    width: 185px;
    height: 144px;
  }
`;

const DefaultPicture = styled.img`
  position: absolute;
  z-index: 1;
  padding-left: 126px;

  @media screen and (${maxW.ssm}) {
    padding-left: 70px;
    width: 41px;
  }
`;

const AddedPicture = styled.img<{ team?: boolean }>`
  width: ${(props) => (props.team ? `261px` : "inherit")};
  padding-top: ${(props) => (props.team ? `0` : "7px")};
  max-width: 336px;
  max-height: 261px;

  @media screen and (${maxW.ssm}) {
    width: ${(props) => (props.team ? `144px` : "inherit")};
    padding-top: ${(props) => (props.team ? `0` : "4px")};
    max-width: fit-content;
    max-height: 144px;
  }
`;
