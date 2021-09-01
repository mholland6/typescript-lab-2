//import Greeter from "../src/models/Greeter";
import JavaScriptGreeter from "../src/models/JavaScriptGreeter";

describe ("Greeter class", () => {
  test("first test: greeter function returns greeting, name", () => {
    const greeter: JavaScriptGreeter = new JavaScriptGreeter("Hola");
    expect(greeter.greet("Matt")).toBe("console.log(Hola, Matt!)");    
  });
  test("second test: greeter function returns greeting, name", () => {
    const greeter: JavaScriptGreeter = new JavaScriptGreeter("Ciao");
    expect(greeter.greet("Mateo")).toBe("console.log(Ciao, Mateo!)");
  });
});