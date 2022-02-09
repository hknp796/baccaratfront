import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/DashboardGameLog.module.css";
function GameLog() {
  return (
    <div>
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
          <div className={styles.count1}>dd</div>
          <div className={styles.count2}>
            dd
          </div>
          <div className={styles.count3}>dd</div>
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
    </div>
  );
}

export default GameLog;
