import { Box, Typography, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { DatePicker} from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "./LeaveRequestModal.css"
import dayjs,{Dayjs} from "dayjs";
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { formattedDate } from "../../Pages/DashBoard/DashBoard";
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { useLeaveRequestModal } from "../../Context/leaverequestmodalcontext";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

type LeaveRequestModalType = {
  setApplyLeaveModal:React.Dispatch<React.SetStateAction<boolean>>;
  applyleaveModal: boolean;
};

dayjs.extend(LocalizedFormat);
const dateFormate = dayjs().format('ll');
console.log(dateFormate, typeof dayjs('2022-04-17'),'da');

const LeaveRequestModal = ({setApplyLeaveModal,applyleaveModal}:LeaveRequestModalType) => {
  const { setleaveRequestModal } = useLeaveRequestModal();

  console.log(typeof formattedDate,'date')
  const [datePickerState, setdatePickerState] = useState<Dayjs | null>(dayjs());
  return (
    <Box className="backDrop" onClick={() => setApplyLeaveModal(false)}>

      <Box
        className=" leaveModal"
        onClick={(e) => e.stopPropagation()}
      >
        <Box className="headCrossIcon">
          <Typography variant="h6" className="fontWeight">
            Leave Request
          </Typography>
          <CloseOutlinedIcon
            className="icon cursorPointer"
            onClick={() => setApplyLeaveModal(false)}
          />
        </Box>
        <Stack direction="row" spacing={0.5}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>

          <DatePicker value={dayjs('Feb-01-2021',"MMM-DD-YYYY")}  onChange={(newValue) => console.log(newValue,'ad')}/>
          <DatePicker />
          </ LocalizationProvider >
        </Stack>
    <Box className="display">

        <Typography className="fontweight">
          Reaquest for half day leave
        </Typography>

        <Switch {...label}  />   
          
    </Box>

    <select className="select"> 
      <option>Casual Leave</option>
      <option>Half Day Leave</option>
    </select>
     
        <textarea className="description"   rows = {6}>
          Description
        </textarea>
        <Box>

        <IconButton
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <AddIcon className="addicon"/>
          <Typography className="addImage">

          Add Image
          </Typography>
        </IconButton>  
            </Box>


        <Box className="button_container">

            <Button variant="contained"  className="button">Submit</Button>
        </Box>

        </Box>


    </Box>
  );
};

export {LeaveRequestModal}