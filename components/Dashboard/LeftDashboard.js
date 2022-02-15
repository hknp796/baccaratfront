import styles from "../../styles/LeftDashboard.module.css";
import { Container, Card, Row, Col } from "react-bootstrap";
function LeftDashboard(props) {
  console.log("left", props.style);
  

  function seeder(n) {
    let array = [];
    for (var i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  }
const getColumnIndex= num =>{
  let numRemainder = num % 13
  let divisionResult = Math.floor(num/13)
  if(numRemainder ==0 && divisionResult >0){
    numRemainder = 13 
    divisionResult--
  }
  let mappedNum = (numRemainder -1)* 6 +divisionResult +1
return mappedNum;
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


  
  {seeder(78).map((item, index) => {
    return (
      <div key="index" className={styles.box}>
                <h2>{getColumnIndex(++item)}</h2>
                <div className={styles.circle} style={{backgroundColor:props.style}}>
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
