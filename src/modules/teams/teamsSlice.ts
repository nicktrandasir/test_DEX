import { createSlice } from "@reduxjs/toolkit";
import { ITeam, ITeams } from "../../api/dto/ITeam";
import {
  addTeamThunk,
  deleteTeamThunk,
  getTeamThunk,
  getTeamsThunk,
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
  searchTeam: "",
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
    setSearchTeam: (state, { payload }) => {
      state.searchTeam = payload;
    },
  },
  extraReducers: {
    [getTeamsThunk.pending.type]: (state) => {
      state.loaded = false;
    },
    [getTeamsThunk.fulfilled.type]: (state, { payload }) => {
      state.loaded = true;
      state.teams = payload.data;
      state.teamsCount = payload.count;
      state.currentPage = payload.page;
      state.pageSize = payload.size;
    },
    [getTeamsThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [getTeamThunk.pending.type]: (state) => {
      state.loaded = false;
    },
    [getTeamThunk.fulfilled.type]: (state, { payload }) => {
      state.loaded = true;
      state.team = payload;
    },
    [getTeamThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [addTeamThunk.pending.type]: (state) => {
      state.loaded = true;
    },
    [addTeamThunk.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [addTeamThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [updateTeamThunk.pending.type]: (state) => {
      state.loaded = true;
    },
    [updateTeamThunk.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [updateTeamThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [deleteTeamThunk.pending.type]: (state) => {
      state.loaded = true;
    },
    [deleteTeamThunk.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [deleteTeamThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },
  },
});

export const { teamForUpdate, clearUpdatedTeam, setSearchTeam } =
  teamsSlice.actions;
