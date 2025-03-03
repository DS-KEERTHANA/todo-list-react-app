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
      <div id="home-1">
        <Container id="btns">
          <Row>
            <Col className="cols">
              <Link className="links" to={"/home"}>
                <Button className="btns" variant="outline-primary">
                  Home
                </Button>
              </Link>
            </Col>
            <Col className="cols">
              <Link className="links" to="/tasks">
                <Button className="btns" variant="outline-primary">
                  Tasks
                </Button>
              </Link>
            </Col>
            <Col className="cols">
              <Link className="links" to="/addtask">
                <Button className="btns" variant="outline-primary">
                  Add Task
                </Button>
              </Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3>To-Do List</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Add to New Task</p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
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
        <Container>
          <Row>
            <Col>
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