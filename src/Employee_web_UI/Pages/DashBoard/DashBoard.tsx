import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useLeaveModal } from "../../Context/leaveModalContext";
import { Container } from "../Container";
import { useLocation } from "react-router-dom";
import "./DashBoard.css";

const currentDate = new Date();
type optionsType = {
  day: "numeric";
  month: "long";
  year: "numeric" | "2-digit";
};
const options: optionsType = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
const formattedDate = currentDate.toLocaleDateString("en-US", options);
const CheckinCheckoutFeat = () => {
  const location = useLocation();

  return (
    <Box className="dateTimeCheckBox">
      <Box className="dbFeat">
        <CalendarMonthOutlined className="light_grey_color" />
        {formattedDate}
      </Box>
      <Box className="dbFeat">
        <AccessTimeOutlinedIcon className="light_grey_color" />
        00:00 Hours
      </Box>
     
      <Button
        variant="contained"
        className={` inoutBtn ${
          location.pathname === "/profile" ? "checkOutbtn" : "checkInbtn"
        }`}
        data-testid="CheckInBtn"
      >
        {location.pathname === "/profile" ? "Check Out" : "Check In"}
      </Button>
    </Box>
  );
};

const DashBoard = () => {
  const {  setleaveModal } = useLeaveModal();

  return (
    <Container>
      <Box className="pagebody">
        <Stack className="dbTop">
          <Box>
            <Typography variant="h5" fontWeight={900} className="welcomeMsg">
              Welcome Vaibhav!
            </Typography>
            <Typography variant="subtitle1">
              Hello, Welcome to Team On Deck
            </Typography>
          </Box>
          <CheckinCheckoutFeat />
        </Stack>
        <Box className="leaveEventNotify">
          <Box className="leaveEvents">
            <Box className="eventHour">
              <Box className="workingHour hourLeave">
                <Box>
                  <Typography variant="subtitle2">
                    Total Working Hours
                  </Typography>
                  <Typography variant="h5">15 Hours</Typography>
                </Box>
                <Typography className="weeklyHour">WEEKLY HOURS</Typography>
              </Box>
              <Box className="emleaves hourLeave">
                <Box className="emleavesHead">
                  <Typography>On Leave</Typography>
                  <Typography
                    variant="subtitle2"
                    className="light_grey_color cursorPointer"
                    data-testid="employeeLeave"
                    onClick={() => setleaveModal(true)}
                  >
                    5 Employees on leave
                  </Typography>
                </Box>
                <AvatarGroup
                  variant="square"
                  spacing={1}
                  sx={{ borderRadius: "0" }}
                  className="avatarGrp"
                >
                  <Avatar className="avatar"></Avatar>
                  <Avatar className="avatar"></Avatar>
                  <Box className="moreLeave avatar">+2</Box>
                </AvatarGroup>
              </Box>
            </Box>
            <Box className="upcomingEvents">
              <Box className="eachupcomingEvent">
                <Typography variant="h6" className="upcomingDates fontWeight">
                  Upcoming holiday
                </Typography>
                <Box className="eachUpcomingdate">
                  <Box className="dayDate">
                    <Avatar className="avatar monthAvatar">Aug</Avatar>
                    <Box>
                      <Typography variant="subtitle2" className="fontWeight">
                        Independence Day
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className="light_grey_color"
                      >
                        Tuesday, Aug 15, 2023
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="subtitle2" className="light_grey_color">
                    120 days left
                  </Typography>
                </Box>
              </Box>
              <Box className="eachupcomingEvent">
                <Typography variant="h6" className="upcomingDates fontWeight">
                  Upcoming Birthdays
                </Typography>
                <Box className="eachUpcomingdate">
                  <Box className="dayDate">
                    <Avatar className="avatar"></Avatar>
                    <Box>
                      <Typography variant="subtitle2" className="fontWeight">
                        Neelam Dhami
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className="light_grey_color"
                      >
                        April 15
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="subtitle2" className="light_grey_color">
                    7 days left
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="notificationBox">
            <Typography variant="h6" className="upcomingDates fontWeight">
              Notifications
            </Typography>
            <Box>
              <Box className="dayDate">
                <Avatar className="avatar"></Avatar>
                <Box>
                  <Typography variant="subtitle2" className="fontWeight">
                    Lorem Ipsum
                  </Typography>
                  <Typography variant="subtitle2" className="light_grey_color">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque, i necessitatibus
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        
      </Box>
    </Container>
  );
};

export { DashBoard, CheckinCheckoutFeat, formattedDate };
