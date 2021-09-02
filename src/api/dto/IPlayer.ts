export interface IAddPlayerRequest {
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: number;
  height: number;
  weight: number;
  avatarUrl: string;
}

export interface IUpdatePlayerRequest {
  id: number;
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: number;
  height: number;
  weight: number;
  avatarUrl: string;
}

export interface IPlayers {
  loaded: boolean;
  players: IPlayer[];
  player: IPlayer;
  updatedPlayer: IPlayer | null;
  positions: Array<string>;
  playersCount: number;
  currentPage: number;
  pageSize: number;
  searchPlayer: string;
  selectedTeams: { value?: string; label?: string }[];
}

export interface IPlayer {
  id: number;
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: number;
  height: number;
  weight: number;
  avatarUrl: string;
  teamName: string;
}

export interface IAddPlayer {
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: number;
  height: number;
  weight: number;
  avatarUrl: string;
}
export interface IGetPlayersRequest {
  currentPage: number;
  pageSize: number;
  searchName: string;
  teamIds: { value?: string; label?: string }[];
}
export interface IPage<T> {
  data: T;
  page: number;
  count: number;
  size: number;
}
