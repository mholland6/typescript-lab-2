import Greeter from "./Greeter";


export default class ChalkGreeter extends Greeter {
  greet(name: string): string {
    return `${this.greeting}, ${name}!`
  }
}


//bgCyanBright