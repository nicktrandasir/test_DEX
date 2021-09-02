import { createSlice } from "@reduxjs/toolkit";
import {
  addPlayerThunk,
  deletePlayerThunk,
  getPlayerThunk,
  getPlayersThunk,
  getPlayersPositionsThunk,
  updatePlayerThunk,
} from "./playersThunk";
import { IPlayer, IPlayers } from "../../api/dto/IPlayer";
import { HandleErrors } from "../../helpers/handleErrors/handleErrors";

const initialState: IPlayers = {
  loaded: false,
  players: [],
  player: {} as IPlayer,
  updatedPlayer: null,
  positions: [],
  playersCount: 0,
  currentPage: 1,
  pageSize: 6,
  searchPlayer: "",
  selectedTeams: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    playerForUpdate: (state) => {
      state.updatedPlayer = state.player;
    },
    clearUpdatedPlayer: (state) => {
      state.updatedPlayer = null;
    },
    setSearchPlayer: (state, { payload }) => {
      state.searchPlayer = payload;
    },
    setSelectedTeam: (state, { payload }) => {
      state.selectedTeams = payload;
    },
  },
  extraReducers: {
    [getPlayersPositionsThunk.pending.type]: (state) => {
      state.loaded = false;
    },
    [getPlayersPositionsThunk.fulfilled.type]: (state, { payload }) => {
      state.positions = payload;
    },
    [getPlayersPositionsThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [getPlayersThunk.pending.type]: (state) => {
      state.loaded = false;
    },
    [getPlayersThunk.fulfilled.type]: (state, { payload }) => {
      state.loaded = true;
      state.players = payload.data;
      state.playersCount = payload.count;
      state.currentPage = payload.page;
      state.pageSize = payload.size;
    },
    [getPlayersThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [getPlayerThunk.pending.type]: (state) => {
      state.loaded = false;
    },
    [getPlayerThunk.fulfilled.type]: (state, { payload }) => {
      state.loaded = true;
      state.player = payload;
    },
    [getPlayerThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [addPlayerThunk.pending.type]: (state) => {
      state.loaded = true;
    },
    [addPlayerThunk.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [addPlayerThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [updatePlayerThunk.pending.type]: (state) => {
      state.loaded = true;
    },
    [updatePlayerThunk.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [updatePlayerThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [deletePlayerThunk.pending.type]: (state) => {
      state.loaded = true;
    },
    [deletePlayerThunk.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [deletePlayerThunk.rejected.type]: (state, { error }) => {
      state.loaded = false;
      HandleErrors(error);
    },
  },
});

export const {
  playerForUpdate,
  clearUpdatedPlayer,
  setSearchPlayer,
  setSelectedTeam,
} = playersSlice.actions;
