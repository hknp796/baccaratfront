import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "../../styles/Sidebar.module.css";
import Link from "next/link";
function SideNavbar() {
  return (
    <div className={styles.navbar}>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link className={styles.logo}>
          <img src="/logo.png" className={styles.logo} />
        </Nav.Link>
        <Link href="/">

        <div className={styles.links}>
          {" "}
          <img src="/dashboard.png" className={styles.img} />
          Dashboard
        </div>
        </Link>
        <Nav.Link className={styles.links}>
          <img src="/loggerDash.png" className={styles.logdash} />
          Logger Dashboard
        </Nav.Link>
        <Nav.Link className={styles.links}>
          {" "}
          <img src="/logs.png" className={styles.img} />
          Logs
        </Nav.Link>
        <Link href="/pattern">

        <div className={styles.links}>
          <img src="/patternsSearch.png" className={styles.img} />
          Patterns & Search
        </div>
        </Link>

        <Nav.Link className={styles.links}>
          {" "}
          <img src="/AutoPattern.png" className={styles.img} />
          Auto Pattern Recognition
        </Nav.Link>
        <Nav.Link className={styles.links}>
          {" "}
          <img src="/CustomDataFeed.png" className={styles.img} />
          Custom Data Feed
        </Nav.Link>
        <Nav.Link className={styles.links}>
          {" "}
          <img src="/TriggersAndTheories.png" className={styles.img} />
          Triggers and Theories
        </Nav.Link>
        <Nav.Link className={styles.links}>
          {" "}
          <img src="/autoPlayer.png" className={styles.img} />
          Auto Player
        </Nav.Link>
        <Nav.Link className={styles.links}>
          {" "}
          <img src="/autoWage.png" className={styles.img} />
          Auto Wager Calculator
        </Nav.Link>
        <Nav.Link className={styles.links}>
          {" "}
          <img src="/MultipleMA.png" className={styles.img} />
          Multiple Moving Average
        </Nav.Link>
        <Nav.Link className={styles.links}>
          {" "}
          <img src="/WageCalculator.png" className={styles.img} />
          Wager Calculator
        </Nav.Link>
        <Nav.Link className={styles.links}>
          {" "}
          <img src="/ShoeSeperator.png" className={styles.img} />
          Shoe Seperator
        </Nav.Link>
        <Nav.Link className={styles.links}>
          {" "}
          <img src="/Statistics.png" className={styles.img} />
          Statistics
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default SideNavbar;
