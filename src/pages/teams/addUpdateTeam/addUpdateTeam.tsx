import React, { useCallback } from "react";
import styled from "styled-components";
import {Sidebar} from "../../../ui/sidebar/sidebar";
import {Header} from "../../../ui/header/header";
import {Button} from "../../../ui/button/button";
import { maxW, theme } from "../../../assets/theme/theme";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FileInput } from "../../../ui/fileInput/fileInput";
import { addTeam, updateTeamThunk } from "../../../modules/teams/teamsThunk";
import { NavLink, useHistory } from "react-router-dom";
import { AppStateType } from "../../../core/redux/rootReducer";
import swal from "sweetalert";
import { clearUpdatedTeam } from "../../../modules/teams/teamsSlice";
import { CustomInput } from "../../../ui/customInput/customInput";
import {IAddTeam} from "../../../api/dto/ITeam";

export const AddUpdateTeam = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const handleChangePage = () => {
    setPage(10);
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
        swal("Изменения сохранены!", "", "success");
        history.push("/teams");
      } else {
        await dispatch(addTeam({ ...data }));
        swal("Команда добавлена!", "", "success");
        history.push("/teams");
      }
    },
    [dispatch, history, updatedTeam]
  );

  return (
    <GlobalGrid>
      <Header />
      <SidebarAndContent>
        <Sidebar />
        <AddItemContent>
          <AddFormContainer>
            <DetailsTitle>
              <NavLink style={{ textDecoration: "none" }} to="/Teams">
                <RedTitle>Teams</RedTitle>
              </NavLink>
              <StyledSlash>/</StyledSlash>
              <RedTitle>Add new team</RedTitle>
            </DetailsTitle>

            <AddFormStyle onSubmit={handleSubmit(onSubmit)}>
              <div>
                <FileInput
                  name={"imageUrl"}
                  defaultValue={updatedTeam?.imageUrl}
                  setValue={setValue}
                  team
                />
              </div>

              <AddFormInputs>
                <div style={{ display: "grid" }}>
                  <AddFormLabel>Name</AddFormLabel>
                  <CustomInput
                    name={"name"}
                    errors={errors}
                    register={register}
                    defaultValue={updatedTeam?.name}
                    addTeam
                  />

                  <AddFormLabel>Division</AddFormLabel>
                  <CustomInput
                    name={"division"}
                    errors={errors}
                    register={register}
                    defaultValue={updatedTeam?.division}
                    addTeam
                  />

                  <AddFormLabel>Conference</AddFormLabel>
                  <CustomInput
                    name={"conference"}
                    errors={errors}
                    register={register}
                    defaultValue={updatedTeam?.conference}
                    addTeam
                  />

                  <AddFormLabel>Year of foundation</AddFormLabel>
                  <CustomInput
                    type="number"
                    name={"foundationYear"}
                    errors={errors}
                    register={register}
                    defaultValue={updatedTeam?.foundationYear}
                    addTeam
                  />
                </div>

                <ButtonsStyle>
                  <Button name="Cancel" cancel small />

                  <Button name="Save" red small />
                </ButtonsStyle>
              </AddFormInputs>
            </AddFormStyle>
          </AddFormContainer>
        </AddItemContent>
      </SidebarAndContent>
    </GlobalGrid>
  );
};

export const GlobalGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;

  @media screen and ${maxW.md} {
    grid-template-rows: 62px auto;
  }
`;

const AddFormLabel = styled.label`
  color: ${theme.grey};
`;

export const SidebarAndContent = styled.div`
  display: grid;
  grid-template-columns: 140px auto;
  min-height: calc(100vh - 80px);
  background: ${theme.lightestGrey1};
  margin-top: 80px;

  @media screen and ${maxW.md} {
    grid-template-columns: 0 100%;
    min-height: calc(100vh - 62px);
    margin-top: 62px;
  }
`;

export const AddItemContent = styled.div`
  display: grid;
  padding: 32px 80px;
  height: fit-content;
  max-height: calc(100vh - 80px);
  background: ${theme.lightestGrey1};

  @media screen and ${maxW.md} {
    padding: 16px 0 0 0;
  }
`;

export const AddFormContainer = styled.div`
  background: ${theme.white};
  grid-template-rows: 69px auto;
  display: grid;
  border-radius: 10px;

  @media screen and ${maxW.md} {
    border-radius: 0;
  }
`;

export const AddFormStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 25px;
  padding: 48px 25px;

  @media screen and ${maxW.lg} {
    height: min-content;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }

  @media screen and ${maxW.ssm} {
    grid-gap: 48px;
  }
`;

export const DetailsTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 32px;
`;

const StyledSlash = styled.div`
  color: ${theme.lightGrey};
  padding-left: 5px;
  padding-right: 5px;
`;

export const RedTitle = styled.p`
  color: ${theme.red};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  @media screen and ${maxW.lg} {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  }
`;

export const AddFormInputs = styled.div`
  @media screen and ${maxW.ssm} {
    width: 100%;
  }
`;

const ButtonsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;
