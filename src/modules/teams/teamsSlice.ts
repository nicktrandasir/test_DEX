import { createSlice } from "@reduxjs/toolkit";
import {ITeams} from "../../api/dto/ITeam";
import {
  addTeam,
  deleteTeam,
  getTeam,
  getTeams, updateTeamThunk,
} from "./teamsThunk";

const initialState: ITeams = {
  loaded: false,
  teams: [],
  team: null,
  updatedTeam: null,
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    teamForUpdate: (state ) => {
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
    },
    [getTeams.rejected.type]: (state) => {
      state.loaded = false;
    },

    [getTeam.pending.type]: (state) => {
      state.loaded = false;
    },
    [getTeam.fulfilled.type]: (state, { payload }) => {
      state.loaded = true;
      state.team = payload;
    },
    [getTeam.rejected.type]: (state) => {
      state.loaded = false;
    },

    [addTeam.pending.type]: (state) => {
      state.loaded = true;
    },
    [addTeam.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [addTeam.rejected.type]: (state) => {
      state.loaded = false;
    },

    [updateTeamThunk.pending.type]: (state) => {
      state.loaded = true;
    },
    [updateTeamThunk.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [updateTeamThunk.rejected.type]: (state) => {
      state.loaded = false;
    },

    [deleteTeam.pending.type]: (state) => {
      state.loaded = true;
    },
    [deleteTeam.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [deleteTeam.rejected.type]: (state) => {
      state.loaded = false;
    },
  },
});

export const {teamForUpdate, clearUpdatedTeam} = teamsSlice.actions;
