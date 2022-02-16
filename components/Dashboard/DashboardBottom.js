import React from "react";
import { seeder } from "../helpers/helpers";

import styles from "../../styles/DashboardBottom.module.css";
function DashboardBottom() {
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.parent}>
        {seeder(80).map((item, index) => {
          return <input type="text" key={index} placeholder={item}></input>;
        })}
      </div>
    </div>
  );
}

export default DashboardBottom;
