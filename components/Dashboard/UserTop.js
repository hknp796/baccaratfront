import React from "react";
import { Form } from "react-bootstrap";
import styles from "../../styles/UserTop.module.css";

const time = new Date().toLocaleTimeString();
const date = new Date().toLocaleDateString();

function UserTop() {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img className={styles.avatarImage} src="/avatar.png" />
          <div>Nevlon Duguid</div>
        </div>

        <div>{time}</div>
        <div>
          <input type="date" />
        </div>
        <div> #:2121 </div>
      </div>

      <div class={styles.profileSelect}>
        <Form.Select className={styles.select}>
          <option>Select Platform</option>
          <option value="Ezugi">Ezugi</option>
          <option value="Evolution">Evolution</option>
        </Form.Select>
        <Form.Select className={styles.select}>
          <option>Select Platform</option>
          <option value="Ezugi">Ezugi</option>
          <option value="Evolution">Evolution</option>
        </Form.Select>
        <input
          type="text"
          placeholder="Select Game"
          className={styles.inputField}
        ></input>
      </div>
    </>
  );
}

export default UserTop;
