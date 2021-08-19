export interface IAddPlayerRequest {
  name: string;
  number: number;
  position: string;
  team: string;
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
  team: string;
  birthday: number;
  height: number;
  weight: number;
  avatarUrl: string;
}



export interface IPlayers {
  loaded: boolean;
  players: Array<any> | null;
  player: IPlayer | null;
  updatedPlayer: IPlayer | null;
}

export interface IPlayer {
  id: number;
  name: string;
  number: number;
  position: string;
  team: string;
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
  team: string;
  birthday: number;
  height: number;
  weight: number;
  avatarUrl: string;
}
