import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Property1primary from "./Property1primary";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  freeConsultant?: string;

  /** Style props */
  frameDivFlex?: CSSProperties["flex"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  freeConsultant,
  frameDivFlex,
  frameDivAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
    };
  }, [frameDivFlex]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameGroup} style={frameDiv1Style}>
        <div className={styles.freeConsultantParent}>
          <b className={styles.freeConsultant}>{freeConsultant}</b>
          <div className={styles.weOfferExpert}>
            we offer expert financial advice and guidance to help you make
            informed decisions about your money
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.checkCircleParent}>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
            <div className={styles.accessToExpertise}>Access to Expertise</div>
          </div>
          <div className={styles.checkCircleParent}>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
            <div className={styles.accessToExpertise}>Increased Efficiency</div>
          </div>
          <div className={styles.checkCircleParent}>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
            <div className={styles.accessToExpertise}>
              Improved Decision-Making
            </div>
          </div>
        </div>
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
  );
};

export default FrameComponent1;
