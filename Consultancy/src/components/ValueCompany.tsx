import { FunctionComponent } from "react";
import GroupIcon from "./GroupIcon";
import FrameComponent from "./FrameComponent";
import styles from "./ValueCompany.module.css";

export type ValueCompanyType = {
  className?: string;
};

const ValueCompany: FunctionComponent<ValueCompanyType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.valueCompany, className].join(" ")}>
      <GroupIcon
        group104="/circle@2x.png"
        propWidth="849px"
        propTop="617px"
        propLeft="979px"
        propHeight="849px"
      />
      <div className={styles.title}>
        <div className={styles.polygonParent}>
          <img className={styles.frameChild} alt="" src="/polygon-11.svg" />
          <div className={styles.ourValue}>OUR VALUE</div>
        </div>
        <div className={styles.peopleIsTheWorldsLargestWrapper}>
          <b className={styles.peopleIsThe}>
            People is the world's largest financial consulting platform
          </b>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <b className={styles.b}>56+</b>
            <div className={styles.companyBranchesIn}>
              Company branches in various countries
            </div>
          </div>
          <div className={styles.component2}>
            <div className={styles.component2Child} />
            <img
              className={styles.component2Item}
              alt=""
              src="/frame-170@2x.png"
            />
            <img
              className={styles.component2Inner}
              alt=""
              src="/frame-177@2x.png"
            />
            <img className={styles.frameIcon} alt="" src="/frame-176@2x.png" />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <b className={styles.b}>25</b>
            <div className={styles.companyBranchesIn}>
              Stand consistently and provide solutions
            </div>
          </div>
          <div className={styles.component2}>
            <div className={styles.component2Child} />
            <img
              className={styles.component2Child1}
              alt=""
              src="/frame-170@2x.png"
            />
            <img
              className={styles.component2Child2}
              alt=""
              src="/frame-177@2x.png"
            />
            <img
              className={styles.component2Child3}
              alt=""
              src="/frame-176@2x.png"
            />
          </div>
        </div>
        <FrameComponent
          prop="99+"
          companyBranchesInVariousC="Good reviews from various world clients"
          frame170="/frame-165@2x.png"
          frame177="/frame-164@2x.png"
          frame176="/frame-162@2x.png"
          component2BorderRadius="24px"
          rectangleDivTop="26px"
          frameIconTop="133px"
          frameIconLeft="13px"
          frameIconBorderRadius="40px"
          frameIconWidth="323.7px"
          frameIconHeight="104px"
          frameIconTop1="62.8px"
          frameIconLeft1="-22px"
          frameIconBorderRadius1="40px"
          frameIconWidth1="323px"
          frameIconHeight1="98.8px"
          frameIconTop2="0.4px"
          frameIconLeft2="21.2px"
          frameIconBorderRadius2="40px"
          frameIconWidth2="325.5px"
          frameIconHeight2="123.3px"
        />
      </div>
      <GroupIcon
        group104="/group-1041@2x.png"
        propWidth="767px"
        propTop="-386px"
        propLeft="-397px"
        propHeight="767px"
      />
    </div>
  );
};

export default ValueCompany;
