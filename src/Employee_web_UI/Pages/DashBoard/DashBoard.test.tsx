import { render, screen, fireEvent } from "@testing-library/react";
import { DashBoard } from "./DashBoard";
import { leaveModalContext } from "../../Context/leaveModalContext";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <leaveModalContext.Provider
        value={{ leaveModal: false, setleaveModal: jest.fn() }}
      >
        <DashBoard />
      </leaveModalContext.Provider>
    </BrowserRouter>
  );
});

describe("dashboard testing", () => {
  test("check in button should present", () => {
    const checkInBtn = screen.getByTestId("CheckInBtn");
    expect(checkInBtn).toBeInTheDocument();
  });

  //commented test case will be use later

  // test("should show LeaveModal when click on employees on leave", async () => {
  //   const employeeLeave = screen.getByRole("heading", {
  //     name: "5 Employees on leave",
  //   });
  //   // const employeeLeave = screen.getByTestId("employeeLeave");
  //   fireEvent.click(employeeLeave);
  //   await new Promise((resolve) => setTimeout(resolve, 0));
  //   const employeedob = screen.getByTestId("employeeName");
  //   const dbbox = screen.getByTestId("dbbox");
  //   const closeBtn = screen.getByTestId("closeBtn");
  //   expect(employeedob).toBeInTheDocument();
    // expect(leaveModalBackdrop).toBeInTheDocument();
  // });

  // test("should close leavemodal when clicking on close btn", async() => {
  //     const employeeLeave = screen.getByTestId("employeeLeave");
  //     fireEvent.click(employeeLeave);
  //     const closeBtn = await waitFor(() =>  screen.findByTestId("closeBtn"));
  //     expect(closeBtn).toBeTruthy();
  // const employeeLeave = screen.getByTestId("employeeLeave");
  // fireEvent.click(employeeLeave);
  // const leaveModalBackdrop = screen.getByTestId("leaveModalBackdrop");
  // const leaveModal= screen.getByTestId("leaveModal");
  // const closeBtn = screen.getByTestId("closeBtn");
  // expect(leaveModal).toBeInTheDocument();
  // expect(closeBtn).toBeInTheDocument();
  // fireEvent.click(closeBtn);
  // expect(leaveModal).not.toBeInTheDocument();
  // })
});
