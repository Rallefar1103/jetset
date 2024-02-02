import React from "react";
import styles from "./frequentFlyer.module.css";

const FrequentFlyer = () => {
  return (
    <main className={styles.pricing}>
      <div className={styles.chooseYourPlan}>
        <h2>The Frequent Flyer Program</h2>
        <h3>Select a plan based on your travel needs</h3>
      </div>
      <button type="button" className={styles.exploreBtn}>
        Explore plans
      </button>
    </main>
  );
};

export default FrequentFlyer;
