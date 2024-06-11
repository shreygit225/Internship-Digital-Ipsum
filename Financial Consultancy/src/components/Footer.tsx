import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.veeniceParent, className].join(" ")}>
      <div className={styles.veenice}>© 2023 VeeNice</div>
      <div className={styles.frameParent}>
        <div className={styles.iconssocialWrapper}>
          <img className={styles.iconssocial} alt="" src="/iconssocial.svg" />
        </div>
        <div className={styles.iconssocialWrapper}>
          <img className={styles.iconssocial} alt="" src="/iconssocial1.svg" />
        </div>
        <div className={styles.iconssocialWrapper}>
          <img className={styles.iconssocial} alt="" src="/iconssocial2.svg" />
        </div>
        <div className={styles.iconssocialWrapper}>
          <img className={styles.iconssocial} alt="" src="/iconssocial3.svg" />
        </div>
        <div className={styles.iconssocialWrapper}>
          <img className={styles.iconssocial} alt="" src="/iconssocial4.svg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
