import React from "react";
import styles from "../../styles/Dashboard.module.css";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

import GameLog from "./GameLog";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
import DashboardBottom from "./DashboardBottom";
import TriggersAndTheories from "../TriggersAndTheories/TriggersAndTheories";

function Dashboard() {
  const time = new Date().toLocaleTimeString()
  const date =     new Date().toLocaleDateString();
  return (
    <div>
      <Container fluid style={{padding:"53px"}}>
        <Card className={styles.card}>
          <Card.Header className={styles.header}>
            <Row className={styles.row}>
              <div className={styles.profile}>
                <div className={styles.avatar}>
                  <img className={styles.avatarImage} src="/avatar.png" />
                </div>
                <div > Nevlon Duguid</div>
                <div className="div3">{time}  </div>
                <div className="div4"> {date}  </div>
                <div className="div4"> #:2121 </div>
              </div>
              <Col className={styles.colleft}>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.select}
                >
                  <option>Select Casino</option>
                  <option value="Stardust">Stardust</option>
                  <option value="Draftking">Draftking</option>
                  <option value="Bitstars">Bitstars</option>
                </Form.Select>
              </Col>

              <Col className={styles.colleft}>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.select}
                >
                  <option>Select Platform</option>
                  <option value="Stardust">Stardust</option>
                  <option value="Draftking">Draftking</option>
                  <option value="Bitstars">Bitstars</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.select}
                >
                  <option>Select Game</option>
                  <option value="Stardust">Stardust</option>
                  <option value="Draftking">Draftking</option>
                  <option value="Bitstars">Bitstars</option>
                </Form.Select>
              </Col>

              <Col className={styles.colright}>
                <h4>GAME INPUTS</h4>
              </Col>
              <Col>
                <Button
                  variant="success"
                  type="button"
                  className={styles.rightbuttonupload}
                >
                  Game Image Upload
                </Button>
              </Col>
              <Col>
                <Button
                  variant="success"
                  type="button"
                  className={styles.rightbuttonSave}
                >
                  Save Game
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Col>
            <Card.Body className={styles.middle}>
              <GameLog />
            </Card.Body>
          </Col>
          <Row>
            <RightDashboard />
            <LeftDashboard />
          </Row>
        </Card>

        <DashboardBottom />
      </Container>
      <TriggersAndTheories />
    </div>
  );
}

export default Dashboard;
