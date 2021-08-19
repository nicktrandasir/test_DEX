import { createAsyncThunk } from "@reduxjs/toolkit";
import { players } from "../../api/requests/player";
import { imageRequest } from "../../api/requests/image";
import {
  IAddPlayer,
  IAddPlayerRequest,
  IPlayer,
  IUpdatePlayerRequest,
} from "../../api/dto/IPlayer";

export const getPlayers = createAsyncThunk("/Player/GetPlayers", () => {
  return players.getPlayers();
});

export const getPlayer = createAsyncThunk(
  "Player/Get",
  ({ id }: { id: number }) => {
    return players.getPlayer(id);
  }
);

export const saveImage = createAsyncThunk<string, FormData>(
  "Image/setImage",
  (formData) => {
    return imageRequest.save(formData);
  }
);
export const addPlayer = createAsyncThunk<IAddPlayer, IAddPlayerRequest>(
  "player/addUpdatePlayer",
  async ({
    name,
    number,
    position,
    team,
    birthday,
    height,
    weight,
    avatarUrl,
  }) => {
    const formData = new FormData();
    formData.append("file", avatarUrl);
    let image = "";
    if (formData) {
      image = await imageRequest.save(formData);
    }
    console.log(image);
    return players.addPlayer({
      name,
      number,
      position,
      team,
      birthday,
      height,
      weight,
      avatarUrl: image,
    });
  }
);

export const updatePlayerThunk = createAsyncThunk<
  IPlayer,
  IUpdatePlayerRequest
>("player/updatePlayer", async ({ avatarUrl, ...data }) => {
  var image = "";

    //@ts-ignore
  if (avatarUrl instanceof File) {

    const formData = new FormData();
    formData.append("file", avatarUrl);

    if (formData) {
      image = await imageRequest.save(formData);
    }
  } else {
    image = avatarUrl;
  }
console.log(data)
  return players.updatePlayer({
    ...data,
    avatarUrl: image,
  });
});

export const deletePlayer = createAsyncThunk<IPlayer, { id: number }>(
  "Player/Delete",
  ({ id }) => {
    return players.deletePlayer(id);
  }
);
