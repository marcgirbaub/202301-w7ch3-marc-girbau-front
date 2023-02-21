import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../../mocks/Wrapper";
import CreatePage from "./CreatePage";

describe("Given a CreatePage component", () => {
  describe("When rendered", () => {
    test("Then it should show a Create form with a heading 'Create your Robot'", () => {
      const expectedCreateFormTitle = "Create your Robot";
      render(
        <Wrapper>
          <CreatePage></CreatePage>
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const createFormTitle = screen.getByRole("heading", {
        level: 2,
        name: expectedCreateFormTitle,
      });

      expect(createFormTitle).toBeInTheDocument();
    });

    test("Then it should show a button `Create Robot`", () => {
      const expectedButton = "Create Robot";
      render(
        <Wrapper>
          <CreatePage></CreatePage>
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const createButton = screen.getByRole("button", {
        name: expectedButton,
      });

      expect(createButton).toBeInTheDocument();
    });
  });
});
