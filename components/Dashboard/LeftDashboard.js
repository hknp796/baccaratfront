import styles from "../../styles/LeftDashboard.module.css";
import { Container, Card, Row, Col } from "react-bootstrap";
function LeftDashboard(props) {
  console.log("left", props.style);
  console.log("left", props);

  function seeder(n) {
    let array = [];
    for (var i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  }

  return (
    <Container>
      <div className={styles.parent}>
        {seeder(13).map((item, index) => {
          return (
            <div key="index" className={styles.box1}>
              <h2>{++item}</h2>
            </div>
          );
        })}

        {
          seeder(78).map((item,index)=>{
            return (
              <div key="index" className={styles.box}>
              <h2>{++item}</h2>
              <div className={styles.circle}>
                {/* circle inscribed is conditionally rendered for diffrent inputs */}
                <div className={styles.circleInscribed}></div>
              </div>
            </div>
            )
          })
        }
      </div>
    </Container>  
  );
}
export default LeftDashboard;
