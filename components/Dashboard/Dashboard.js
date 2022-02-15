import React,{useState} from "react";
import styles from "../../styles/Dashboard.module.css";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

import GameLog from "./GameLog";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
import DashboardBottom from "./DashboardBottom";
import TriggersAndTheories from "../TriggersAndTheories/TriggersAndTheories";

function Dashboard() {
  let count = {

    1: 0,
    2: 0,
    3: 0
  }
  const [style, setStyle] = useState([]);
  const [letter, setLetter] = useState([]);
  const[counter,setCounter] = useState(count)

  const buttonClick = (id,color) => {
    setStyle([...style,color])
    setCounter({ ...counter, [id]: counter[id] + 1 })
  };
  
  console.log("counter",counter);
  
  const options = ["Stardust", "Draftking", "Bitstar"];

  const time = new Date().toLocaleTimeString()
  const date =     new Date().toLocaleDateString();
  return (
    <div>
      <Container fluid className={styles.dashConatiner}>
        <Card className={styles.card}>
          <Card.Header className={styles.header}>
            <Row className={styles.row}>
              <div className={styles.profile}>
                <div className={styles.avatar}>
                  <img className={styles.avatarImage} src="/avatar.png" />
                </div>
                <div > Nevlon Duguid</div>
               
                <div className="div3" >{time}  </div>
                <div>

                <input type="date" className="div4"/>
                </div>
                <div className="div4"> #:2121 </div>
              </div>
              <Col className={styles.colleft}>
             
           
              <Form.Select
                
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
                 
                  className={styles.select}
                >
                  <option>Select Platform</option>
                  <option value="Ezugi">Ezugi</option>
                  <option value="Evolution">Evolution</option>
                 
                </Form.Select>
              </Col>
              <Col>
                <input type="text"
                  aria-label="Default select example"
                  className={styles.textBox}
                  placeholder="Selelct Game"
                >
                  {/* iterative rendering here  */}
              
                  {/*  */}

                </input>
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
              {/* center box */}
              <GameLog counter={counter}  />
              {/*  */}
            </Card.Body>
          </Col>
          <Row>
            {/* Right dashboard component */}
          <RightDashboard buttonClick={buttonClick}/>
            {/*  */}
            {/* Left dashboard component */}
            <LeftDashboard style={style} />
            {/*  */}
          </Row>
        </Card>
        {/* dashboard component  */}
        <DashboardBottom />
        {/*  */}
      </Container>
      {/* triggers and theories component */}
      <TriggersAndTheories />
      {/*  */}
    </div>
  );
}

export default Dashboard;
