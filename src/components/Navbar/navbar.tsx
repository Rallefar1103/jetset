import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../assets/jetset/logo-removebg-preview.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" />
        <h3 className={styles.gradientJetset}>Jetset</h3>
      </div>
      <div className={styles.navLinks}>
        <Link href="#landing" className={styles.link}>
          Home
        </Link>
        <Link href="#pricing" className={styles.link}>
          Products
        </Link>
        <Link href="#favorites" className={styles.link}>
          Plans
        </Link>
        <Link href="#frequent-flyer" className={styles.link}>
          Frequent Flyer
        </Link>
        <Link href="#blog" className={styles.link}>
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
