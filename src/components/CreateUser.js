import React, { Component } from 'react';
import axios from 'axios';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      email    : "",
      status   : ""
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail    = this.handleChangeEmail.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    axios.post("http://localhost:3000/create_user", {
        username : this.state.username,
        email    : this.state.email
      })
      .then(response => {
        this.setState({ status : response.data.status });
        if (this.state.status === "done") {
          alert("Successful!");
        }
        else alert("Fail!");
      })
      .catch(function(error) {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    return(
      <div className="animated fadeIn">

        <Col xs="12" sm="4">
          <Card>
            <CardHeader>
              Create User Form
            </CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      id="inputName"
                      className="form-control"
                      placeholder="Full Name"
                      required
                      autoFocus
                      value={this.state.username}
                      onChange={this.handleChangeUsername}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                    </InputGroupAddon>
                      <input
                        type="text"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autoFocus
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                      />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="form-actions">
                  <Button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default CreateUser;
