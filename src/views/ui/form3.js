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
import axios from "axios";
import { useState,useEffect } from "react";
  const Forms = () => {
    
    const [data, setdata] = useState([])

    // -----------------------------------------------
    const [ReferenceNo, setreferenceno] = useState('')
    const [name, setname] = useState('')
    const [dob_pdf, setdob_pdf] = useState('')
    const [address_pdf, setaddress_pdf] = useState('')
    const [collage_request_letter, setcollage_request_letter] = useState('')
    // const [createdby, setcreatedby] = useState('')
    // const [createddate, setcreateddate] = useState('')
    // const [updatedby, setupdatedby] = useState('')
    // const [updatedon, setupdatedon] = useState('')
    
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/Pdf_table/').then(res => {
          console.log("Getting from::::", res.data)
          setdata(res.data)

      }).catch(err => console.log(err, "error"))
      console.log('test applied')
  }, [])

  const resetform = (data, onSubmitProps) => {
      onSubmitProps.setdata(false)
      onSubmitProps.resetForm()
  }
  const postData = (e) => {
      console.log(ReferenceNo, name, dob_pdf, address_pdf, collage_request_letter)

      var bodyFormData = new FormData();
      bodyFormData.append('ReferenceNo', ReferenceNo);
      bodyFormData.append('name', name);
      bodyFormData.append('dob_pdf', dob_pdf);
      bodyFormData.append('address_pdf', address_pdf);
      bodyFormData.append('collage_request_letter', collage_request_letter)
      e.preventDefault();
      axios({
          method: "post",
          url: "http://127.0.0.1:8000/Pdf_table/",
          data: bodyFormData,
          headers: {
              "Content-Type": "multipart/form-data"
          },
      }).then(function (response) {
          console.log(response)
      }).catch(function (response) {
          console.log(response);
      })
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
                <Button style={{backgroundColor: "blue",color:"white"}} component={Link} to="/forms2" className="m-2">Prev</Button>
                <Button style={{backgroundColor: "blue",color:"white"}} className="m-2" onClick={postData}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Forms;
  