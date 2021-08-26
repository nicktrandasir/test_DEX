import { BaseRequest } from "../baseRequest";
import {
  IAddPlayerRequest,
  IPlayer,
  IUpdatePlayerRequest,
} from "../dto/IPlayer";

export const players = {
  getPlayers: () => {
    return BaseRequest.get("/Player/GetPlayers", {
      headers: {
        Authorization: `Bearer ` + localStorage.token,
      },
    }).then((response) => {
      return response.data;
    });
  },
  getPlayer: (id: number): Promise<IPlayer> => {
    return BaseRequest.get(`/Player/Get?id=${id}`, {
      headers: {
        Authorization: `Bearer ` + localStorage.token,
      },
    }).then((response) => {
      return response.data;
    });
  },
  addPlayer: ({
    name,
    number,
    position,
    team,
    birthday,
    height,
    weight,
    avatarUrl,
  }: IAddPlayerRequest): Promise<IPlayer> => {
    return BaseRequest.post(
      "/Player/Add",
      {
        name,
        number,
        position,
        team,
        birthday,
        height,
        weight,
        avatarUrl,
      },
      {
        headers: {
          Authorization: `Bearer ` + localStorage.token,
        },
      }
    );
  },
  updatePlayer: ({
    id,
    name,
    number,
    position,
    team,
    birthday,
    height,
    weight,
    avatarUrl,
  }: IUpdatePlayerRequest): Promise<IPlayer> => {
    return BaseRequest.put(
      "/Player/Update",
      {
        id,
        name,
        number,
        position,
        team,
        birthday,
        height,
        weight,
        avatarUrl,
      },
      {
        headers: {
          Authorization: `Bearer ` + localStorage.token,
        },
      }
    );
  },

  getPositions: () => {
    return BaseRequest.get("/Player/GetPositions", {
      headers: {
        Authorization: `Bearer ` + localStorage.token,
      },
    }).then((response) => {
      return response.data;
    });
  },

  deletePlayer: (id: number): Promise<IPlayer> => {
    return BaseRequest.delete(`/Player/Delete?id=${id}`, {
      headers: {
        Authorization: `Bearer ` + localStorage.token,
      },
    });
  },
};