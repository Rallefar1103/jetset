import React from "react";
import styles from "./frequentFlyer.module.css";

const FrequentFlyer = () => {
  return (
    <main className={styles.pricing}>
      <div className={styles.chooseYourPlan}>
        <h2>The Frequent Flyer Program</h2>
        <h3>
          Your Passport to a <span className={styles.jetset}>Jetset</span>{" "}
          Lifestyle
        </h3>
      </div>
      <button type="button" className={styles.exploreBtn}>
        Explore plans
      </button>
    </main>
  );
};

export default FrequentFlyer;
