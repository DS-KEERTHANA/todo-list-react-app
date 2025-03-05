import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./App.css";
import { MytaskContext } from "./App.jsx";

let AddTask = () => {
  let [task, setTask] = useState("");
  let { tasks, setTasks } = useContext(MytaskContext);
  
  let addTask = () => {
    if (task != "") {
      alert("task added succesfully");
      setTasks([...tasks, task]);
      setTask("");
    } else {
      alert("task field is empty");
    }
  };

  let handleEvent = (element) => {
    setTask(element.target.value);
  };

  return (
    <div id="mainaddtask">
      <div id="home-1" className="d-grid justify-content-center align-items-center w-auto h-auto">
        <Container id="btns" className=" justify-content-center align-items-center">
          <Row>
            <Col className="cols" lg={4} md={12} xs={12} >
              <Link className="links" to={"/home"}>
                <Button className="btns" variant="outline-primary">
                  Home
                </Button>
              </Link>
            </Col>
            <Col className="cols" lg={4} md={12} xs={12}>
              <Link className="links" to="/tasks">
                <Button className="btns" variant="outline-primary">
                  Tasks
                </Button>
              </Link>
            </Col>
            <Col className="cols" lg={4} md={12} xs={12}>
              <Link className="links" to="/addtask">
                <Button className="btns" variant="outline-primary">
                  Add Task
                </Button>
              </Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg={12} md={12} xs={12}>
              <h3>To-Do List</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} xs={12}>
              <p>Add to New Task</p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="d-grid justify-content-center align-items-center">
          <Row>
            <Col lg={12} md={12} xs={12}>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control
                    id="input"
                    type="text"
                    value={task}
                    onChange={handleEvent}
                    placeholder="Task Name"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container className="d-grid justify-content-center align-items-center">
          <Row>
            <Col lg={12} md={12} xs={12}>
              <Button onClick={addTask} variant="info">
                Add Task
              </Button>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
};

export default AddTask;