import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/DashboardGameLog.module.css";
function GameLog(props) {
  console.log('gamelog',props.counter["1"]);
  return (
    <>
      <Container className={styles.outerContainer}>
        <div className={styles.header}>
          <h4>GAME LOG</h4>
        </div>
      </Container>

      <div className={styles.resultContainer}>
        <h5 className={styles.result}>Results</h5>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.gameloghand}>Hand #69</div>
        <div className={styles.parentCount}>
          <div className={styles.count1}>{props.counter["1"]}&nbsp;<div className={styles.bluecircle}></div> &nbsp;ss</div>
          <div className={styles.count2}>{props.counter["2"]}
          <div className={styles.redcircle}></div>
          </div>
          <div className={styles.count3}>{props.counter["3"]}<div className={styles.greencircle}></div></div>
        </div>
        <div className={styles.pointParent}>
        <div className={styles.point1}>P.P 25</div>
          <div className={styles.point2}>
            B.P 1
          </div>
          <div className={styles.point3}>T 2</div>
        </div>
        <div className={styles.parentGrid}>
          <div className="div1"> Streaks 9</div>
          <div className="div2">Chops 12 </div>
          <div className="div3"> SES 15-15</div>
          <div className="div4">Chance 1-5</div>
        </div>
      </div>
    </>
  );
}

export default GameLog;
