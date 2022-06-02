import { Row, Col, Card, CardBody, CardTitle, FormGroup, Label, Input } from "reactstrap";
import { Button } from "@mui/material";
import Hudaloginimg from '../../assets/images/bg/bnav.png'
import '../about.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BiUserCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Table } from '../ui/Tables'
import { ConstructionRounded } from "@mui/icons-material";
import { Component } from "react";
import { render } from "@testing-library/react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import FaMailBulk from 'react-icons'
export default class About extends Component {
  constructor(props) {
    super(props)
    let loggedIn = false
    const initialValues = { username: "", email: "", password: "" };
    // const inputs = [
    //   {
    //     id: 1,
    //     name: "username",
    //     type: "text",
    //     placeholder: "Username",
    //     errorMessage:
    //       "Username should be 3-16 characters and shouldn't include any special character!",
    //     label: "Username",
    //     pattern: "^[A-Za-z0-9]{3,16}$",
    //     required: true,
    //   },
    //   {
    //     id: 2,
    //     name: "email",
    //     type: "email",
    //     placeholder: "Email",
    //     errorMessage: "It should be a valid email address!",
    //     label: "Email",
    //     required: true,
    //   },
    //   {
    //     id: 3,
    //     name: "password",
    //     type: "password",
    //     placeholder: "Password",
    //     errorMessage:
    //       "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    //     label: "Password",
    //     pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    //     required: true,
    //   },
    //   {
    //     id: 4,
    //     name: "confirmPassword",
    //     type: "password",
    //     placeholder: "Confirm Password",
    //     errorMessage: "Passwords don't match!",
    //     label: "Confirm Password",
    //     pattern: values.password,
    //     required: true,
    //   },
    // ];
    this.state = {
      username: '',
      password: '',
      loggedIn,
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm(e) {
    e.preventDefault()
    localStorage.setItem("token","Vikram378383")
    const { username, password } = this.state
    //login logic 
    // setFormErrors(this.validate(this.state));
    if (username === "Vikram" && password === "Vikram@123") {
      // localStorage.setItem("token", "kdjflsdjflskfjlskjfdfjls")
      this.setState({
        loggedIn: true
      })
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Navigate to="/table" />
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
              New Trainee Signup Page
            </CardTitle>
            <CardBody className="p-5">
              {/* <pre>{JSON.stringify(this.state,undefined,2)}</pre> */}
              <form onSubmit={this.submitForm}>
                <FormGroup>
                  <i class="bi-people me-2"></i>
                  <Label for="Username">CREATE A USERNAME</Label>
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
                  <i class="bi bi-envelope-check me-2"></i>
                  <Label for="Username">ENTER YOUR EMAIL-ID</Label>
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
                  <Label for="examplePassword">CHOOSE YOUR PASSWORD</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="PASSWORD"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <i class="bi-file-lock2 me-2"></i>
                  <Label for="examplePassword">CONFIRM YOUR PASSWORD</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="PASSWORD"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <Button style={{ backgroundColor: "blue", color: "white" }} className="m-2" type="submit" onSubmit={this.submitForm}>CREATE ACCOUNT</Button>
                <Button style={{ backgroundColor: "blue", color: "white" }}>LOGIN ACCOUNT</Button>
                <p>
                  <a href="#">
                    Need Help ?
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

