"use client";

import React from "react";
import styles from "./plans.module.css";
import SubscriptionSlider from "./SubscriptionSlider/subscriptionSlider";
import Image from "next/image";
import CheckMarkIcon from "../../assets/jetset/check-mark.png";

const Plans = () => {
  return (
    <main className={styles.plans}>
      <div className={styles.intro}>
        <h3>
          Tailor Your Travels and Define Your Journey with Our Gold, Diamond, or
          Emerald Travel Plans.
        </h3>
      </div>
      <SubscriptionSlider />
      <div className={styles.plansContainer}>
        <div className={styles.planCard}>
          <div className={styles.planTierRow}>
            <div className={styles.planTier}>
              <h3>Gold</h3>
            </div>
          </div>

          <div className={styles.planText}>
            <p>
              Embark on your travel adventures with the Gold Plan, designed for
              the smart traveler who values both quality and economy.
            </p>
          </div>
          <div className={styles.planPrice}>
            <h2>
              $2500<span className={styles.monthly}>/month</span>
            </h2>
          </div>
          <div className={styles.whiteHorizontalBar}></div>
          <div className={styles.planBenefits}>
            <div className={styles.benefitRow}>
              <Image
                src={CheckMarkIcon}
                alt="checkmark-icon"
                className={styles.checkMarkIcon}
              />
              <p>Benefit </p>
            </div>
          </div>
          <div className={styles.planCallToAction}></div>
        </div>
      </div>
    </main>
  );
};

export default Plans;
