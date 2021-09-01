import LoudGreeter from "../src/models/LoudGreeter";

describe ("LoudGreeter class", () => {
  test("first test: LoudGreeter returns greeting, name, without calling addVolume", () => {
    const loudGreet: LoudGreeter = new LoudGreeter("Hola");
    expect(loudGreet.greet("Matt")).toBe("Hola, Matt!!");    
  });
  test("second test: LoudGreeter returns greeting, name, while calling addVolume once", () => {
    const loudGreet: LoudGreeter = new LoudGreeter("Aloha");
    loudGreet.addVolume();
    expect(loudGreet.greet("Matt")).toBe("Aloha, Matt!!!");    
  });
  test("third test: call addVolume three times", () => {
    const loudGreet: LoudGreeter = new LoudGreeter("Oh hey");
    loudGreet.addVolume();
    loudGreet.addVolume();
    loudGreet.addVolume();
    expect(loudGreet.greet("Matt")).toBe("Oh hey, Matt!!!!!");    
  });
});