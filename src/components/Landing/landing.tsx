import React from "react";
import Image from "next/image";
import styles from "./landing.module.css";

import BackgroundImg from "../../assets/jetset/airplane-sky1.jpg";
import LandingPagePicture from "../../assets/jetset/landingPage/woman-with-luggage.png";

const Landing = () => {
  return (
    <main className={styles.landing}>
      <div className={styles.leftLandingPage}>
        <div className={styles.sloganContainer}>
          <h2>First-Class Comfort in Your Carry-On ✨ </h2>
          <h3>
            Because Every Journey Deserves a{" "}
            <span className={styles.emphasized}>Great Start</span>
          </h3>
        </div>
        <div className={styles.learnMoreBtn}></div>
      </div>
      <div className={styles.rightLandingPage}>
        <div className={styles.pictureContainer}>
          <Image
            src={LandingPagePicture}
            className={styles.landingPagePicture}
            alt="landingPagePic"
          />
        </div>
      </div>
    </main>
  );
};

export default Landing;
