import {render, screen} from "@testing-library/react";

import Employee_leave from "./Employee_leave";


describe("Apply Leave model testing", () => {
    
    test(" Apply Leave button should present", () => {
        render (<Employee_leave />)
      const ApplyLeaveBtn = screen.getByTestId("ApplyLeaveBtn");
      expect(ApplyLeaveBtn).toBeInTheDocument();
    });
})
test("Text Should present", () => {
    render (<Employee_leave />)
  const attendance = screen.getByText(/leave summery /i)
  expect(attendance).toBeInTheDocument();
  
})
test("should show LeaveModal when click on employees on leave", async () => {
      const employeeLeave = screen.getByRole("heading", {
        name: "5 Employee On Leave",
      });
    })