import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import FormNav from "./FormGroup";
import { Button } from "@mui/material";
import Dummynav from '../dummynav'
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useState,useEffect } from "react";
import axios from "axios";
const Forms = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  const navigate =useNavigate();
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
  
  const [coursename, setcoursename] = useState('')
  const [year, setyear] = useState('')
  const [Degree, setDegree] = useState('')
  const [institutionname, setinstitutionname] = useState('')
  const [boardname, setboardname] = useState('')
  const [marks, setmarks] = useState('')


  
  const [dob_pdf, setdob_pdf] = useState('')
  const [address_pdf, setaddress_pdf] = useState('')
  const [collage_request_letter, setcollage_request_letter] = useState('')
  // const[createdby,setcreatedby]=useState('')
  // const[createddate,setcreateddate]=useState('')
  // const[updatedby,setupdatedby]=useState('')
  // const[updatedon,setupdatedon]=useState('')
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/Chartdatatable/').then(res => {
      console.log("Getting from::::", res.data)
      setdata(res.data)

    }).catch(err => console.log(err, "error"))
    console.log('test applied')
  }, [])

  const postData = (e) => {
    console.log( name, dob_pdf, address_pdf, collage_request_letter)

    var bodyFormData = new FormData();
    bodyFormData.append('name', name);
    bodyFormData.append('fathername', fathername);
    bodyFormData.append('dob', dob);
    bodyFormData.append('statecode', statecode);
    bodyFormData.append('districtcode', districtcode);
    bodyFormData.append('sector', sector);
    bodyFormData.append('mobile', mobile);
    bodyFormData.append('isactive', isactive);

    bodyFormData.append('coursename', coursename);
    bodyFormData.append('year', year);
    bodyFormData.append('Degree', Degree);
    bodyFormData.append('institutionname', institutionname);
    bodyFormData.append('boardname', boardname);
    bodyFormData.append('institutionname', institutionname);
    bodyFormData.append('marks', marks);

    bodyFormData.append('dob_pdf', dob_pdf);
    bodyFormData.append('address_pdf', address_pdf);
    bodyFormData.append('collage_request_letter', collage_request_letter)
    
    e.preventDefault();
    axios({
        method: "post",
        url: "http://127.0.0.1:8000/Chartdatatable/",
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data"
        },
    }).then(function (response) {
        console.log(response)
    }).catch(function (response) {
        console.log(response);
    })
    // window.location.reload(false);
}
// const handleDateChange = (date) => {
//     setState({ ...state, date })
// }

  return (

    <Row>
      <Col>
        <Card>
          <CardTitle tag="h5" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            New Trainee Registration Form
          </CardTitle>
          <CardBody>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <FormGroup>
              </FormGroup>
                <Row>
                  <Col md="6" lg="6">
            <FormGroup>
                <Label for="examplePassword">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter your Name"
                  onChange={(e)=>setname(e.target.value)}
                  type="text"
                  required
                />
              </FormGroup>
              </Col>
              <Col md="6" lg="6">
              <FormGroup>
                <Label for="examplePassword">FatherName</Label>
                <Input
                  id="fathername"
                  name="fathername"
                  value={fathername}
                  placeholder="Enter your Fathername"
                  type="text"
                  onChange={(e)=>setfathername(e.target.value)}
                  required
                />
              </FormGroup>
              </Col>
              </Row>
              <Row>
                <Col lg="6" sm="6">
              <FormGroup>
                <Label for="examplePassword">Date-Of-Birth</Label>
                <Input
                  id="date"
                  name="date"
                  placeholder="Enter your DOB"
                  type="date"
                  value={dob}
                  onChange={(e)=>setdob(e.target.value)}
                  required
                />
              </FormGroup>
              </Col>
              <Col lg="6" sm="6">
              <FormGroup>
                <Label for="examplePassword">MobileNo</Label>
                <Input
                  id="mobileno"
                  name="mobileno"
                  value={mobile}
                  placeholder="Enter your Mobileno"
                  type="text"
                  onChange={(e)=>setmobile(e.target.value)}
                  required
                />
              </FormGroup>
              </Col>
              </Row>
              <Row>
                <Col lg="6" sm="12">
              <FormGroup>
                <Label for="examplePassword">StateCode</Label>
                <Input
                  id="statecode"
                  name="statecode"
                  placeholder="Enter your StateCode"
                  type="text"
                  value={statecode}
                  onChange={(e)=>setstatecode(e.target.value)}
                  required
                />
              </FormGroup>
              </Col>
              <Col lg="6" sm="12">
              <FormGroup>
                <Label for="examplePassword">DistrictCode</Label>
                <Input
                  id="districtcode"
                  name="districtcode"
                  value={districtcode}
                  placeholder="Enter your DistrictCode"
                  type="text"
                  onChange={(e)=>setdistrictcode(e.target.value)}
                  required
                />
              </FormGroup>
              </Col>
              </Row>
              <Row>
                <Col sm="12" lg="6">
              <FormGroup>
                <Label for="examplePassword">Enter Your Email</Label>
                <Input
                  id="email"
                  name="emailid"
                  placeholder="Enter your EmailID"
                  type="email"
                  value={emailid}
                  onChange={(e)=>setemailid(e.target.value)}
                  required
                />
              </FormGroup>
              </Col>
              <Col sm="12" lg="6">
              <FormGroup>
                <Label for="examplePassword">Sector</Label>
                <Input
                  id="sector"
                  name="sector"
                  value={sector}
                  placeholder="Enter your Sector"
                  type="text"
                  onChange={(e)=>setsector(e.target.value)}
                  required
                />
              </FormGroup>
              </Col>
              </Row>
              <Row>
                <Col sm="12" lg="6">
              <FormGroup>
                <Label for="exampleSelect">Is Active</Label>
                <Input id="exampleSelect" name="select" type="select" value={isactive} 
                  onChange={(e)=>setisactive(e.target.value)} 
                  required
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Input>
              </FormGroup>
              </Col>
              <Col sm="12" lg="6">
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input id="gender" name="gender" type="select" value={gender}
                  onChange={(e)=>setgender(e.target.value)}  
                  required           
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </Input>
              </FormGroup>
              </Col>
              </Row>

              <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Education Details
            </CardTitle>
            <CardBody>
              <Form>
                <Row>
                  <Col sm="12" lg="6">
                <FormGroup>
                  <Label for="exampleEmail">CourseName</Label>
                  <Input
                    id="coursename"
                    name="coursename"
                    placeholder="Enter Your CourseName"
                    value={coursename}
                    onChange={(e) => setcoursename(e.target.value)}
                    type="text"
                    required
                  />
                </FormGroup>
                </Col>
                <Col sm="12" lg="6">
                <FormGroup>
                  <Label for="exampleEmail">Year</Label>
                  <Input
                    id="year"
                    name="year"
                    placeholder="Enter Your Year"
                    value={year}
                    onChange={(e) => setyear(e.target.value)}
                    type="text"
                    required
                  />
                </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col sm="12" lg="6">
                <FormGroup>
                  <Label for="exampleEmail">InstitutionName</Label>
                  <Input
                    id="institutionname"
                    name="institutionname"
                    placeholder="Enter Your InstitutionName"
                    value={institutionname}
                    onChange={(e) => setinstitutionname(e.target.value)}
                    type="text"
                    required
                  />
                </FormGroup>
                </Col>
                <Col sm="12" lg="6">
                <FormGroup>
                  <Label for="exampleEmail">BoardName</Label>
                  <Input
                    id="boardname"
                    name="boardname"
                    value={boardname}
                    onChange={(e) => setboardname(e.target.value)}
                    placeholder="Enter Your BoardName"
                    type="text"
                    required
                  />
                </FormGroup>
                </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleEmail">Marks(*CGPA or Grade)</Label>
                  <Input
                    id="marks"
                    name="marks"
                    value={marks}
                    onChange={(e) => setmarks(e.target.value)}
                    placeholder="Enter Your Marks"
                    type="text"
                    required
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>


          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Upload Your Documents
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  <Input
                    id="exampleEmail"
                    name="name"
                    placeholder="Enter Your Name"
                    type="text"
                    value={name} onChange={(e) => setname(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">Upload your DOB_Certificate(* PDF formant)</Label>
                  <Input id="exampleFile" name="file" type="file" onChange={(e) => setdob_pdf(e.target.files[0])} required/>
                  <FormText>
                    Note:- please upload your document only PDF(*) format.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">Upload your Address_Proof(* PDF formant)</Label>
                  <Input id="exampleFile" name="file" type="file" onChange={(e) => setaddress_pdf(e.target.files[0])} required/>
                  <FormText>
                  Note:- please upload your document only PDF(*) format.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">Upload your Collage_request_letter(* PDF formant)</Label>
                  <Input id="exampleFile" name="file" type="file" onChange={(e) => setcollage_request_letter(e.target.files[0])} required/>
                  <FormText>
                  Note:- please upload your document only PDF(*) format.
                  </FormText>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
              <FormGroup check>
                <Input type="checkbox" required /> <Label check>I have read all the terms & condition</Label>
              </FormGroup> 
              {/* <Button style={{backgroundColor: "blue",color:"white"}} className="m-2" component={Link} to="/forms" >Prev</Button> */}
              <Button type="submit" style={{backgroundColor: "Blue",color:"white",paddingLeft:"20px",paddingRight:"20px"}} onClick={postData}>Submit</Button>
              {/* <Button component={Link} to="/forms2" className="m-2" style={{backgroundColor: "blue",color:"white"}}>Reset</Button> */}
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
