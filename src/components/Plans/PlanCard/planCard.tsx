"use client";

import React from "react";
import styles from "./planCard.module.css";
import Image from "next/image";
import CheckMarkIcon from "../../../assets/jetset/check-mark.png";
import { SubscriptionTier, PlanType } from "@/data/subscriptions";

type PlanCardProps = {
  plan: SubscriptionTier;
  type: PlanType;
};

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  type,
}: {
  plan: SubscriptionTier;
  type: PlanType;
}) => {
  const typeToClassMap: { [key in PlanType]: string } = {
    Gold: styles.goldCard,
    Diamond: styles.diamondCard,
    Emerald: styles.emeraldCard,
  };
  const cardClass = `${styles.planCard} ${typeToClassMap[type]}`;
  return (
    <div className={cardClass}>
      <div className={styles.planTierRow}>
        <div className={styles.planTier}>
          <h3>{plan.tier}</h3>
        </div>
      </div>
      <div className={styles.planText}>
        <p>{plan.description}</p>
      </div>
      <div className={styles.planPrice}>
        <h2>
          {plan.price}
          <span className={styles.monthly}>/month</span>
        </h2>
      </div>
      <div className={styles.whiteHorizontalBar}></div>
      <div className={styles.planBenefits}>
        {plan.benefits.map((benefit: string, index: number) => (
          <div key={index} className={styles.benefitRow}>
            <Image
              src={CheckMarkIcon}
              alt="checkmark-icon"
              className={styles.checkMarkIcon}
            />
            <p>{benefit}</p>
          </div>
        ))}
      </div>
      <div className={styles.planCallToAction}>
        <button type="button" className={styles.getStartedBtn}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
