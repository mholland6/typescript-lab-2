export default class Player {
  name: string;
  jersey: number;
  constructor(name: string, jersey: number) {
    this.name = name;
    this.jersey = jersey;
  }
  describe(): string {
    return `${this.name} wears ${this.jersey}`
  }
}