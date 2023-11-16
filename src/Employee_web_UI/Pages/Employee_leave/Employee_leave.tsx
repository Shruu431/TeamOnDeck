import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import "./Employee_Leave.css";
import { PNG } from "../../../Assets";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { InputBase } from "@mui/material";
import Data from "./Data.json";
import { Container } from "../Container";
import { EmployeeLeaveModal } from "../../Components";
import { LeaveRequestModal } from "../../Components/LeaveRequestModal/LeaveRequestModal";
import { useLeaveModal } from "../../Context/leaveModalContext";
interface InputWrapperProps {
  children?: any;
  // onleaveModal: boolean;
  // setOnLeaveModal:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Employee_leave({ children }: InputWrapperProps) {
  const [applyleaveModal, setApplyLeaveModal] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const { setleaveModal ,leaveModal} = useLeaveModal();

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
      {applyleaveModal ? (
        <LeaveRequestModal
          setApplyLeaveModal={setApplyLeaveModal}
          applyleaveModal={applyleaveModal}
        />
      ) : null}
      { leaveModal? (
        <EmployeeLeaveModal
          // setOnLeaveModal={setOnLeaveModal}
          // onleaveModal={onleaveModal}
        />
      ) : null}
      <Box className="pagebody">
        <Grid item className="main" lg={12} xs={12} sm={12}>
          <Grid item lg={12} xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="attendance">Leaves</p>
              <button
                className="apply_btn "
                data-testid="ApplyLeaveBtn"
                onClick={() => setApplyLeaveModal(!applyleaveModal)}
              >
                Apply Leave
              </button>
            </div>
          </Grid>

          <Grid
            container
            lg={12}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "0.1px",
            }}
          >
            <Grid item lg={3} xs={12} sm={12} md={3} className="box1">
              <div className="box1-content " style={{ background: "white" }}>
                <div className="pending">Pending Leave Request</div>
                <div>
                  <Box className="box2-content checkoutButton_color btn">
                    15 April
                  </Box>{" "}
                </div>
              </div>
            </Grid>

            <Grid item lg={3} xs={12} sm={12} md={3} className="box1">
              <div className="box1-content " style={{ background: "white" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="pending" >
                    On Leave
                  </div>
                  <div className="current_time" onClick={() => setleaveModal(true)}>5 Employee On Leave</div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div>
                    <Box className="box2-content checkoutButton_color btn">
                      <img src={PNG.PROFILE} />{" "}
                    </Box>{" "}
                  </div>
                  <div>
                    <Box className="box2-content checkoutButton_color btn">
                      <img src={PNG.PROFILE} />{" "}
                    </Box>{" "}
                  </div>
                  <div>
                    <Box className="box2-content checkoutButton_color btn">
                      <img src={PNG.PROFILE} />{" "}
                    </Box>{" "}
                  </div>
                  <div>
                    <Box
                      className="box2-content checkoutButton_color btn"
                      style={{ backgroundColor: "grey" }}
                    >
                      +2
                    </Box>{" "}
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={3} xs={12} sm={12} md={3} className="box1">
              <div className="box1-content " style={{ background: "white" }}>
                <div className="pending"> Monthly Pattern</div>

                <Grid
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginTop: "15px",
                    justifyContent: "space-evenly",
                  }}
                  spacing={2}
                >
                  <div style={{ marginLeft: "5px" }}>
                    <div className="jan_box"></div>
                    <p style={{ display: "flex" }} className="font_blue">
                      Jan
                    </p>
                  </div>

                  <div style={{ marginLeft: "10px", display: "column" }}>
                    <Box className="leavecount_box">
                      <p className="font_grey">4 Leaves</p>
                    </Box>

                    <div className="feb_box"></div>
                    <p style={{ display: "flex" }} className="font_blue">
                      Feb
                    </p>
                  </div>

                  <div style={{ marginLeft: "5px" }}>
                    <div className="march_box"></div>
                    <p style={{ display: "flex" }} className="font_blue">
                      March
                    </p>
                  </div>

                  <div style={{ marginLeft: "10px" }}>
                    <div className="april_box"></div>
                    <p style={{ display: "flex" }} className="font_grey">
                      April
                    </p>
                  </div>

                  <div style={{ marginLeft: "10px" }}>
                    <div className="may_box"></div>
                    <p style={{ display: "flex" }} className="font_grey">
                      May
                    </p>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>

          <div className="table_box">
            <div>
              <p className="attendance">Leaves Summery</p>
            </div>

            {/* <Grid
              container
              lg={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Grid lg={12} xs={12} sm={12} md={12}> */}
            <div className="table_nav">
              <div className="display table_caption">
                <p>Show</p>
                <select className="dropdown margin_left_10">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
                <p className="margin_left_5">entries</p>
              </div>
              <div>
                <InputBase
                  placeholder="search"
                  inputProps={{ "aria-label": "search" }}
                  startAdornment={
                    <SearchSharpIcon
                      style={{ color: "grey", marginLeft: "5px" }}
                    />
                  }
                  className="search_bars"
                />
              </div>
            </div>
            {/* </Grid>
            </Grid> */}

            {/* ************************ */}
            <div>
              <table className="boxtable" style={{ marginTop: "20px" }}>
                <tr>
                  <th>Leave Date</th>
                  <th>Leave Type</th>
                  <th>Request Date</th>
                  <th>Leave Note</th>
                  <th>Status</th>
                </tr>

                {records.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d.Leave_Date}</td>
                      <td>{d.Leave_Type}</td>
                      <td>{d.Request_Date}</td>
                      <td>{d.Leave_Note}</td>
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
            </div>
          </div>
        </Grid>
      </Box>
    </Container>
  );
}
