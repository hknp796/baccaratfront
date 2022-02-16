import styles from "../../styles/LeftDashboard.module.css";
import { Container } from "react-bootstrap";

import { seeder } from "../helpers/helpers";
import { getColumnIndex } from "../helpers/dashboardHelper";

function LeftDashboard(props) {
  return (
    <Container>
      <div className={styles.parent}>
        {seeder(13).map((item, index) => {
          return (
            <div key={index} className={styles.box1}>
              <h2>{item}</h2>
            </div>
          );
        })}

        {seeder(78).map((item, index) => {
          return (
            <div key={index} className={styles.box}>
              <h2>{getColumnIndex(item)}</h2>
              <div
                className={styles.circle}
                style={{ backgroundColor: props.style }}
              >
                {/* circle inscribed is conditionally rendered for diffrent inputs */}
                <div className={styles.circleInscribed}></div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
export default LeftDashboard;
