import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.polygonParent}>
          <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
          <div className={styles.testimonials}>TESTIMONIALS</div>
        </div>
        <div className={styles.hearWhatOurClientsHaveToParent}>
          <b className={styles.hearWhatOur}>
            Hear What Our Clients Have to Say About Us
          </b>
          <div className={styles.buildingTrustAnd}>
            Building Trust and Credibility with Positive Feedback"
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <img className={styles.frameInner} alt="" src="/frame-165@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-164@2x.png" />
        <img className={styles.frameChild1} alt="" src="/frame-162@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent1;
