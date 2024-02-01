import React from "react";
import styles from "./products.module.css";
import Image from "next/image";
import Lumin from "../../assets/jetset/products/lumin-skincare.jpg";
import WomenFragrance from "../../assets/jetset/products/fragrance-women.jpg";
import ToothbrushSet from "../../assets/jetset/products/toothbrush-and-paste.jpg";
import WomenSkinCareSet from "../../assets/jetset/products/skincare-set-women.jpg";
import MenFragrance from "../../assets/jetset/products/vertos-fragrance.jpg";

const Products = () => {
  return (
    <main className={styles.products}>
      <div className={styles.title}>
        <h2>Jetset Products</h2>
        <h3>
          We handpick only the{" "}
          <span className={styles.quality}>highest quality</span>
        </h3>
      </div>
      <div className={styles.productOneContainer}>
        <div className={styles.pOneLeft}>
          <Image src={Lumin} alt="product-img" className={styles.productImg} />
        </div>
        <div className={styles.pOneRight}></div>
      </div>
      <div className={styles.productTwoContainer}>
        <div className={styles.pTwoLeft}></div>
        <div className={styles.pTwoRight}>
          <Image
            src={WomenFragrance}
            alt="product-img"
            className={styles.productImg}
          />
        </div>
      </div>
      <div className={styles.productThreeContainer}>
        <div className={styles.pThreeLeft}>
          <Image
            src={ToothbrushSet}
            alt="product-img"
            className={styles.productImg}
          />
        </div>
        <div className={styles.pThreeRight}></div>
      </div>
      <div className={styles.productFourContainer}>
        <div className={styles.pFourLeft}></div>
        <div className={styles.pFourRight}>
          <Image
            src={WomenSkinCareSet}
            alt="product-img"
            className={styles.productImg}
          />
        </div>
      </div>
      <div className={styles.productFiveContainer}>
        <div className={styles.pFiveLeft}>
          <Image
            src={MenFragrance}
            alt="product-img"
            className={styles.productImg}
          />
        </div>
        <div className={styles.pFiveRight}></div>
      </div>
    </main>
  );
};

export default Products;