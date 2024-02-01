import React from "react";
import styles from "./introWoman.module.css";
import Image from "next/image";
import Woman from "../../assets/jetset/landingPage/woman-pink-blazer-travel.jpg";

const IntroWoman = () => {
  return (
    <main className={styles.intro}>
      <div className={styles.introLeft}>
        <div className={styles.tagLine}>
          <p>
            For the woman whose journey is as refined as her taste, Jetset is
            the epitome of quality on-the-go ⭐
          </p>
        </div>
      </div>
      <div className={styles.introRight}>
        <Image
          src={Woman}
          alt="intro-picture"
          className={styles.introPicture}
        />
      </div>
    </main>
  );
};

export default IntroWoman;
