import React, {useCallback, useEffect, useMemo} from "react";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { maxW, theme } from "../../assets/theme/theme";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlayerThunk,
  getPlayersPositionsThunk, getPlayerThunk,
  updatePlayerThunk,
} from "../../modules/players/playersThunk";
import {useHistory, useParams} from "react-router-dom";
import { AppStateType } from "../../core/redux/rootReducer";
import {clearUpdatedPlayer, playerForUpdate} from "../../modules/players/playersSlice";
import { CustomInput } from "../../ui/customInput/customInput";
import { CustomSelect } from "../../ui/customSelect/customSelect";
import { IUpdatePlayerRequest } from "../../api/dto/IPlayer";
import { AddUpdateLayout } from "../../components/addUpdate/addUpdateLayout";
import { getTeamsThunk } from "../../modules/teams/teamsThunk";
import { pathRouts } from "../routes";

export const AddUpdatePlayer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onCancel = () => {
    history.push(pathRouts.Players);
  };
  const {
    register,
    setValue,
    handleSubmit,
    control,

    formState: { errors }

  } = useForm();

  const { playerId } = useParams<{ playerId: string }>();
 useMemo(async() => {
   playerId && await dispatch(getPlayerThunk({ id: +playerId }))
   playerId && dispatch(playerForUpdate())
 }, [playerId])


  useEffect(() => {
    dispatch(
      getTeamsThunk({
        currentPage: 1,
        pageSize: 6,
        searchName: "",
      })
    );
    dispatch(getPlayersPositionsThunk());
  }, [dispatch]);

  const { updatedPlayer } = useSelector((state: AppStateType) => state.players);

  useEffect(() => {
    setValue("name", updatedPlayer?.name);
    setValue("height", updatedPlayer?.height);
    setValue("weight", updatedPlayer?.weight);
    setValue("number", updatedPlayer?.number);
    setValue("birthday", updatedPlayer?.birthday);

    setValue("position", updatedPlayer?.position);
    setValue("team", updatedPlayer?.team);

  }, [updatedPlayer, setValue]);




  const { teams } = useSelector((state: AppStateType) => state.teams);
  const { positions } = useSelector((state: AppStateType) => state.players);

  const optionsDivision = teams?.map((team) => {
    return { label: team.name, value: team.id };
  });
  const optionsPositions = positions?.map((position) => {
    return { label: position, value: position };
  });

  const onSubmit = useCallback(
    async (data: IUpdatePlayerRequest) => {
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
        history.push(pathRouts.Players);
      } else {
        dispatch(
          addPlayerThunk({
            ...data,
          })
        );
        history.push(pathRouts.Players);
      }
    },
    [dispatch, history, updatedPlayer]
  );


  return (
    <AddUpdateLayout
      onSubmit={handleSubmit(onSubmit)}
      setValue={setValue}
      defaultValue={updatedPlayer}
      onCancel={onCancel}
    >
      <FirstBlock>
        <InputAndLabelStyle>
          <InputLabel>Name</InputLabel>
          <CustomInput
            required="Required"
            name={"name"}
            errors={errors}
            register={register}
            defaultValue={updatedPlayer?.name}
          />
        </InputAndLabelStyle>

        <InputAndLabelStyle>
          <SelectLabel>Position</SelectLabel>
          <Controller
            name="position"
            control={control}
            rules={{ required: "Required" }}
            render={({ field: { onChange } }) => (
              <CustomSelect
                errors={errors?.position}
                isSearchable={false}
                options={optionsPositions}
                onChange={(e: EventTarget) => onChange(e.value)}

                defaultValue={{
                  label: updatedPlayer?.position,
                  value: updatedPlayer?.position
                }}
              />
            )}
          />
          {errors && errors?.position?.type === "required" && (
            <SpanForMessage>
              <ValidationMessage>
                {errors && errors?.position?.message}
              </ValidationMessage>
            </SpanForMessage>
          )}
        </InputAndLabelStyle>

        <InputAndLabelStyle>
          <SelectLabel>Team</SelectLabel>
          <Controller
            name="team"
            control={control}
            rules={{ required: "Required" }}
            render={({ field: { onChange } }) => (
              <CustomSelect
                errors={errors?.team}
                isSearchable={false}
                options={optionsDivision}
                onChange={(e: EventTarget) => onChange(e.value)}
                defaultValue={{
                  label: updatedPlayer?.teamName,
                  value: updatedPlayer?.team,
                }}
              />
            )}
          />
          {errors && errors?.team?.type === "required" && (
            <SpanForMessage>
              <ValidationMessage>
                {errors && errors?.team?.message}
              </ValidationMessage>
            </SpanForMessage>
          )}
        </InputAndLabelStyle>
      </FirstBlock>
      <SecondBlock>
        <div>
          <InputAndLabelStyle>
            <InputLabel>Height (cm)</InputLabel>
            <CustomInput
              required="Required"
              type="number"
              name={"height"}
              errors={errors}
              register={register}
              defaultValue={updatedPlayer?.height}
              smallSize
            />
          </InputAndLabelStyle>

          <InputAndLabelStyle>
            <div>
              <InputLabel style={{ display: "block" }}>Birthday</InputLabel>
              <CustomInput
                required="Required"
                type={updatedPlayer ? "text" : "date"}
                name={"birthday"}
                errors={errors}
                register={register}
                placeholder="yyyy-mm-dd"
                defaultValue={updatedPlayer?.birthday}
                smallSize
                date
              />
            </div>
          </InputAndLabelStyle>
        </div>

        <div>
          <InputAndLabelStyle>
            <InputLabel>Weight (kg)</InputLabel>
            <CustomInput
              required="Required"
              type="number"
              name={"weight"}
              errors={errors}
              register={register}
              defaultValue={updatedPlayer?.weight}
              smallSize
            />
          </InputAndLabelStyle>

          <InputAndLabelStyle>
            <InputLabel>Number</InputLabel>
            <CustomInput
              required="Required"
              type="number"
              name={"number"}
              errors={errors}
              register={register}
              defaultValue={updatedPlayer?.number}
              smallSize
            />
          </InputAndLabelStyle>
        </div>
      </SecondBlock>
    </AddUpdateLayout>
  );
};

const InputLabel = styled.label`
  color: ${theme.grey};
`;
const SelectLabel = styled.label`
  color: ${theme.grey};
  padding-bottom: 8px;
`;

const FirstBlock = styled.div`
  display: grid;
`;

const InputAndLabelStyle = styled.div`
  display: grid;
  padding-bottom: 24px;
`;

const SecondBlock = styled.div`
  display: grid;
  grid-template-columns: 171px 171px;
  column-gap: 24px;

  @media screen and (${maxW.ssm}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SpanForMessage = styled.span`
  color: ${theme.lightestRed};
`;

const ValidationMessage = styled.p`
  font-size: 12px;
  line-height: 0;
  color: ${theme.lightestRed};
`;
