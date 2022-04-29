import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given the Key component", () => {
  describe("When it's instantiated with the text 'hello'", () => {
    test("Then it should render a button with the text 'hello'", () => {
      const expectedText = "hello";

      render(<Key text={"hello"} />);

      const createdButton = screen.getByRole("button");

      expect(createdButton.textContent).toBe(expectedText);
    });
  });
});
