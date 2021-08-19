import { BaseRequest } from "../baseRequest";
import { IAddTeamRequest, ITeam, IUpdateTeamRequest } from "../dto/ITeam";

export const teams = {
  getTeams: () => {
    return BaseRequest.get("/Team/GetTeams", {
      headers: {
        Authorization: `Bearer ` + localStorage.token,
      },
    }).then((response) => {
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



