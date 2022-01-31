import { Container, Form, Button, Col, Row, Card } from "react-bootstrap";
import styles from "../styles/SearchList.module.css";
const style = {
  display: "flex",
  float: "left",
  width: "100%",
};

function SearchList(data) {
  console.log("Serachlist1", data.list);

  return (
    <div style={style}>
      {data.list.map((res, index) => {
        return (
          <div className="w-50" key={index}>
            <Form>
              <Card>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        Result For
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        value={res.name}
                        required
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        Searched
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        Sessions
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        ATRIG / Shoe
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        CLIR
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        ALIR
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        LIRA
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        CWIR
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        AWIR
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        WIRA
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-1" controlId="formBasicEmail">
                      <Form.Label
                        className="text-center"
                        style={{ width: "100%" }}
                      >
                        CHP
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        className="w-75 m-auto"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-5 mb-5 w-25 m-auto"
                >
                  Submit
                </Button>
                <Card.Footer>
                
                </Card.Footer>
              </Card>
            </Form>
            
          </div>
        );
      })}
    </div>
  );
}
export default SearchList;
