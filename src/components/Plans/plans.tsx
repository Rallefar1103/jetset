"use client";

import React, { useState } from "react";
import styles from "./plans.module.css";
import SubscriptionSlider from "./subscriptionSlider";

type SubscriptionPlan = "monthly" | "quarterly";

const Plans = () => {
  const [activePlan, setActivePlan] = useState<SubscriptionPlan>("monthly"); // default to monthly

  const handlePlanChange = (plan: SubscriptionPlan) => {
    setActivePlan(plan);
  };
  return (
    <main className={styles.plans}>
      <div className={styles.intro}>
        <h3>
          Select a plan based on your needs and travel frequency. We offer plans
          ranging from gold, emerald, and diamond
        </h3>
      </div>
      <div className={styles.sliderContainer}>
        <button
          type="button"
          className={`${styles.sliderBtn} ${
            activePlan === "monthly" ? styles.active : ""
          }`}
          onClick={() => handlePlanChange("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`${styles.sliderBtn} ${
            activePlan === "quarterly" ? styles.active : ""
          }`}
          onClick={() => handlePlanChange("quarterly")}
        >
          Quarterly
        </button>
      </div>
    </main>
  );
};

export default Plans;
