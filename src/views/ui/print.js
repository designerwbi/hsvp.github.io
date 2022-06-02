import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardTitle, CardBody, Col, CardText, Row } from "reactstrap";
import Link from 'react-router-dom'
import ContactsIcon from '@mui/icons-material/Contacts';
import VisibilityIcon from '@material-ui/icons/Visibility';
// import Rating from 'material-ui-rating'
import { Stack, Rating } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HudaLogo from '../../assets/images/bg/bnav.png';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import "./print.css"

import ReactToPrint from 'react-to-print';

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
    const { traineeid } = useParams();
    const [student, setStudent] = useState([]);
    const [stuCollage, setStuCollage] = useState([]);
    const [stupdf, setStuPdf] = useState([]);
    const history = useNavigate();
    const [hire, sethire] = useState('');


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
    const componentRef = useRef();
    //   const [qualificationrating, setqualificationrating] = useState('');
    //   const [certificaterating, setcertificaterating] = useState('');
    //   const [courserating, setcourserating] = useState('');
    //   const [collagerating, setcollagerating] = useState('');
    //--------------------------First Form data API------------------------------------
    useEffect(() => {
        async function getStudent() {
            try {
                const student = await axios.get(`http://127.0.0.1:8000/Chartdatatable/${Rowid}`)
                setStudent(student.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getStudent();
    }, [Rowid])
    //    ------------------------------------------------------------------------------------
    function handleClick() {
        history.push("/starter")
    }
    return (
        <>
            <Card>
                <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center">
                    <img src={HudaLogo} alt="Logo" width="180px" />
                </CardTitle>
                <CardBody className="">

                    <h6 style={{ width: '100%', border: '1px solid #1273de', color: '#000000', padding: '10px', borderRadius: '5px' }}>
                        <SpeakerNotesIcon style={{ color: '#1273de', marginRight: '10px' }} />
                        NOTE: Your Final Application form is Displayed Here.Take Print of this.</h6>
                    <div style={{ width: '100%' }}>

                            <div className="form-head">
                                <h4>Personal Detail's</h4>
                                <Row>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Full name of the Applicant :-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.name}</h6>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Father-Name :-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.fathername}</h6>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Date of Birth :-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.dob}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Gender
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.gender}</h6>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Active
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.isactive}</h6>
                                    </Col>
                                </Row>
                                <h4>Contact Detail's</h4>
                                <Row>

                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Mobile No :-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.mobile}</h6>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Email Address :-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.emailid}</h6>
                                    </Col>
                                </Row>
                                <h4>Address Detail's</h4>
                                <Row>

                                    <Col md="12">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Complete Address
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.address}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            StateCode :-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.statecode}</h6>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            District Code :-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.districtcode}</h6>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Sector:-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.sector}</h6>
                                    </Col>
                                </Row>
                                <h4>Academic Detail's</h4>
                                <Row>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            CourseName
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.coursename}</h6>
                                    </Col>
                                    <Col md="4">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Academic Year
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.year}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Institution Name :-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.institutionname}</h6>
                                    </Col>
                                    <Col md="6">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            University :-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.boardname}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <div className="mb-2 mt-2" style={{ fontWeight: '800', color: 'gray' }}>
                                            Marks(In Grade Or Percentage):-
                                        </div>
                                        <h6 style={{ fontWeight: '800', color: '#000000' }}>{student.marks}</h6>
                                    </Col>
                                </Row>
                                <h4>Skills Ratings</h4>
                                <Row>
                                    <Col md="4">
                                        <Card body style={{ backgroundColor: "#f0f8ff", color: "#000", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}>
                                            <CardTitle tag="h5" text-center>Qualification Detail Review</CardTitle>
                                            <CardText>
                                                <Stack spacing={5}>
                                                    <Rating max={10} value={student.collagerating || ''} disabled={true} />
                                                </Stack>
                                                <h6>
                                                    {student.collagerating || ''}/10
                                                </h6>
                                            </CardText>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card body style={{ backgroundColor: "#f0f8ff", color: "#000", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}>
                                            <CardTitle tag="h5">Collage Review</CardTitle>
                                            <CardText>
                                                <Stack spacing={5}>
                                                    <Rating max={10} value={student.collagerating || ''} disabled={true} />
                                                </Stack>
                                                <h6>{student.collagerating || ''}/10</h6>
                                            </CardText>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <Card body style={{ backgroundColor: "#f0f8ff", color: "#000", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}>
                                            <CardTitle tag="h5">Extra Co-Certificates Review</CardTitle>
                                            <CardText>
                                                <Stack spacing={5}>
                                                    <Rating max={10} value={student.certificaterating || ''} disabled={true} />
                                                </Stack>
                                                <h6>{student.certificaterating || ''}/10</h6>
                                            </CardText>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card body style={{ backgroundColor: "#f0f8ff", color: "#000", textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }}>
                                            <CardTitle tag="h5">Extra Course Review</CardTitle>
                                            <CardText>
                                                <Stack spacing={5}>
                                                    <Rating max={10} value={student.courserating || ''} disabled={true} />
                                                </Stack>
                                                <h6>{student.courserating || ''}/10</h6>
                                            </CardText>
                                        </Card>
                                    </Col>
                                </Row>
                                <h4>Recommandation</h4>
                                <Row>
                                    <Col>
                                        {/* <h5>Candidate Selection:- {student.hire}</h5> */}
                                        <TextField id="standard-basic" variant="standard" value={student.hire} disabled={true} />
                                    </Col>
                                </Row>
                            </div>
                    </div>

                </CardBody>
            </Card>

            <Box m={3} textAlign="center">
                <Button variant="contained" color="primary" onClick={() => window.print()}>Print</Button>
                <div>
                    {/* <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} /> */}
                </div>
            </Box>
        </>
    )
};
export default View
