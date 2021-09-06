import React, { useCallback } from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTeamThunk, updateTeamThunk } from "../../modules/teams/teamsThunk";
import { useHistory } from "react-router-dom";
import { AppStateType } from "../../core/redux/rootReducer";
import { clearUpdatedTeam } from "../../modules/teams/teamsSlice";
import { CustomInput } from "../../ui/customInput/customInput";
import { IAddTeam } from "../../api/dto/ITeam";
import { AddUpdateLayout } from "../../components/addUpdate/addUpdateLayout";
import {pathRouts} from "../routes";

export const AddUpdateTeam = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onCancel = () => {
    history.push(pathRouts.Teams);
  };

  const { updatedTeam } = useSelector((state: AppStateType) => state.teams);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(
    async (data: IAddTeam) => {
      if (updatedTeam) {
        await dispatch(
          updateTeamThunk({
            ...data,
            id: updatedTeam?.id,
            imageUrl: data.imageUrl ?? updatedTeam?.imageUrl,
          })
        );

        dispatch(clearUpdatedTeam());

        history.push(pathRouts.Teams);
      } else {
        await dispatch(addTeamThunk({ ...data }));

        history.push(pathRouts.Teams);
      }
    },
    [dispatch, history, updatedTeam]
  );

  return (
    <AddUpdateLayout
      onSubmit={handleSubmit(onSubmit)}
      setValue={setValue}
      defaultValue={updatedTeam}
      onCancel={onCancel}
      team
    >
      <div style={{ display: "grid" }}>
        <InputAndLabelStyle>
          <AddFormLabel>Name</AddFormLabel>
          <CustomInput
            required="Required"
            name={"name"}
            errors={errors}
            register={register}
            defaultValue={updatedTeam?.name}
          />
        </InputAndLabelStyle>

        <InputAndLabelStyle>
          <AddFormLabel>Division</AddFormLabel>
          <CustomInput
            required="Required"
            name={"division"}
            errors={errors}
            register={register}
            defaultValue={updatedTeam?.division}
          />
        </InputAndLabelStyle>

        <InputAndLabelStyle>
          <AddFormLabel>Conference</AddFormLabel>
          <CustomInput
            required="Required"
            name={"conference"}
            errors={errors}
            register={register}
            defaultValue={updatedTeam?.conference}
          />
        </InputAndLabelStyle>

        <InputAndLabelStyle>
          <AddFormLabel>Year of foundation</AddFormLabel>
          <CustomInput
            required="Required"
            type="number"
            name={"foundationYear"}
            errors={errors}
            register={register}
            defaultValue={updatedTeam?.foundationYear}
          />
        </InputAndLabelStyle>
      </div>
    </AddUpdateLayout>
  );
};

const AddFormLabel = styled.label`
  color: ${theme.grey};
`;

const InputAndLabelStyle = styled.div`
  padding-bottom: 24px;
`;
