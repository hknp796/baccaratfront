import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/DashboardGameLog.module.css";
function GameLog() {
  return (
    <Card className={styles.card} style={{ width: "13.4rem"}}>
      <div className={styles.header}>
        <h4>GAME LOG</h4>
      </div>
      <Card className={styles.middlehead}>Results</Card>
      <Card className={styles.middlebody}>
        <Container className={styles.gamelogcontainer}>
          <Card className={styles.gameloghand}>Hand #69</Card>
          <Card className={styles.gameloghand}><span> #69</span><span> #69</span><span> #69</span></Card>
          <Card className={styles.gameloghand}>Hand #69</Card>
          <Row>
            <Col>
              <Card className={styles.gameloghand}>Streakes 9</Card>
            </Col>
            <Col>
              <Card className={styles.gameloghand}>Chops 12</Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className={styles.gameloghand}>Hand #69</Card>
            </Col>
            <Col>
              <Card className={styles.gameloghand}>Hand #69</Card>
            </Col>
          </Row>
        </Container>
      </Card>
    </Card>
  );
}

export default GameLog;
