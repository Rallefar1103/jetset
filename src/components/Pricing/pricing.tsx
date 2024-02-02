import React from "react";
import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <main className={styles.pricing}>
      <div className={styles.chooseYourPlan}>
        <h2>Choose your Jetset subscription plan</h2>
        <h3>Select based on your travel preferences</h3>
      </div>
      <div className={styles.slider}></div>
      <div className={styles.subscriptions}>
        <div className={styles.subscriptionCard}></div>
      </div>
    </main>
  );
};

export default Pricing;
