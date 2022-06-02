import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card,CardTitle,CardBody } from "reactstrap";
const useStyles = makeStyles({
 stuListColor: {
  backgroundColor:"#2196F3",
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
})

const List = () => {
 const classes = useStyles();
 const [students, setStudents] = useState([]);

 useEffect(() => {
  async function getAllStudent() {
   try {
    const students = await axios.get("http://127.0.0.1:8000/Chartdatatable/")
    // console.log(students.data);
    setStudents(students.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getAllStudent();
 }, [])

 const handleDelete = async Rowid => {
  await axios.delete(`http://127.0.0.1:8000/Chartdatatable/${Rowid}`);
  var newstudent = students.filter((item) => {
   // console.log(item);
   return item.Rowid !== Rowid;
  })
  setStudents(newstudent);
 }
// const handleDateChange = (date) => {
//     setState({ ...state, date })
// }





 return (
  <>
   <Card>
            <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center">
            Final Trainees List
            </CardTitle>
            <CardBody className="">
            <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#2196F3" }}>
       <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>ReferenceNo</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Status</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {
       students.map((student, Rowid) => {
        return (
         <TableRow key={Rowid}>
          <TableCell align="center">{student.Rowid}</TableCell>
          <TableCell align="center">{student.ReferenceNo}</TableCell>
          <TableCell align="center">{student.name}</TableCell>
          <TableCell align="center">{student.emailid}</TableCell>
          <TableCell align="center">{student.isactive}</TableCell>
          <TableCell align="center">
           <Tooltip title="View">
            <IconButton><Link to={`/print/${student.Rowid}`}><VisibilityIcon color="primary" /></Link></IconButton>
           </Tooltip>
           {/* <Tooltip title="Edit">
            <IconButton><Link to={`/edit/${student.Rowid}`}><EditIcon /></Link></IconButton>
           </Tooltip> */}
           {/* <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(student.Rowid)}><DeleteIcon color="secondary" /></IconButton>
           </Tooltip> */}
          </TableCell>
         </TableRow>
        )
       })
      }

     </TableBody>
    </Table>
   </TableContainer>           
            </CardBody>
          </Card>
  </>
 )
}

export default List





