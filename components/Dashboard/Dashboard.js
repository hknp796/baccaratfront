import React from "react";
import styles from "../../styles/Dashboard.module.css";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

import GameLog from "./GameLog";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";


function Dashboard() {
  return (
    <div>
      <Container className="w-100 mt-5" >
        <Card className={styles.container}>
          <Card.Header className="text-center bg-primary w-100 text-white">
            <Row>
              <Col>
                <Form.Select
                  aria-label="Default select example"
                  className="mt-4 w-50"
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
                  className="mt-4 w-50"
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
                  className="mt-4 w-50"
                >
                  <option>Casino</option>
                  <option value="Stardust">Stardust</option>
                  <option value="Draftking">Draftking</option>
                  <option value="Bitstars">Bitstars</option>
                </Form.Select>
              </Col>
              <Col className="mt-4">
                <h4>GAME INPUTS</h4>
              </Col>
              <Col>
                <Button
                  variant="success"
                  type="submit"
                  size="sm"
                  className={styles.upload}
                  className="mt-4  mb-4"
                >
                  Game Image Upload
                </Button>
              </Col>
              <Col>
                <Button
                  variant="success"
                  type="submit"
                  className="mt-4  mb-4"
                  size="sm"
                >
                  Save Game
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Col>
            <Card.Body className={styles.middle}>
              {/* <GameLog /> */}
            </Card.Body>
          </Col>
          <Row>
           <RightDashboard />
            
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Dashboard;
