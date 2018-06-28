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

class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id     : "",
      status : ""
    };

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleSubmit   = this.handleSubmit.bind(this);
  }

  handleChangeId(event) {
    this.setState({
      id: event.target.value
    });
  }

  handleSubmit(event) {
    axios.post("http://localhost:3000/delete_user", {
        id : this.state.id
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
              Delete User Form
            </CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="fa fa-id-card"></i></InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      id="inputName"
                      className="form-control"
                      placeholder="User's ID"
                      required
                      autoFocus
                      value={this.state.id}
                      onChange={this.handleChangeId}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="form-actions">
                  <Button
                    className="btn btn-lg btn-danger btn-block"
                    type="delete"
                    onClick={this.handleSubmit}
                  >
                    Delete
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

export default DeleteUser;
