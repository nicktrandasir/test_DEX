import { createAsyncThunk } from "@reduxjs/toolkit";
import { players } from "../../api/requests/player";
import { imageRequest } from "../../api/requests/image";
import {
  IAddPlayer,
  IAddPlayerRequest,
  IGetPlayersRequest,
  IPage,
  IPlayer,
  IUpdatePlayerRequest,
} from "../../api/dto/IPlayer";

export const getPlayersThunk = createAsyncThunk<
  IPage<IPlayer>,
  IGetPlayersRequest
>("player/getPlayers", ({ currentPage, pageSize, searchName, teamIds }) => {
  return players.getPlayers(currentPage, pageSize, searchName, teamIds);
});

export const getPlayerThunk = createAsyncThunk(
  "player/getPlayer",
  ({ id }: { id: number }) => {
    return players.getPlayer(id);
  }
);

export const addPlayerThunk = createAsyncThunk<IAddPlayer, IAddPlayerRequest>(
  "player/addUpdatePlayer",
  async ({ ...data }) => {
    const formData = new FormData();
    formData.append("file", data.avatarUrl);
    let image = "";
    if (formData) {
      image = await imageRequest.save(formData);
    }
    return players.addPlayer({
      ...data,
      avatarUrl: image,
    });
  }
);

export const updatePlayerThunk = createAsyncThunk<
  IPlayer,
  IUpdatePlayerRequest
>("player/updatePlayer", async ({ ...data }) => {
  var image = "";
  if ((data.avatarUrl as any) instanceof File) {
    const formData = new FormData();
    formData.append("file", data.avatarUrl);
    if (formData) {
      image = await imageRequest.save(formData);
    }
  } else {
    image = data.avatarUrl;
  }
  return players.updatePlayer({
    ...data,
    avatarUrl: image,
  });
});

export const getPlayersPositionsThunk = createAsyncThunk(
  "player/getPosition",
  () => {
    return players.getPositions();
  }
);

export const deletePlayerThunk = createAsyncThunk<IPlayer, { id: number }>(
  "player/deletePlayer",
  ({ id }) => {
    return players.deletePlayer(id);
  }
);
