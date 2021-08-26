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
