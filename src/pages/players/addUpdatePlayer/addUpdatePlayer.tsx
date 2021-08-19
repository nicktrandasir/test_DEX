import React, {useCallback} from "react";
import styled from "styled-components";
import {Sidebar} from "../../../ui/sidebar/sidebar";
import {Header} from "../../../ui/header/header";
import {Button} from "../../../ui/button/button";
import {Controller, useForm} from "react-hook-form";
import {optionsPosition} from "../../../ui/customSelect/components/optionsForSelect";
import {maxW, theme} from "../../../assets/theme/theme";
import "react-datepicker/dist/react-datepicker.css";
import {FileInput} from "../../../ui/fileInput/fileInput";
import {useDispatch, useSelector} from "react-redux";
import {
    addPlayer,
    updatePlayerThunk,
} from "../../../modules/players/playersThunk";
import {NavLink, useHistory} from "react-router-dom";
import {AppStateType} from "../../../core/redux/rootReducer";
import swal from "sweetalert";
import {clearUpdatedPlayer} from "../../../modules/players/playersSlice";
import {CustomInput} from "../../../ui/customInput/customInput";
import {StylesForSelect} from "../../../ui/customSelect/components/styleForSelect";
import {CustomSelect} from "../../../ui/customSelect/customSelect";
import {IUpdatePlayerRequest} from "../../../api/dto/IPlayer";
import { ChangeEvent } from 'react';

