"use client";

import React from "react";
import styles from "./plans.module.css";
import SubscriptionSlider from "./SubscriptionSlider/subscriptionSlider";
import Image from "next/image";

import subscriptionTiers from "@/data/subscriptions";
import PlanCard from "./PlanCard/planCard";

const Plans = () => {
  return (
    <main className={styles.plans}>
      <div className={styles.intro}>
        <h3>Tailor Your Travels and Define Your Journey</h3>
      </div>
      <SubscriptionSlider />
      <div className={styles.plansContainer}>
        {subscriptionTiers.map((sub, index) => (
          <PlanCard plan={sub} key={index} type={sub.tier} />
        ))}
      </div>
    </main>
  );
};

export default Plans;
