"use client";

import React, { useState } from "react";
import styles from "./subscriptionSlider.module.css";

type SubscriptionPlan = "monthly" | "quarterly";

const SubscriptionSlider = () => {
  const [activePlan, setActivePlan] = useState<SubscriptionPlan>("monthly");

  const handlePlanChange = (plan: SubscriptionPlan) => {
    setActivePlan(plan);
  };
  return (
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
  );
};

export default SubscriptionSlider;
