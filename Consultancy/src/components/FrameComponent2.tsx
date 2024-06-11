import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={[styles.anExtraordinaryCompanyThatParent, className].join(" ")}
    >
      <div className={styles.anExtraordinaryCompanyContainer}>
        <p className={styles.anExtraordinaryCompany}>
          An extraordinary company that has become
        </p>
        <p className={styles.anExtraordinaryCompany}>
          a partner in cooperation
        </p>
      </div>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <div className={styles.fictionalCompanyLogonextflo}>
            <img className={styles.markIcon} alt="" src="/mark@2x.png" />
            <div className={styles.logotype}>NEXTFlowS</div>
          </div>
          <div className={styles.fictionalCompanyLogoglobalc}>
            <img className={styles.markIcon1} alt="" src="/mark.svg" />
            <img
              className={styles.globalchartIcon}
              alt=""
              src="/globalchart.svg"
            />
          </div>
          <div className={styles.fictionalCompanyLogomarkets}>
            <img className={styles.markIcon1} alt="" src="/mark1.svg" />
            <b className={styles.marketsavy}>MarketSavy</b>
          </div>
          <div className={styles.fictionalCompanyLogobestban}>
            <img className={styles.markIcon1} alt="" src="/mark2.svg" />
            <img className={styles.logotypeIcon} alt="" src="/logotype.svg" />
          </div>
          <div className={styles.fictionalCompanyLogoepicdev}>
            <img className={styles.markIcon1} alt="" src="/mark3.svg" />
            <img className={styles.epicdevIcon} alt="" src="/epicdev.svg" />
          </div>
          <div className={styles.fictionalCompanyLogostartup}>
            <img className={styles.markIcon} alt="" src="/mark4@2x.png" />
            <img className={styles.starsupIcon} alt="" src="/starsup.svg" />
          </div>
          <div className={styles.fictionalCompanyLogopayscal}>
            <img className={styles.markIcon} alt="" src="/mark5@2x.png" />
            <img className={styles.payscaleIcon} alt="" src="/payscale.svg" />
          </div>
          <div className={styles.fictionalCompanyLogoteamtal}>
            <img className={styles.markIcon} alt="" src="/mark6@2x.png" />
            <img className={styles.teamtalkIcon} alt="" src="/teamtalk.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
