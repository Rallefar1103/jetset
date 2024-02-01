import React from "react";
import styles from "./intro.module.css";
import Image from "next/image";

import Man from "../../assets/jetset/man-private-jet.jpg";
import ManWithSuitcase from "../../assets/jetset/landingPage/man-with-suitcase.jpg";
import ManWithLuggage from "../../assets/jetset/landingPage/man-with-luggage.jpg";
import ManWithSuit from "../../assets/jetset/landingPage/suited-up-guy.jpg";

const Intro = () => {
  return (
    <main className={styles.intro}>
      <div className={styles.introLeft}>
        <Image
          src={ManWithSuit}
          alt="intro-picture"
          className={styles.introPicture}
        />
      </div>
      <div className={styles.introRight}>
        <div className={styles.tagLine}>
          <p>
            For the frequent flyer who steps off as sharp as they stepped on
            Jetset will keep you feeling great all the way 👔
          </p>
        </div>
      </div>
    </main>
  );
};

export default Intro;
