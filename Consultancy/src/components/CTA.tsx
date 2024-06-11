import { FunctionComponent } from "react";
import GroupIcon from "./GroupIcon";
import Property1primary from "./Property1primary";
import styles from "./CTA.module.css";

export type CTAType = {
  className?: string;
};

const CTA: FunctionComponent<CTAType> = ({ className = "" }) => {
  return (
    <div className={[styles.cta, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.instanceParent}>
          <GroupIcon group104="/group-1044@2x.png" />
          <div className={styles.polygonParent}>
            <img className={styles.frameChild} alt="" src="/polygon-11.svg" />
            <div className={styles.letsWork}>LET’S WORK</div>
          </div>
          <b className={styles.joinUsToday}>
            Join us today to help you grow your business
          </b>
        </div>
        <Property1primary
          contactUs="Contact Us"
          fiberManualRecord="/north-east1.svg"
          leading={false}
          trailing
          property1primaryBackgroundColor="#a3e635"
          contactUsColor="#1c1917"
        />
      </div>
    </div>
  );
};

export default CTA;
