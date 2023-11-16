import React, { useState } from "react";
import { Container } from "../Container";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { CheckinCheckoutFeat } from "../DashBoard/DashBoard";
import "./Profile.css";
import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

type AttendanceMonthType = {
  month: string;
  earning: EarningType;
};

type EarningType = {
  [props: string]: number;
};

const attendanceMonthList: AttendanceMonthType[] = [
  {
    month: "May 2023",
    earning: {
      "Gloss Earning": 25000,
      Dedication: 5000,
      "Net Earning": 20000,
    },
  },
  {
    month: "April 2023",
    earning: {
      "Gloss Earning": 25000,
      Dedication: 5000,
      "Net Earning": 20000,
    },
  },
  {
    month: "March 2023",
    earning: {
      "Gloss Earning": 25000,
      Dedication: 5000,
      "Net Earning": 20000,
    },
  },
];

const Profile = () => {
  const [earningDropdown, setEarningDropdown] = useState<boolean[]>(
    Array(attendanceMonthList.length).fill(false)
  );

  const earningDropDownHandler = (index: number) => {
    const newEarningDropdown = [...earningDropdown];
    newEarningDropdown[index] = !newEarningDropdown[index];
    setEarningDropdown(newEarningDropdown);
  };

  return (
    <Container>
      <Box className="pagebody">
        <Stack className="dbTop">
          <Typography variant="h5" className="fontWeight">
            Profile
          </Typography>
          <CheckinCheckoutFeat />
        </Stack>
        <Box className="infoLeaveAttend">
          <Box className="infoLeave">
            <Box className="userInfo">
              <Avatar className="userAvatar"></Avatar>
              <Box>
                <Typography className="fontWeight">Vaibhav Shukla</Typography>
                <Typography>vaibhav@pixoatic.com</Typography>
                <Typography>9041709902</Typography>
              </Box>
            </Box>
            <Box className="leaveRecordBox">
              <Box className="eachLeaveRecord">
                <Typography className="leaveRecord fontWeight">3/6</Typography>
                <Typography className="fontWeight">Sick Leave</Typography>
              </Box>
              <Box className="eachLeaveRecord">
                <Typography className="leaveRecord fontWeight">3/6</Typography>
                <Typography className="fontWeight">Casual Leave</Typography>
              </Box>
              <Box className="eachLeaveRecord">
                <Typography className="leaveRecord fontWeight">3/6</Typography>
                <Typography className="fontWeight">Marriage Leave</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="adSummary">
            <Typography variant="h6" className="fontWeight">
              Attendance Summary
            </Typography>
            {attendanceMonthList.map(({ month, earning }, index) => {
              let earningSalary = Object.keys(earning);
              return (
                <Box className="attendanceEarning" key={month}>
                  <Box className="eachAttendanceMonth">
                    <Box
                      className="monthAddIcon cursorPointer"
                      onClick={() => earningDropDownHandler(index)}
                      data-testid="monthAddIconTestId"
                    >
                      <AddIcon className="icon primaryColor" />
                      <Typography className="month">{month}</Typography>
                    </Box>
                    <Button
                      variant="contained"
                      className="btn"
                      startIcon={<ArrowDownwardIcon />}
                    >
                      Download
                    </Button>
                  </Box>
                  <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                    <Table>
                      {earningDropdown[index] ? (
                        <TableBody data-testid="salarytableTestId">
                          {earningSalary.map((value) => {
                            return (
                              <TableRow
                                className="earningSalaryList"
                                key={value}
                              >
                                <TableCell className="eachEarningSalaryList light_grey_color">
                                  {value}
                                </TableCell>
                                <TableCell className="eachEarningSalaryList light_grey_color">
                                  {earning[value]}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      ) : null}
                    </Table>
                  </TableContainer>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export { Profile, attendanceMonthList };
export type { EarningType };
