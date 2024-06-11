import { FunctionComponent } from "react";
import GroupIcon from "./GroupIcon";
import Component from "./Component";
import FrameComponent1 from "./FrameComponent1";
import styles from "./Services.module.css";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <div className={[styles.services, className].join(" ")}>
      <GroupIcon
        group104="/group-1042@2x.png"
        propWidth="2234px"
        propTop="-1348px"
        propLeft="calc(50% - 1117px)"
        propHeight="2234px"
      />
      <div className={styles.title}>
        <div className={styles.polygonParent}>
          <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
          <div className={styles.ourServices}>OUR SERVICES</div>
        </div>
        <div className={styles.bestOffersToSuitYourNeedsParent}>
          <b className={styles.bestOffersToContainer}>
            <p className={styles.bestOffersTo}>{`Best offers to `}</p>
            <p className={styles.bestOffersTo}>suit your needs</p>
          </b>
          <div className={styles.weAreA}>
            We are a full service financial consulting firm. We can handle it
            and give you the best advice. For us, client satisfaction is our key
            to further development
          </div>
        </div>
      </div>
      <div className={styles.services1}>
        <Component
          rectangle181="/rectangle-181@2x.png"
          freeConsultant="Free Consultant"
          leading={false}
          trailing
        />
        <div className={styles.div}>
          <FrameComponent1
            freeConsultant="Business Planning"
            frameDivFlex="1"
            frameDivAlignSelf="stretch"
          />
          <img className={styles.child} alt="" src="/rectangle-181@2x.png" />
        </div>
        <Component
          rectangle181="/rectangle-181@2x.png"
          freeConsultant="Investment"
          propBorderRadius="24px"
          leading={false}
          trailing
        />
      </div>
    </div>
  );
};

export default Services;
