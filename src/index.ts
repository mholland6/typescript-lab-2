import Greeter from "./models/Greeter";
import Player from "./models/Player";
import TeamPlayer from "./models/TeamPlayer";
import JavaScriptGreeter from "./models/JavaScriptGreeter";
import LoudGreeter from "./models/LoudGreeter";
import HtmlGreeter from "./models/HtmlGreeter";
import ChalkGreeter from "./models/ChalkGreeter";

const chalk = require('chalk');


const promptly = require('promptly');
(async () => {
    const testChalkGreeter = new ChalkGreeter("Hello");
    console.log(chalk.bgCyanBright.white(testChalkGreeter.greet("World")));
    const name = await promptly.prompt('Name: ');
    const myGreeting = new Greeter("Bom dia");
    console.log("Greeter------->  " + chalk.green(myGreeting.greet(name)));
    const newJSGreeter = new JavaScriptGreeter("Hi");
    console.log("JSGreeter----->  " + chalk.red(newJSGreeter.greet(name)));
    const loudGreet = new LoudGreeter("Rise and shine");
    console.log("LoudGreeter--->  " + chalk.yellow(loudGreet.greet(name)));
    const newHtmlGreeter = new HtmlGreeter("Bonjour", "h3");
    console.log("HtmlGreeter--->  " + chalk.underline.bgBlue(newHtmlGreeter.greet(name)));

})();








// const newLoudGreeter = new LoudGreeter("Hola");
// console.log(newLoudGreeter.greet("Matt"));









// // player
// const david: Player = new Player("David", 47);
// console.log(david);
// console.log(david.describe());


// // team player
// const demetri: TeamPlayer = new TeamPlayer('Demetri', 101, "GC");
// console.log(demetri);
// console.log(demetri.describe());