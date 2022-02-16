import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
 import styles from "../styles/Search.module.css";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import * as Icon from "react-bootstrap-icons";

const initialValues = {
  id: uuidv4(),
  name: "",
  pattern: "",
  casino: "",
  frames: "",
  theory: "",
  database: "",
  platform: "",
  time: "",
  dates: "",
};
const Search = (props) => {
  const [formData, setFormData] = useState([initialValues]);

  // Form Submitt
  const handleSubmit = (e,index) => {
    e.preventDefault();
    
    props.saveSearch(formData[index],index);
    console.log("formDataI",formData[index]);
  };
//Handle Change
  const handleChangeInput = (e, index) => {
    const { value, name } = e.target;

    const newState = [...formData];
    newState[index] = {
      ...newState[index],
      [name]: value,
    };
  
    setFormData(newState);
  };
  const handleAddFields = (e) => {
    e.preventDefault()
    setFormData([...formData, initialValues]);
  };
  return (
    <Container fluid className={styles.container}>
    <div >
      <Form>
        {formData.map((data, index) => {
          return (
            <div key={index}>
              <Container className="mt-5 px">
                <Card className="p-5">
                  <Card.Header 
                    className="text-center bg-primary w-100 text-white"
                    style={{ width: "100%" }}
                  >
                    PATTERNS AND SEARCH
                  </Card.Header>
                  <Row>
                    <Col>
                      <Form.Group className="mt-4" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder=" Name"
                          value={data.name}
                          onChange={(e) => handleChangeInput(e, index)}
                         
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mt-4" controlId="formpattern">
                        <Form.Control
                          type="text"
                          placeholder=" Pattern"
                          name="pattern"
                          value={formData.pattern}
                          onChange={(e) => handleChangeInput(e, index)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        className="mt-4"
                        name="casino"
                        value={formData.casino}
                        onChange={(e) => handleChangeInput(e, index)}
                      >
                        <option>Casino</option>
                        <option value="Stardust">Stardust</option>
                        <option value="Draftking">Draftking</option>
                        <option value="Bitstars">Bitstars</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        className="mt-4"
                        name="frames"
                        value={formData.frames}
                        onChange={(e) => handleChangeInput(e, index)}
                      >
                        <option>Frames</option>
                        <option value="frames">frames</option>
                        <option value="vfrm 1">vfrm 1</option>
                        <option value="vfrm 2">vfrm 2</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        className="mt-4"
                        name="database"
                        value={formData.database}
                        onChange={(e) => handleChangeInput(e, index)}
                      >
                        <option>Database</option>
                        <option value="all">all</option>
                        <option value="My Shoe">My shoe</option>
                        <option value="100ks">100ks</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        variant="success"
                        type="submit"
                        className="mt-4 w-100 mb-4"
                        onClick={(e)=>handleSubmit(e,index)}
                      >
                        <Icon.Search className="" />
                        Search
                      </Button>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        className="mt-4"
                        name="theory"
                        value={formData.theory}
                        onChange={(e) => handleChangeInput(e, index)}
                      >
                        <option>Theory</option>
                        <option value="theory">theory</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        className="mt-4"
                        name="platform"
                        value={formData.platform}
                        onChange={(e) => handleChangeInput(e, index)}
                      >
                        <option>Platform</option>
                        <option value="All">All</option>
                        <option value="ezugi">ezugi</option>
                        <option value="evolution">evolution</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        className="mt-4"
                        name="time"
                        value={formData.time}
                        onChange={(e) => handleChangeInput(e, index)}
                      >
                        <option>Time</option>
                        <option value="time">time</option>
                        <option value="two">Two</option>
                        <option value="Three">Three</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        className="mt-4"
                        name="dates"
                        value={formData.dates}
                        onChange={(e) => handleChangeInput(e, index)}
                      >
                        <option>Dates</option>
                        <option value="dates">dates</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Card>
              </Container>
            </div>
          );
        })}
      </Form>
      <Container className="mt-5 text-center px-5">
        <Button
          variant="success"
          type="submit"
          className="mt-1 w-25 mx-4"
          onClick={handleAddFields}
        >
          <Icon.PlusCircle className="" /> Add New Search
        </Button>
        <Button variant="success" type="submit" className="mt-1 w-25 ">
          Search All
        </Button>
      </Container>
    </div>
    </Container>
  );
};

export default Search;
