import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import "./Attendance.css";
import { PNG } from "../../../Assets";
import Data from "./Data.json";
import { Container } from "../Container";

interface InputWrapperProps {
  children?: any;
}

export default function Attendance({ children }: InputWrapperProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id: any) {
    setCurrentPage(id);
  }
  return (
    <Container>
      <Box className="pagebody">
        <Grid item className="main" lg={12} xs={12} sm={12}>
          <Grid item lg={12} xs={12}>
            <p className="attendance">Attendance</p>
          </Grid>

          <Grid
            container
            lg={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item lg={4} xs={12} sm={4} md={4} className="box1">
              <div className="box1-content " style={{ background: "white" }}>
                <div>05:00 Hours</div>
                <div className="current_time">Current Time</div>
                <div>
                  <button
                    className="checkoutButton_color btn"
                    data-testid="CheckOutBtn"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </Grid>

            <Grid item lg={7} xs={12} sm={7} md={7} className="box_2">
              <div className="font_box2">Day Overview This Month</div>
              <Grid style={{ display: "flex" }} spacing={2}>
                <Grid item lg={2} xs={2} sm={2} md={2}>
                  <div>
                    <Box className="box2-content total_days_bg">1</Box>
                    <div className="font_box2">Total working days</div>
                  </div>
                </Grid>

                <Grid item lg={2} xs={2} sm={2} md={2}>
                  <div>
                    <Box className="box2-content total_days_bg">1</Box>
                    <div className="font_box2">Present Days </div>
                  </div>
                </Grid>
                <Grid item lg={2} xs={2} sm={2} md={2}>
                  <div>
                    <Box className="box2-content absent_days_bg">1</Box>
                    <div className="font_box2">Absent Days </div>
                  </div>
                </Grid>
                <Grid item lg={2} xs={2} sm={2} md={2}>
                  <div>
                    <Box className="box2-content half_days_bg">1</Box>
                    <div className="font_box2">Half Days</div>
                  </div>
                </Grid>
                <Grid item lg={2} xs={2} sm={2} md={2}>
                  <div>
                    <Box className="box2-content off_days_bg">1</Box>
                    <div className="font_box2">Off Days</div>
                  </div>
                </Grid>
                <Grid item lg={2} xs={2} sm={2} md={2}>
                  <div>
                    <Box className="box2-content holidays_bg">1</Box>
                    <div className="font_box2">Holidays</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className="table_box">
            <div>
              <p className="attendance">Attendance Summery</p>
            </div>

            
            <Box className="calender_flex ">
              <div style={{ display: "flex" }}>
                <div className="table_caption">Show</div>
                <select className="dropdown margin_left_10">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
                <div className="margin_left_5">entries</div>
              </div>

              <div className="calender_flex">
                <div className="m_top">
                  <input
                    type="date"
                    className="date_input"
                    style={{ marginTop: "2px" }}
                  />
                </div>
                <div className="m_top">
                  <input
                    type="date"
                    className="date_input"
                    style={{ marginTop: "2px" }}
                  />
                </div>
                <div className="m_top ">
                  <input
                    type="search"
                    placeholder="Search"
                    className="search_bar"
                    style={{ marginTop: "2px" }}
                  />
                </div>
              </div>
            </Box>
            {/* ************************ */}
            <div>
              <table className="boxTable" style={{ marginTop: "20px" }}>
                <tr>
                  <th>Date</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Hours</th>
                  <th>Status</th>
                </tr>
                {records.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d.Date}</td>
                      <td>{d.Check}</td>
                      <td>{d.out}</td>
                      <td>{d.Hours}</td>
                      <td>
                        {" "}
                        <img src={PNG.STATUS} alt="active" />
                      </td>
                    </tr>
                  );
                })}
              </table>
              <div className="d-flex j-spacebtwn margin_top_10 footer_content">
                <div>Showing 1 to 6 of 60 entries</div>

                <div>
                  <button className="display">
                    <button className="next_btn" onClick={prevPage}>
                      Previous
                    </button>
                    {numbers.map((n, i) => {
                      return (
                        <li
                          key={i}
                          className="previous_btn"
                          style={{ textDecoration: "none" }}
                        >
                          <a href="#" onClick={() => changeCPage(n)}>
                            {" "}
                            {n}
                          </a>
                        </li>
                      );
                    })}

                    <button className="next_btn" onClick={nextPage}>
                      Next
                    </button>
                  </button>
                </div>
              </div>
              <nav></nav>
            </div>
          </div>
        </Grid>
      </Box>
    </Container>
  );
}
