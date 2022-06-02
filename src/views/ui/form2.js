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
  } from "reactstrap";
  import { Button } from "@mui/material";
  import { Link } from "react-router-dom";
  import './Form.css'
  import axios from 'axios'
  import { useState,useEffect } from "react";
  const Forms = () => {
    const [data, setdata] = useState([])

    // -----------------------------------------------
    const [ReferenceNo, setreferenceno] = useState('')
    const [coursename, setcoursename] = useState('')
    const [year, setyear] = useState('')
    const [Degree, setDegree] = useState('')
    const [institutionname, setinstitutionname] = useState('')
    const [boardname, setboardname] = useState('')
    const [marks, setmarks] = useState('')
    // const[createdby,setcreatedby]=useState('')
    // const[createddate,setcreateddate]=useState('')
    // const[updatedby,setupdatedby]=useState('')
    // const[updatedon,setupdatedon]=useState('')
  
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/Education_table/').then(res => {
        console.log("Getting from::::", res.data)
        setdata(res.data)
  
      }).catch(err => console.log(err, "error"))
      console.log('test applied')
    }, [])
  
  // const resetform = (data,onSubmitProps)=>{
  //   onSubmitProps.setdata(false)
  //   onSubmitProps.resetForm()
  // }
   
  function refreshPage() {
    window.location.reload(false);
  }
    const postData = (e) => {
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/Education_table/', {
        ReferenceNo,
        coursename,
        year,
        Degree,
        institutionname,
        boardname,
        marks,
      }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
    window.location.reload(false);
    }
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Education Details
            </CardTitle>
            <CardBody>
              <Form>
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
                <Button style={{backgroundColor: "blue",color:"white"}} component={Link} to="/forms" className="m-2">Prev</Button>
                <Button style={{backgroundColor: "blue",color:"white"}} className="m-2" onClick={postData}>Submit</Button>
                <Button style={{backgroundColor: "blue",color:"white"}} component={Link} className="m-2" to="/forms3">Next</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Forms;
  