export const AddUpdatePlayer = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {teams} = useSelector((state: AppStateType) => state.teams);

    const {updatedPlayer} = useSelector((state: AppStateType) => state.players);

    const optionsDivision = teams?.map((team) => {
        return {label: team.name, value: team.id};
    });

    const [page, setPage] = React.useState(1);

    const {
        register,
        setValue,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({defaultValues: {...updatedPlayer}});

    const handleChange = () => {
        setPage(10);
    };

    const onSubmit = useCallback(
        async (data: IUpdatePlayerRequest) => {
            //@ts-ignore
            if (updatedPlayer) {
                await dispatch(
                    updatePlayerThunk({
                        ...data,
                        position: data.position ?? updatedPlayer?.position,
                        team: data.team ?? updatedPlayer?.team,
                        id: updatedPlayer.id,
                        avatarUrl: data.avatarUrl ?? updatedPlayer.avatarUrl,
                    })
                );
                dispatch(clearUpdatedPlayer());
                swal("Изменения сохранены!", "", "success");
                history.push("/players");
            } else {
                dispatch(
                    addPlayer({
                        ...data
                    })
                );
                history.push("/players");
                swal("Игрок добавлен!", "", "success");
            }
        },
        [dispatch, history, updatedPlayer]
    );

    return (
        <GlobalGrid>
            <Header/>
            <SidebarAndContent>
                <Sidebar/>
                <AddItemContent>
                    <AddFormContainer>
                        <DetailsTitle>
                            <NavLink style={{textDecoration: "none"}} to="/Players">
                                <RedTitle>Players</RedTitle>
                            </NavLink>
                            <StyledSlash>/</StyledSlash>
                            <RedTitle>Add new player</RedTitle>
                        </DetailsTitle>

                        <AddFormStyle onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <FileInput
                                    name={"avatarUrl"}
                                    defaultValue={updatedPlayer?.avatarUrl}
                                    setValue={setValue}
                                    player
                                />
                            </div>

                            <div>
                                <FirstBlock>
                                    <InputAndLabelStyle>
                                        <AddFormLabel>Name</AddFormLabel>
                                        <CustomInput
                                            name={"name"}
                                            errors={errors}
                                            register={register}
                                            defaultValue={updatedPlayer?.name}
                                            addPlayer
                                        />
                                    </InputAndLabelStyle>

                                    <InputAndLabelStyle>
                                        <AddFormLabel>Position</AddFormLabel>
                                        <Controller
                                            name="position"
                                            control={control}
                                            rules={{required: true}}
                                            render={({field: {onChange}}) => (
                                                <CustomSelect
                                                    styles={StylesForSelect}
                                                    options={optionsPosition}
                                                    onChange={(e: any) => onChange(e.value)}
                                                    defaultValue={{
                                                        label: updatedPlayer?.position,
                                                        value: updatedPlayer?.position,
                                                    }}
                                                />
                                            )}
                                        />
                                        {errors && errors?.position?.type === "required" && (
                                            <SpanForMessage>
                                                <ValidationMessage>Required</ValidationMessage>
                                            </SpanForMessage>
                                        )}
                                    </InputAndLabelStyle>

                                    <InputAndLabelStyle>
                                        <AddFormLabel>Division</AddFormLabel>
                                        <Controller
                                            name="team"
                                            control={control}
                                            rules={{required: true}}
                                            render={({field: {onChange}}) => (
                                                <CustomSelect
                                                    styles={StylesForSelect}
                                                    options={optionsDivision}
                                                    onChange={(e: any) => onChange(e.value)}
                                                    defaultValue={{
                                                        label: updatedPlayer?.teamName,
                                                        value: updatedPlayer?.team,
                                                    }}
                                                />
                                            )}
                                        />
                                        {errors && errors?.team?.type === "required" && (
                                            <SpanForMessage>
                                                <ValidationMessage>Required</ValidationMessage>
                                            </SpanForMessage>
                                        )}
                                    </InputAndLabelStyle>
                                </FirstBlock>

                                <SecondBlock>
                                    <div>
                                        <InputAndLabelStyle>
                                            <AddFormLabel>Height (cm)</AddFormLabel>
                                            <CustomInput
                                                type="number"
                                                name={"height"}
                                                errors={errors}
                                                register={register}
                                                defaultValue={updatedPlayer?.height}
                                                addPlayer
                                                smallSize
                                            />
                                        </InputAndLabelStyle>

                                        <InputAndLabelStyle>
                                            <div>
                                                <AddFormLabel style={{display: "block"}}>
                                                    Birthday
                                                </AddFormLabel>
                                                <CustomInput
                                                    type={updatedPlayer ? "text" : "date"}
                                                    name={"birthday"}
                                                    errors={errors}
                                                    register={register}
                                                    placeholder="yyyy-mm-dd"
                                                    defaultValue={updatedPlayer?.birthday}
                                                    addPlayer
                                                    smallSize
                                                    date
                                                />
                                            </div>
                                        </InputAndLabelStyle>

                                        <Button name="Cancel" cancel small/>
                                    </div>

                                    <div>
                                        <InputAndLabelStyle>
                                            <AddFormLabel>Weight (kg)</AddFormLabel>
                                            <CustomInput
                                                type="number"
                                                name={"weight"}
                                                errors={errors}
                                                register={register}
                                                defaultValue={updatedPlayer?.weight}
                                                addPlayer
                                                smallSize
                                            />
                                        </InputAndLabelStyle>

                                        <InputAndLabelStyle>
                                            <AddFormLabel>Number</AddFormLabel>
                                            <CustomInput
                                                type="number"
                                                name={"number"}
                                                errors={errors}
                                                register={register}
                                                defaultValue={updatedPlayer?.number}
                                                addPlayer
                                                smallSize
                                            />
                                        </InputAndLabelStyle>

                                        <Button name="Save" red small/>
                                    </div>
                                </SecondBlock>
                            </div>
                        </AddFormStyle>
                    </AddFormContainer>
                </AddItemContent>
            </SidebarAndContent>
        </GlobalGrid>
    );
};

const GlobalGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;

  @media screen and ${maxW.md} {
    grid-template-rows: 62px auto;
  }
`;

const AddFormLabel = styled.label`
  color: ${theme.grey};
`;

const SidebarAndContent = styled.div`
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

const FirstBlock = styled.div`
  display: grid;
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

  @media screen and ${maxW.md} {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  }
`;

const InputAndLabelStyle = styled.div`
  display: grid;
`;

const SecondBlock = styled.div`
  display: grid;
  grid-template-columns: 171px 171px;
  column-gap: 24px;

  @media screen and ${maxW.ssm} {
    grid-template-columns: 1fr 1fr;
  }
`;

const SpanForMessage = styled.span`
  margin-top: -24px;
  color: ${theme.lightestRed};
`;
const ValidationMessage = styled.p`
  font-size: 12px;
  line-height: 0;
  padding-bottom: 24px;
  color: ${theme.lightestRed};
`;
