import { Button, Col, Container, Row, Card } from "react-bootstrap";
import styles from "../../styles/RightDashboard.module.css";

function RightDashboard() {
  return (
    <Container >
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#277ECA" }}
            >
              P
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#ED4967" }}
            >
              B
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#19A05C" }}
            >
              T
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#277ECA" }}
            >
              I
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#ED4967" }}
            >
              M
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#19A05C" }}
            >
              E
            </Button>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#277ECA" }}
            >
              O
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#ED4967" }}
            >
              N
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#19A05C" }}
            >
              R
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#277ECA" }}
            >
              U
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#ED4967" }}
            >
              V
            </Button>
          </Col>
          <Col className={styles.buttonCol}>
            <Button
              className={styles.buttons}
              style={{ backgroundColor: "#19A05C" }}
            >
              W
            </Button>
          </Col>
        </Row>
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
            <img src="/delete.png" alt="" className={styles.delete} />
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
          <div className={styles.div1}> dd</div>
          <div className={styles.div2}> dd</div>
          <div className={styles.div3}> ss</div>
          <div className={styles.div4}> s</div>
          <div className={styles.div5}>d </div>
          <div className={styles.div6}> sda</div>
          <div className={styles.div7}> Bankroll $5000</div>
          <div className={styles.div8}> sda</div>
          <div className={styles.div9}> ee</div>
          <div className={styles.div10}> ea</div>
          <div className={styles.div11}>qq </div>
          <div className={styles.div12}> e3</div>
          <div className={styles.div13}> qw</div>

          <select className={styles.div14}>
            <option>Select Betting option</option>
          </select>
        </div>
      </Container>

      <table className={styles.customTable }>
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
            <td><input type="text" className={styles.inputs}/></td>
            <td><input type="text" className={styles.inputs}/></td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default RightDashboard;
