import { FunctionComponent } from "react";
import Property1primary from "./Property1primary";
import GroupIcon from "./GroupIcon";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.empowerYourFinancesWithOurParent}>
        <div className={styles.empowerYourFinancesContainer}>
          <p className={styles.empower}>{`Empower `}</p>
          <p className={styles.yourFinancesWithOurGuidanc}>
            <i className={styles.yourFinances}>
              <span className={styles.yourFinances1}>Your Finances</span>
            </i>
            <span>
              <i className={styles.yourFinances}>{` `}</i>
              <span className={styles.withOurGuidance}>with Our Guidance</span>
            </span>
          </p>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.unlockTheFullPotentialOfYParent}>
            <div className={styles.unlockTheFullContainer}>
              <p className={styles.yourFinancesWithOurGuidanc}>
                <span>
                  <span className={styles.unlockTheFull}>
                    Unlock the full potential
                  </span>
                </span>
                <span>
                  <span>{` `}</span>
                </span>
              </p>
              <p className={styles.ofYourFinancesWithOurExpe}>
                <span>
                  <span>of your finances with our expert consulting</span>
                </span>
              </p>
            </div>
            <Property1primary
              contactUs="Trial for 7 days"
              fiberManualRecord="/north-east.svg"
              leading={false}
              trailing
              property1primaryBackgroundColor="rgba(255, 255, 255, 0.2)"
              contactUsColor="#fff"
            />
          </div>
          <div className={styles.unlockTheFullPotentialOfYParent}>
            <div className={styles.unlockTheFullContainer}>
              <span className={styles.seeHowOur}>See how our expert</span>
              <span className={styles.consultingServicesCan}>
                {" "}
                consulting services can help you optimize your finances
              </span>
            </div>
            <Property1primary
              contactUs="Watch video"
              fiberManualRecord="/north-east.svg"
              leading={false}
              trailing
              property1primaryBackgroundColor="rgba(255, 255, 255, 0.2)"
              contactUsColor="#fff"
            />
          </div>
        </div>
        <GroupIcon
          group104="/group-104@2x.png"
          propWidth="1086px"
          propTop="-825px"
          propLeft="-558px"
          propHeight="1086px"
        />
      </div>
      <GroupIcon
        group104="/group-104@2x.png"
        propWidth="1086px"
        propTop="651px"
        propLeft="720px"
        propHeight="1086px"
      />
      <div className={styles.frameChild} />
    </div>
  );
};

export default FrameComponent3;
