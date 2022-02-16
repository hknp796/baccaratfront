import React, { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

import UserTop from "./UserTop";

import GameLog from "./GameLog";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
import DashboardBottom from "./DashboardBottom";
import TriggersAndTheories from "../TriggersAndTheories/TriggersAndTheories";

function Dashboard() {
  let count = {
    1: 0,
    2: 0,
    3: 0,
  };
  const [style, setStyle] = useState([]);

  const [counter, setCounter] = useState(count);

  const buttonClick = (id, color) => {
    setStyle([...style, color]);
    setCounter({ ...counter, [id]: counter[id] + 1 });
  };

  console.log("counter", counter);

  const options = ["Stardust", "Draftking", "Bitstar"];

  return (
    <div>
      <Container fluid className={styles.dashConatiner}>
        <Card className={styles.card}>
          <Card.Header className={styles.header}>
            <UserTop />
          </Card.Header>
          <Col>
            <Card.Body className={styles.middle}>
              <GameLog counter={counter} />
            </Card.Body>
          </Col>
          <Row>
            <RightDashboard buttonClick={buttonClick} />
            <LeftDashboard style={style} />
          </Row>
        </Card>

        <DashboardBottom />
      </Container>
      {/* <TriggersAndTheories /> */}
    </div>
  );
}

export default Dashboard;
