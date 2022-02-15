import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/RightDashboard.module.css";
function RightDashboard(props) {
let P,B
  return (
    <Container>
      <Container className={styles.buttonsContainer}>
        <div className={styles.rightButton}>
          <div>
            <button style={{ backgroundColor: "#277ECA" }} onClick={()=>props.buttonClick(1,"#277ECA")}>P</button>
          </div>
          <div>
            <button style={{ backgroundColor: "#ED4967" }} onClick={()=>props.buttonClick(2)}>B</button>{" "}
          </div>
          <div>
            <button style={{ backgroundColor: "#19A05C" }} onClick={()=>props.buttonClick(3)}>T</button>
          </div>
          <div>
          <Badge pill className={styles.badgeI}>
              O
            </Badge>
            <button style={{ backgroundColor: "#277ECA" }}>I</button>
          </div>
          <div>
          <Badge pill className={styles.badgeM}>
              O
            </Badge>
            <button style={{ backgroundColor: "#ED4967" }}>M</button>
          </div>
          <div>
          <Badge pill className={styles.badgeE}>
              O
            </Badge>
            <button style={{ backgroundColor: "#19A05C" }}>E</button>
          </div>
          <div>
            <Badge pill className={styles.badgeO}>
              Ø
            </Badge>
            <button style={{ backgroundColor: "#277ECA" }}>O</button>
          </div>
          <div>
            <Badge pill className={styles.badgeN}>
              Ø
            </Badge>
            <button style={{ backgroundColor: "#ED4967" }}>N</button>
          </div>
          <div>
            <Badge pill className={styles.badgeR}>
              Ø
            </Badge>
            <button style={{ backgroundColor: "#19A05C" }}>R</button>
          </div>
          <div>
            <Badge pill className={styles.badgeU}>
              $
            </Badge>
            <button style={{ backgroundColor: "#277ECA" }}> U</button>
          </div>
          <div>
            <Badge pill className={styles.badgeV}>
              $
            </Badge>
            <button style={{ backgroundColor: "#ED4967" }}>V</button>
          </div>
          <div>
            <Badge pill className={styles.badgeW}>
              $
            </Badge>
            <button style={{ backgroundColor: "#19A05C" }}>W</button>
          </div>
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <Button
              className={styles.blackButton}
              style={{ backgroundColor: "black" }}
            >
              +F
            </Button>
            <img src="/undo.png" alt="" className={styles.undo} />
            <Container className={styles.deletecontainer}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </Container>
            <img src="/redo.png" alt="" className={styles.redo} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className={styles.buttonNatural}>Naturals</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className={styles.buttonChance}>Chance</Button>
          </Col>
        </Row>
      </Container>

      <Container className={styles.grid}>
        <div className={styles.parent}>
          <div className={styles.div1}>10</div>
          <div className={styles.div2}> 20</div>
          <div className={styles.div3}> 40</div>
          <div className={styles.div4}> 50-5</div>
          <div className={styles.div5}>150-30</div>
          <div className={styles.div6}> 350-40</div>
          <div className={styles.div7}> Bankroll $5000</div>
          <div className={styles.div8}> 500-50</div>
          <div className={styles.div9}> 1000-100</div>
          <div className={styles.div10}> 2500-300</div>
          <div className={styles.div11}>3500-600</div>
          <div className={styles.div12}> 5000-900</div>
          <div className={styles.div13}> 6500-1200</div>

          <select className={styles.div14}>
            <option>Select Betting option</option>
            <option value="Stardust">Stardust</option>
          </select>
        </div>
      </Container>

      <table className={styles.customTable}>
        <tbody>
          <tr>
            <td>Stop Lost: $1000 20%</td>
            <td>Win Gold: $300</td>
          </tr>
          <tr>
            <td>Total Investment:$150 15%</td>
            <td>Win Total: 33%</td>
          </tr>
          <tr>
            <td>
              <input type="text" className={styles.inputs} />
            </td>
            <td>
              <input type="text" className={styles.inputs} />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default RightDashboard;
