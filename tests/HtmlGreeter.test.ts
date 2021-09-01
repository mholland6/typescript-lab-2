import HtmlGreeter from "../src/models/HtmlGreeter";

describe("HtmlGreeter class and functionality", () => {
  test("HtmlGreeter constructor works", () => {
    const htmlGreet: HtmlGreeter = new HtmlGreeter("Hey");
    expect(htmlGreet.greeting).toBe("Hey"); 
  });
  test("HtmlGreeter comes back with default h1 tagname value", () => {
    const htmlGreet: HtmlGreeter = new HtmlGreeter("Hello");
    expect(htmlGreet.greet("Matt")).toBe("<h1>Hello, Matt!</h1>"); 
  });
  test("HtmlGreeter method greet with h2", () => {
    const htmlGreet: HtmlGreeter = new HtmlGreeter("Hello", "h2");
    expect(htmlGreet.greet("M")).toBe("<h2>Hello, M!</h2>"); 
  });
  test("HtmlGreeter method greet with p", () => {
    const htmlGreet: HtmlGreeter = new HtmlGreeter("CiaoCiao", "p");
    expect(htmlGreet.greet("Taco Cat")).toBe("<p>CiaoCiao, Taco Cat!</p>"); 
  });
});


