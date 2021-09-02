import { createAsyncThunk } from "@reduxjs/toolkit";
import { teams } from "../../api/requests/team";
import { imageRequest } from "../../api/requests/image";

import {
  IAddTeam,
  IAddTeamRequest,
  IGetTeamsRequest,
  IPage,
  ITeam,
  IUpdateTeamRequest,
} from "../../api/dto/ITeam";

export const getTeamsThunk = createAsyncThunk<IPage<ITeam>, IGetTeamsRequest>(
  "team/GetTeams",
  ({ currentPage, pageSize, searchName }) => {
    return teams.getTeams(currentPage, pageSize, searchName);
  }
);

export const getTeamThunk = createAsyncThunk<ITeam, { id: number }>(
  "Team/Get",
  ({ id }) => {
    return teams.getTeam(id);
  }
);

export const addTeamThunk = createAsyncThunk<IAddTeam, IAddTeamRequest>(
  "team/addUpdateTeam",
  async ({ ...data }) => {
    const formData = new FormData();
    formData.append("file", data.imageUrl);
    let image = "";
    if (formData) {
      image = await imageRequest.save(formData);
    }
    return teams.addTeam({
      ...data,
      imageUrl: image,
    });
  }
);

export const updateTeamThunk = createAsyncThunk<ITeam, IUpdateTeamRequest>(
  "team/updateTeam",
  async ({ ...data }) => {
    var image = "";
    if ((data.imageUrl as any) instanceof File) {
      const formData = new FormData();
      formData.append("file", data.imageUrl);
      if (formData) {
        image = await imageRequest.save(formData);
      }
    } else {
      image = data.imageUrl;
    }
    return teams.updateTeam({
      ...data,
      imageUrl: image,
    });
  }
);

export const deleteTeamThunk = createAsyncThunk<ITeam, { id: number }>(
  "Team/Delete",
  ({ id }) => {
    return teams.deleteTeam(id);
  }
);
