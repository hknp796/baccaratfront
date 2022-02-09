import { Card, Container } from "react-bootstrap";
import styles from "../../styles/TriggersAndTheories.module.css";
function TriggersAndTheories() {
  return (
    <Container fluid>
        <h3 className={styles.heading}>Triggers and Theories</h3>
      <Card className={styles.card}>
        <Card.Header className={styles.cardHeader}>Chop</Card.Header>
        <Card.Body className={styles.cardBody}>
          <div className={styles.parentText}>
              <div style={{marginTop:"-8px"}}>Agression</div>
            <input type='text' className={styles.div1} value="20%" />
            <input type='text'className={styles.div2} value="40%"/> 
            <input type='text'className={styles.div3} value="60%"/> 
            <input type='text'className={styles.div4} value="80%"/> 
            <input type='text'className={styles.div5} value="100%"/> 
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TriggersAndTheories;
