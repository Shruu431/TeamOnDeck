import { render, screen } from "@testing-library/react";
import { EmployeeLeaveModal } from "./EmployeeLeaveModal";
import { leaveModalContext } from "../../Context/leaveModalContext";
import { SetStateAction } from "react";

beforeEach(() => {
  render(
    <leaveModalContext.Provider
      value={{ leaveModal: false, setleaveModal: jest.fn() }}
    >
      <EmployeeLeaveModal />
    </leaveModalContext.Provider>
  );
});

describe("leaveEmployemodal", () => {
  test("should close leavemodal when clicking on backdrop", () => {
    const leaveModalBackdrop = screen.getByTestId("leaveModalBackdrop");
    expect(leaveModalBackdrop).toBeInTheDocument();
  });
});
