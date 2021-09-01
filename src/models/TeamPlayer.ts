import Player from "./Player";

export default class TeamPlayer extends Player {
  team: string;
  constructor(name: string, jersey: number, team: string) {
    super(name, jersey);
    this.team = team;
  }
  describe(): string {
    return `console.log ${super.describe()}` //+ ` and plays for ${this.team}`;
  }
}