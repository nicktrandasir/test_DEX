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
  teams: Array<any> | null;
  team?: ITeam | null;
  updatedTeam?: ITeam | null;
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
