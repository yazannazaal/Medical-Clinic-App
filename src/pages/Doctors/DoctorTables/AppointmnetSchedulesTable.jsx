import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const AppointmentButton = styled(Button)(({ theme }) => ({
  color: "blue",
  border: "1px solid blue",
  textTransform: "none",
  "&:hover": {
    color: "white",
    backgroundColor: "blue",
  },
}));

function createScheduleData(day, time) {
  return { day, time };
}

const rows = [
  createScheduleData("Saturday", "10.00 am - 12.00 pm"),
  createScheduleData("Monday", "05.00 pm - 09.00 pm"),
  createScheduleData("Wednesday", "07.00 pm - 10.00 pm"),
  createScheduleData("Friday", "08.00 pm - 11.00 pm"),
];

export default function AppointmnetSchedulesTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="schedule table">
        <TableHead>
          <TableRow className="bg-blue-200 ">
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
            >
              Day
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              align="left"
            >
              Time
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              align="center"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              className={index % 2 === 1 ? "bg-blue-200" : "bg-white"}
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="center">
                <AppointmentButton variant="outlined">
                  Appointment
                </AppointmentButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
