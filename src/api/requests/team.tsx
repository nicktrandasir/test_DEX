import { BaseRequest } from "../baseRequest";
import {
  IAddTeamRequest,
  ITeam,
  IUpdateTeamRequest,
  IPage,
} from "../dto/ITeam";

export const teams = {
  getTeams: (
    currentPage = 1,
    pageSize = 6,
    searchName = ""
  ): Promise<IPage<ITeam>> => {
    return BaseRequest.get(
      `/Team/GetTeams?Page=${currentPage}&PageSize=${pageSize}&Name=${searchName}`,
      {
        headers: {
          Authorization: `Bearer ` + localStorage.token,
        },
      }
    ).then((response) => {
      return response.data;
    });
  },
  getTeam: (id: number): Promise<ITeam> => {
    return BaseRequest.get(`/Team/Get?id=${id}`, {
      headers: {
        Authorization: `Bearer ` + localStorage.token,
      },
    }).then((response) => {
      return response.data;
    });
  },
  addTeam: ({
    name,
    conference,
    foundationYear,
    division,
    imageUrl,
  }: IAddTeamRequest): Promise<ITeam> => {
    return BaseRequest.post(
      "/Team/Add",
      {
        name,
        conference,
        foundationYear,
        division,
        imageUrl,
      },
      {
        headers: {
          Authorization: `Bearer ` + localStorage.token,
        },
      }
    );
  },
  updateTeam: ({
    id,
    name,
    conference,
    foundationYear,
    division,
    imageUrl,
  }: IUpdateTeamRequest): Promise<ITeam> => {
    return BaseRequest.put(
      "/Team/Update",
      {
        id,
        name,
        conference,
        foundationYear,
        division,
        imageUrl,
      },
      {
        headers: {
          Authorization: `Bearer ` + localStorage.token,
        },
      }
    );
  },
  deleteTeam: (id: number): Promise<ITeam> => {
    return BaseRequest.delete(`/Team/Delete?id=${id}`, {
      headers: {
        Authorization: `Bearer ` + localStorage.token,
      },
    });
  },
};
