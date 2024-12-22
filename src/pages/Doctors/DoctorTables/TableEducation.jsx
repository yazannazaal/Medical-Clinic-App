import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createEducationData(year, degree, institute) {
  return { year, degree, institute };
}

const rows = [
  createEducationData("2015", "High School Diploma", "Springfield High School"),
  createEducationData(
    "2019",
    "Bachelor's in Computer Science",
    "State University"
  ),
  createEducationData(
    "2021",
    "Master's in Software Engineering",
    "Tech University"
  ),
];

export default function EducationTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="education table">
        <TableHead>
          <TableRow className="bg-blue-200">
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
            >
              Year
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              align="left"
            >
              Degree
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              align="left"
            >
              Institute
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              className={index % 2 === 1 ? "bg-blue-200" : "bg-white"}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.year}
              </TableCell>
              <TableCell align="left">{row.degree}</TableCell>
              <TableCell align="left">{row.institute}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
