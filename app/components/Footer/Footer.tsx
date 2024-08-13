import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h4 className={styles.heading}>Main</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="/success-stories">Stories</a>
          </li>
          <li className={styles.listItem}>
            {/* <Link href="/team">
              <p>Team</p>
            </Link> */}
            <a href="/team">Team</a>
          </li>
          <li className={styles.listItem}>
            <a href="/courses">Courses</a>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h4 className={styles.heading}>Blog</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#">Popular Blog</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">New Blogs</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Most Read</a>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h4 className={styles.heading}>Contact</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="/contacts">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
