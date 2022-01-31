import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/RightDashboard.module.css";

function RightDashboard() {
  return (
    <Container className={styles.rightside}>
    
      <Row className={styles.row}>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
        <Col>
          <Button className={styles.rightcontainer}>P</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RightDashboard;
