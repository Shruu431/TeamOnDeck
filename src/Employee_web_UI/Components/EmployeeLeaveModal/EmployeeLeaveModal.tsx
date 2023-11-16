import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useLeaveModal } from "../../Context/leaveModalContext";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./EmployeeLeaveModal.css";


const EmployeeLeaveModal = () => {
  const { setleaveModal } = useLeaveModal();
  return (
    <Box
      className="backDrop"
      onClick={() => setleaveModal(false)}
      data-testid="leaveModalBackdrop"
    >
      <Box
        className="leaveModal"
        onClick={(e) => e.stopPropagation()}
        data-testid="leaveModal"
      >
        <Box className="headCrossIcon">
          <Typography
            variant="h6"
            className="fontWeight"
            data-testid="leaveModalEmployee"
          >
            Employees on leave
          </Typography>
          <CloseOutlinedIcon
            data-testid="closeBtn"
            className="icon cursorPointer"
            onClick={() => setleaveModal(false)}
          />
        </Box>
        <Box className="eachEmployee">
          <Avatar className="avatar"></Avatar>
          <Box className="nameAvatar">
            <Typography
              variant="subtitle2"
              data-testid="employeeName"
              className="fontWeight"
            >
              Neelam Dhami
            </Typography>
            <Typography variant="subtitle2" className="light_grey_color">
              April 15, 2023
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { EmployeeLeaveModal };
