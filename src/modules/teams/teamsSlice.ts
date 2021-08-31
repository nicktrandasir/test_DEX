import { createSlice } from "@reduxjs/toolkit";
import { ITeam, ITeams } from "../../api/dto/ITeam";
import {
  addTeam,
  deleteTeam,
  getTeam,
  getTeams,
  updateTeamThunk,
} from "./teamsThunk";
import { HandleErrors } from "../../helpers/handleErrors/handleErrors";

const initialState: ITeams = {
  loaded: false,
  teams: [],
  team: {} as ITeam,
  updatedTeam: null,
  teamsCount: 0,
  currentPage: 1,
  pageSize: 6,
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    teamForUpdate: (state) => {
      state.updatedTeam = state.team;
    },
    clearUpdatedTeam: (state) => {
      state.updatedTeam = null;
    },
  },
  extraReducers: {
    [getTeams.pending.type]: (state) => {
      state.loaded = false;
    },
    [getTeams.fulfilled.type]: (state, { payload }) => {
      state.loaded = true;
      state.teams = payload.data;
      state.teamsCount = payload.count;
      state.currentPage = payload.page;
      state.pageSize = payload.size;
    },
    [getTeams.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [getTeam.pending.type]: (state) => {
      state.loaded = false;
    },
    [getTeam.fulfilled.type]: (state, { payload }) => {
      state.loaded = true;
      state.team = payload;
    },
    [getTeam.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [addTeam.pending.type]: (state) => {
      state.loaded = true;
    },
    [addTeam.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [addTeam.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [updateTeamThunk.pending.type]: (state) => {
      state.loaded = true;
    },
    [updateTeamThunk.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [updateTeamThunk.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [deleteTeam.pending.type]: (state) => {
      state.loaded = true;
    },
    [deleteTeam.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [deleteTeam.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    }
  }
});

export const { teamForUpdate, clearUpdatedTeam } = teamsSlice.actions;
