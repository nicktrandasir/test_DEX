import { createSlice } from "@reduxjs/toolkit";
import {
  addPlayer,
  deletePlayer,
  getPlayer,
  getPlayers,
  getPlayersPositions,
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
  },
  extraReducers: {
    [getPlayersPositions.pending.type]: (state) => {
      state.loaded = false;
    },
    [getPlayersPositions.fulfilled.type]: (state, { payload }) => {
      state.positions = payload;
    },
    [getPlayersPositions.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [getPlayers.pending.type]: (state) => {
      state.loaded = false;
    },
    [getPlayers.fulfilled.type]: (state, { payload }) => {
      state.loaded = true;
      state.players = payload.data;
      state.playersCount = payload.count;
      state.currentPage = payload.page;
      state.pageSize = payload.size;
    },
    [getPlayers.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [getPlayer.pending.type]: (state) => {
      state.loaded = false;
    },
    [getPlayer.fulfilled.type]: (state, { payload }) => {
      state.loaded = true;
      state.player = payload;
    },
    [getPlayer.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [addPlayer.pending.type]: (state) => {
      state.loaded = true;
    },
    [addPlayer.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [addPlayer.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [updatePlayerThunk.pending.type]: (state) => {
      state.loaded = true;
    },
    [updatePlayerThunk.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [updatePlayerThunk.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    },

    [deletePlayer.pending.type]: (state) => {
      state.loaded = true;
    },
    [deletePlayer.fulfilled.type]: (state) => {
      state.loaded = false;
    },
    [deletePlayer.rejected.type]: (state, {error}) => {
      state.loaded = false;
      HandleErrors(error);
    }
  }
});

export const { playerForUpdate, clearUpdatedPlayer } = playersSlice.actions;
