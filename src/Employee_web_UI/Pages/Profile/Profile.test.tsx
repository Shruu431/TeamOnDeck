import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Profile } from "./Profile";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
});

describe("testing profile", () => {
  test("checkout button should present", () => {
    const monthAddIconTestId = screen.getAllByTestId("monthAddIconTestId");
    monthAddIconTestId.forEach((month) => {
      fireEvent.click(month);
      const salarytableTestId = screen.getAllByTestId("salarytableTestId");
      salarytableTestId.forEach((earningSalary) =>
        expect(earningSalary).toBeInTheDocument()
      );
    });
  });
});
