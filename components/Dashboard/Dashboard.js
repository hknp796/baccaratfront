import React from "react";
import styles from "../../styles/Dashboard.module.css";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

import GameLog from "./GameLog";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
import DashboardBottom from "./DashboardBottom";


function Dashboard() {
  return (
    <div>
      <Container fluid>
        <Card className={styles.card}>
          <Card.Header className={styles.header}>
            <Row className={styles.row}>
              <Col className={styles.colleft}>
                <Form.Select
                  aria-label="Default select example"
                   className={styles.select}
                >
                  <option>Casino</option>
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
                  <option>Casino</option>
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
                  <option>Casino</option>
                  <option value="Stardust">Stardust</option>
                  <option value="Draftking">Draftking</option>
                  <option value="Bitstars">Bitstars</option>
                </Form.Select>
              </Col>
            

              <Col className={styles.colright}>
                <h4>GAME INPUTS</h4>
              </Col>
              <Col className={styles.rightbuttonupload}>
                <Button
                  variant="success"
                  type="submit"
                  
                  className={styles.rightbuttonupload}
            
                  >
                  Game Image Upload
                </Button>
              </Col>
              <Col className={styles.rightbuttonSave}>
                <Button
                  variant="success"
                  type="submit"
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
    </div>
  );
}

export default Dashboard;
