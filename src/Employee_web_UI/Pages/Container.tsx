import React, { useState } from "react";
import { Box } from "@mui/material";
import { Sidebar, Navbar, EmployeeLeaveModal,LeaveRequestModal } from "../Components";
// import { useLeaveModal } from "../Context/leaveModalContext";
// import { useLeaveRequestModal } from "../Context/leaverequestmodalcontext";
type ContainerType = {
  children: React.ReactNode;
};

const Container = (props: ContainerType) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  // const { leaveModal } = useLeaveModal();
  // const { leaveRequestModal } = useLeaveRequestModal();

  // const [leaveRequestModal, setLeaveRequestModal] = useState<boolean>(true) 

  return (
    <Box className="dashboardBox" data-testid="dbbox">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Box className="navPage">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {props.children}
      </Box>
      {/* {leaveRequestModal ? <LeaveRequestModal /> : null} */}
      {/* {leaveModal ? <EmployeeLeaveModal />  : null} */}
    </Box>
  );
};

export { Container };