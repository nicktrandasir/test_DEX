import React, { useState } from "react";
import AddPhotoImg from "../../assets/icon/add_a_photo_24px_rounded.svg";
import { theme } from "../../assets/theme/theme";
import styled from "styled-components";

export const FileInput = ({ team, name, setValue, defaultValue }: any) => {
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
          src={img ? img : `http://dev.trainee.dex-it.ru${defaultValue}`}
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
  justify-content: center;
  align-items: center;
  width: 336px;
  height: 261px;
  background: ${theme.lightGrey};
  opacity: 0.5;
  border-radius: 10px;
  cursor: pointer;
  padding-bottom: 0 !important;

  @media screen and (max-width: 513px) {
    width: 185px;
    height: 144px;
  }
 `;

const DefaultPicture = styled.img`
  position: absolute;
  z-index: 1;
  padding-top: 86px;
  padding-left: 126px;
  
  @media screen and (max-width: 513px) {
    padding-top: 50px;
    padding-left: 70px;
    width: 41px;
  }
`;

const AddedPicture = styled.img<{ team?: boolean }>`
  width: ${(props) => (props.team ? `261px` : "inherit")};
  max-width: 336px;
  max-height: 261px;
  
  @media screen and (max-width: 513px) {
    width: ${(props) => (props.team ? `144px` : "inherit")};
    max-width: fit-content;
    max-height: 144px;
  }
`;
