import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../../mocks/Wrapper";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of robots", () => {
      render(
        <Wrapper>
          <HomePage></HomePage>
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const robotsList = screen.getByRole("list");

      expect(robotsList).toBeInTheDocument();
    });
  });
});
