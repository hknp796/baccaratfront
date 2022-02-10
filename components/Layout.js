import React from "react";
import SideNavbar from "./Dashboard/SideNavbar";
import styles from '../styles/Sidebar.module.css'
function Layout({ children }) {
  return (
    <div className={styles.sidebar}>
      <SideNavbar />{children}
    </div>
  );
}

export default Layout;
