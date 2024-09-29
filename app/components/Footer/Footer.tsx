import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Sec2 from "./FooterSec2";
import Sec1 from "./FooterSec1";

const Footer = () => {
  return (
    <footer className="md:bg-trueGray-100 lg:flex lg:justify-between">
      <Sec1 />
      <Sec2 />
    </footer>
  );
};

export default Footer;
