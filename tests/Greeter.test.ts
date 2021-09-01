import Greeter from "../src/models/Greeter"

describe ("Greeter class", () => {
  test("constructor sets greeting property", () => {
    const greeter: Greeter = new Greeter("Bonjour");
    expect(greeter.greeting).toBe("Bonjour");
  });
  test("first test: greeter function returns greeting, name", () => {
    const greeter: Greeter = new Greeter("Hola");
    expect(greeter.greet("Matt")).toBe("Hola, Matt!");    
  });
  test("second test: greeter function returns greeting, name", () => {
    const greeter: Greeter = new Greeter("Ciao");
    expect(greeter.greet("Mateo")).toBe("Ciao, Mateo!");
  });
});