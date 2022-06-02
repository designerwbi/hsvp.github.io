import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody, Col, CardText } from "reactstrap";
import ContactsIcon from '@mui/icons-material/Contacts';
import VisibilityIcon from '@material-ui/icons/Visibility';
// import Rating from 'material-ui-rating'
import { Stack, Rating } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// Import styles
import axios from "axios";

// Create new plugin instance
const useStyles = makeStyles({
    stuListColor: {
        backgroundColor: "#f0f8ff",
        color: "#000000"
    },
    tableHeadCell: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 16
    },
});
const View = () => {


    // creating new plugin instance

    // pdf file onChange state
    const [pdfFile, setPdfFile] = useState(null);

    // pdf file error state
    const [pdfError, setPdfError] = useState('');



    const classes = useStyles();
    const { Rowid } = useParams();
    const [student, setStudent] = useState([]);
    const [stuCollage, setStuCollage] = useState([]);
    const [stupdf, setStuPdf] = useState([]);
    const history = useNavigate();
    // Collage Rating ----------------------
    const [qualificationrating, setqualificationrating] = useState('');
    const [certificaterating, setcertificaterating] = useState('');
    const [courserating, setcourserating] = useState('');
    const [collagerating, setcollagerating] = useState('');
    const [traineeid, settraineeid] = useState(Rowid);
    const [hire, sethire] = useState('');

    //   ----------------------------------------------
    const [data, setdata] = useState([])
    const [name, setname] = useState('')
    const [fathername, setfathername] = useState('')
    const [dob, setdob] = useState('')
    const [statecode, setstatecode] = useState('')
    const [districtcode, setdistrictcode] = useState('')
    const [sector, setsector] = useState('')
    const [mobile, setmobile] = useState('')
    const [emailid, setemailid] = useState('')
    const [gender, setgender] = useState('')
    const [address, setaddress] = useState('')
    const [isactive, setisactive] = useState('')

    // Rating
    //--------------------------First Form data API------------------------------------
    useEffect(() => {
        async function getStudent() {
            try {
                const student = await axios.get(`http://127.0.0.1:8000/Chartdatatable/${Rowid}`)
                console.log(student.data);
                console.log()
                setStudent(student.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getStudent();
    }, [Rowid])
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/Chartdatatable/').then(res => {
    //       console.log("Getting from::::", res.data)
    //       setdata(res.data)

    //     }).catch(err => console.log(err, "error"))
    //     console.log('test applied')
    //   }, [])
    //  -------------------------------------------------------------------------------
    function handleClick() {
        history.push("/starter")
    }

    // const postReview = (e) => {
    //     console.log(qualificationrating);
    //     console.log(collagerating);
    //     console.log(certificaterating);
    //     console.log(courserating);
    //     e.preventDefault();
    //     axios.put(`http://127.0.0.1:8000/Chartdatatable/${Rowid}/`, {
    //       qualificationrating,
    //       certificaterating,
    //       courserating,
    //       collagerating,
    //     }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
    // window.location.reload(false);
    //   }

    const postReview = (e) => {
        console.log(qualificationrating);
        console.log(collagerating);
        console.log(certificaterating);
        console.log(courserating);
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/ratetable/${Rowid}/`, {
            qualificationrating,
            collagerating,
            certificaterating,
            courserating,
            traineeid
        }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
        // window.location.reload(false);
    }
    const studentRating = [qualificationrating, collagerating, certificaterating, courserating];
    studentRating.map((key) => {
        console.log(key)
    })
    return (
        <>
            <Card>

                <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center">
                    <ContactsIcon />
                    {student.name}'s Details
                </CardTitle>
                <CardBody className="">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow style={{ backgroundColor: "#f0f8ff" }}>
                                    <TableCell align="center" className={classes.tableHeadCell}>RowID</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>ReferenceNo</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>FatherName</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>Date-Of-Birth</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>StateCode</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>DistrictCode</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>Sector</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>Mobile</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>EmailID</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>Gender</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>Address</TableCell>
                                    <TableCell align="center" className={classes.tableHeadCell}>Active Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">{student.Rowid}</TableCell>
                                    <TableCell align="center">{student.ReferenceNo}</TableCell>
                                    <TableCell align="center">{student.name}</TableCell>
                                    <TableCell align="center">{student.fathername}</TableCell>
                                    <TableCell align="center">{student.dob}</TableCell>
                                    <TableCell align="center">{student.statecode}</TableCell>
                                    <TableCell align="center">{student.districtcode}</TableCell>
                                    <TableCell align="center">{student.sector}</TableCell>
                                    <TableCell align="center">{student.mobile}</TableCell>
                                    <TableCell align="center">{student.emailid}</TableCell>
                                    <TableCell align="center">{student.gender}</TableCell>
                                    <TableCell align="center">{student.address}</TableCell>
                                    <TableCell align="center">{student.isactive}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "#f0f8ff" }}>
                                        <TableCell align="center" className={classes.tableHeadCell}>CourseName</TableCell>
                                        <TableCell align="center" className={classes.tableHeadCell}>Year</TableCell>
                                        <TableCell align="center" className={classes.tableHeadCell}>InstitutionName</TableCell>
                                        <TableCell align="center" className={classes.tableHeadCell}>University</TableCell>
                                        <TableCell align="center" className={classes.tableHeadCell}>Marks</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">{student.coursename}</TableCell>
                                        <TableCell align="center">{student.year}</TableCell>
                                        <TableCell align="center">{student.institutionname}</TableCell>
                                        <TableCell align="center">{student.boardname}</TableCell>
                                        <TableCell align="center">{student.marks}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "#f0f8ff" }}>
                                        <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                                        <TableCell align="center" className={classes.tableHeadCell}>DateOfBirth Certificate</TableCell>
                                        <TableCell align="center" className={classes.tableHeadCell}>Address Proff</TableCell>
                                        <TableCell align="center" className={classes.tableHeadCell}>CollageRequestLetter</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">{student.name}</TableCell>
                                        <TableCell align="center">
                                            <Button type="submit">
                                                <VisibilityIcon color="primary" />
                                                <a href={student.dob_pdf} style={{ backgroundColor: "#0693e3", color: "white", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}
                                                    download
                                                >View</a></Button>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button type="submit">
                                                <VisibilityIcon color="primary" />
                                                <a href={student.address_pdf} style={{ backgroundColor: "#0693e3", color: "white", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}
                                                    download
                                                >View</a></Button>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button type="submit">
                                                <VisibilityIcon color="primary" />
                                                <a href={student.collage_request_letter} style={{ backgroundColor: "#0693e3", color: "white", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}
                                                    download
                                                >View</a></Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TableContainer>
                    <Box m={3} textAlign="center">
                        <div class="row">
                            <Col md="6" lg="12">
                                <Card body style={{ backgroundColor: "#f0f8ff", color: "#000", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}>
                                    <CardTitle tag="h5">Note:- Your Ratings Helps to Hire Trainees, Please View all the Details and then Submit.</CardTitle>
                                    <CardText>
                                    </CardText>
                                </Card>
                            </Col>
                            <Col md="6" lg="6">
                                <Card body style={{ backgroundColor: "#f0f8ff", color: "#000", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}>
                                    <CardTitle tag="h5">Qualification Detail Ratings</CardTitle>
                                    <CardText>
                                        <Stack spacing={5} style={{ marginLeft: "180px" }}>
                                            <Rating max={10} value={qualificationrating} onChange={((e) => setqualificationrating(e.target.value))} />
                                        </Stack>
                                    </CardText>
                                </Card>
                            </Col>
                            <Col md="6" lg="6">
                                <Card body style={{ backgroundColor: "#f0f8ff", color: "#000", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}>
                                    <CardTitle tag="h5">Collage Ratings</CardTitle>
                                    <CardText>
                                        <Stack spacing={5} style={{ marginLeft: "180px" }}>
                                            <Rating max={10} value={collagerating} onChange={((e) => setcollagerating(e.target.value))} />
                                        </Stack>
                                    </CardText>
                                </Card>
                            </Col>
                            <Col md="6" lg="6">
                                <Card body style={{ backgroundColor: "#f0f8ff", color: "#000", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}>
                                    <CardTitle tag="h5">Extra Co-Certificates Ratings</CardTitle>
                                    <CardText>
                                        <Stack spacing={5} style={{ marginLeft: "180px" }}>
                                            <Rating max={10} value={certificaterating} onChange={((e) => setcertificaterating(e.target.value))} />
                                        </Stack>
                                    </CardText>
                                </Card>
                            </Col>
                            <Col md="6" lg="6">
                                <Card body style={{ backgroundColor: "#f0f8ff", color: "#000", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}>
                                    <CardTitle tag="h5">Extra Course Ratings</CardTitle>
                                    <CardText>
                                        <Stack spacing={5} style={{ marginLeft: "180px" }}>
                                            <Rating max={10} value={courserating} onChange={((e) => setcourserating(e.target.value))} />
                                        </Stack>
                                    </CardText>
                                </Card>
                            </Col>
                        </div>
                    </Box>
                </CardBody>
            </Card>

            <Box m={3} textAlign="center">
                <Button variant="contained" color="primary"
                    onClick={postReview}
                >Submit Review</Button>
            </Box>
        </>
    )
}

export default View