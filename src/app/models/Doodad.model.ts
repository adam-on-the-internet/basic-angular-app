export interface Doodad {
  name: string;
  id: string;
  type: string;
  description: string;
  age: number;
  used: boolean;
}

export interface DoodadResource {
  doodads: Doodad[];
}
