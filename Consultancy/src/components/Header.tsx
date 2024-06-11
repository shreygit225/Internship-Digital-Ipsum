import { FunctionComponent } from "react";
import Property1primary from "./Property1primary";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div className={[styles.nabar, className].join(" ")}>
      <div className={styles.logoParent}>
        <div className={styles.logo}>
          <img className={styles.markIcon} alt="" src="/mark@2x.png" />
          <b className={styles.veenice}>VeeNice</b>
        </div>
        <div className={styles.navMenu}>
          <div className={styles.home}>Home</div>
          <div className={styles.about}>About</div>
          <div className={styles.serviceParent}>
            <div className={styles.service}>Service</div>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
          <div className={styles.about}>Blog</div>
        </div>
      </div>
      <div className={styles.nabarInner}>
        <Property1primary
          contactUs="Sign Up"
          fiberManualRecord="/login.svg"
          leading={false}
          trailing
          property1primaryBackgroundColor="#a3e635"
          contactUsColor="#000"
        />
      </div>
    </div>
  );
};

export default Header;
