
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createExperienceData(year, department, position, hospital) {
  return { year, department, position, hospital };
}


const rows = [
  createExperienceData('2018', 'Cardiology', 'Junior Doctor', 'City Hospital'),
  createExperienceData('2020', 'Neurology', 'Resident Doctor', 'State Medical Center'),
  createExperienceData('2023', 'Pediatrics', 'Consultant', 'Childrens Hospital'),
];

export default function ExperiencedTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="experience table">
        <TableHead>
          <TableRow className="bg-blue-200">
            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>Year</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }} align="left">
              Department
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }} align="left">
              Position
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }} align="left">
              Hospital
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              className={
                index % 2 === 1 
                  ? 'bg-blue-200'
                  : 'bg-white'
              }
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#333' }}
              >
                {row.year}
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#333' }}
              >
                {row.department}
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#333' }}
              >
                {row.position}
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#333' }}
              >
                {row.hospital}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
