export interface IAddTeamRequest {
  name: string;
  conference: string;
  division: string;
  foundationYear: number;
  imageUrl: string;
}

export interface IUpdateTeamRequest {
  id: string | number;
  name: string;
  conference: string;
  division: string;
  foundationYear: number;
  imageUrl: string;
}

export interface ITeams {
  loaded: boolean;
  teams: ITeam[];
  team: ITeam;
  updatedTeam?: ITeam | null;
  teamsCount: number;
  currentPage: number;
  pageSize: number;
  searchTeam: string;
}

export interface ITeam {
  id: number;
  name: string;
  division: string;
  conference: string;
  foundationYear: number;
  imageUrl: string;
}

export interface IAddTeam {
  id: number;
  name: string;
  division: string;
  conference: string;
  foundationYear: number;
  imageUrl: string;
}
export interface IGetTeamsRequest {
  currentPage: number;
  pageSize: number;
  searchName: string;
}

export interface IPage<T> {
  data: T;
  count: number;
  page: number;
  size: number;
}
