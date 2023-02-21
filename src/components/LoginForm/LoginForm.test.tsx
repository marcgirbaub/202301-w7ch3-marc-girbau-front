import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title `Log in`", () => {
      const heading = "Log in";

      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );

      const expectedText = screen.getByRole("heading", {
        name: heading,
        level: 2,
      });

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Submit'", () => {
      const buttonText = "Submit";

      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );

      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});
