import { Row, Col, Card, CardBody, CardTitle,FormGroup,Label,Input } from "reactstrap";
import { Button } from "@mui/material";
import Hudaloginimg from '../assets/images/bg/bnav.png'
import './about.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BiUserCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import {Table} from './ui/Tables'
import { ConstructionRounded } from "@mui/icons-material";
import { Component } from "react";
import { render } from "@testing-library/react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
export default class About extends Component {
  constructor(props){
    super(props)
let loggedIn = false
let CAloggedIn = false
let User1loggedIn = false
let User2loggedIn = false
let User3loggedIn = false
const initialValues = {username:"",email:"",password:""};
// const [formErrors,setFormErrors] = useState(initialValues);

// const [students, setStudents] = useState([]);
// useEffect(() => {
//   async function getAllStudent() {
//    try {
//     const students = await axios.get("http://127.0.0.1:8000/Chartdatatable/")
//     // console.log(students.data);
//     setStudents(students.data);
//    } catch (error) {
//     console.log("Something is Wrong");
//    }
//   }
//   getAllStudent();
//  }, [])
    this.state = {
username:'',
password:'',
loggedIn,
CAloggedIn,
User1loggedIn,
User2loggedIn,
User3loggedIn
    }
this.onChange=this.onChange.bind(this)
this.submitForm=this.submitForm.bind(this)
  }
  onChange(e)
  {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitForm(e){
    e.preventDefault()
    const {username,password} = this.state
    //login logic 
    // setFormErrors(this.validate(this.state));
    if(username === "Vikram" && password==="Vikram@123")
    {
      localStorage.setItem("token","kdjflsdjflskfjlskjfdfjls")
      this.setState({
        loggedIn:true
      })
    }
    if (username==="CA" && password==="CA@123")
    {
      this.setState({
        CAloggedIn:true
      })
    }
    if (username==="User1loggedIn" && password==="User1@123")
    {
      this.setState({
        User1loggedIn:true
      })
    }
    if (username==="User2loggedIn" && password==="User2@123")
    {
      this.setState({
        User2loggedIn:true
      })
    }
    if (username==="User3loggedIn" && password==="User3@123")
    {
      this.setState({
        User3loggedIn:true
      })
    }
  }

  render(){
    if(this.state.loggedIn){
      return <Navigate to ="/table" />
    }
    if(this.state.CAloggedIn)
    {
    return <Navigate to ="/careview" />
    }
    if(this.state.User1loggedIn)
    {
    return <Navigate to ="/table" />
    }
    if(this.state.User2loggedIn)
    {
    return <Navigate to ="/table" />
    }
    if(this.state.User3loggedIn)
    {
    return <Navigate to ="/table" />
    }
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <div className="bnav">
        <img src={Hudaloginimg} width="300px" />
        </div>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Master Login Page
          </CardTitle>
          <CardBody className="p-5">
            {/* <pre>{JSON.stringify(this.state,undefined,2)}</pre> */}
            <form onSubmit={this.submitForm}>
          <FormGroup>              
          <i class="bi-people me-2"></i>
                <Label for="Username">USERNAME</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="USERNAME"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
              <i class="bi-file-lock2 me-2"></i>
                <Label for="examplePassword">PASSWORD</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="PASSWORD"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button style={{backgroundColor: "blue",color:"white"}} className="m-2" type="submit" onSubmit={this.submitForm}>Login</Button>
              <Button style={{backgroundColor: "blue",color:"white"}}>Forgot Password</Button>
              <p>
                <a href="#">
                  Need an User Account ?
                </a>
              </p>
          </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
}

