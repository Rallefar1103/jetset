import React from "react";
import styles from "./callToAction.module.css";
import Image from "next/image";
import ClassyWoman from "../../assets/jetset/woman-exiting-plane.jpeg";
import ClassyMan from "../../assets/jetset/private-jet-man.jpeg";

const CallToAction = () => {
  return (
    <main className={styles.callToAction}>
      <div className={styles.classyLeft}>
        <Image
          src={ClassyWoman}
          alt="classy-img"
          className={styles.classyImgWoman}
        />
        <Image
          src={ClassyMan}
          alt="classy-img"
          className={styles.classyImgMan}
        />
      </div>
      <div className={styles.classyRight}>
        <p>
          {" "}
          Ready for <span className={styles.takeOff}>Takeoff?</span> <br />
          Get Your Jetset Bag Today!{" "}
        </p>
        <button type="button" className={styles.signUpBtn}>
          Sign up
        </button>
      </div>
    </main>
  );
};

export default CallToAction;
