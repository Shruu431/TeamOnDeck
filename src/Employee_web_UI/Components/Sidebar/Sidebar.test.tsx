import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Sidebar showSidebar={false} setShowSidebar={() => {}} />
    </BrowserRouter>
  );
});

describe("sidebar testing", () => {
  test("No of pages", () => {
    const allList = screen.getAllByRole("listitem");
    expect(allList.length).toBe(4);
  });

  test("should render all sidebar pages", () => {
    const dashBoard = screen.getByText("Dashboard");
    const attendance = screen.getByText("Attendance");
    const leaves = screen.getByText("Leaves");
    const profile = screen.getByText("Profile");
    expect(dashBoard).toBeInTheDocument();
    expect(attendance).toBeInTheDocument();
    expect(leaves).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
  });
});
