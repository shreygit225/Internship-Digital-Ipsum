import { FunctionComponent } from "react";
import Card from "./Card";
import styles from "./FrameComponent4.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.cardParent}>
        <Card
          theBestSupportSystemEver="“The best support system ever!”"
          peopleHaveTheBestSupportS="People have the best support system ever. They will respond to you within a minute. It also has lots of features that you can take advantage of. The most effective consulting firm you can try"
          memoji="/memoji@2x.png"
          jamesArthur="James Arthur"
        />
        <Card
          theBestSupportSystemEver="“The keys to my success”"
          peopleHaveTheBestSupportS="people company, the company...."
          memoji="/memoji@2x.png"
          jamesArthur="Mayang"
          propWidth="223px"
          propWidth1="unset"
          propAlignSelf="stretch"
          propFlex="1"
          propWidth2="unset"
          propDisplay="unset"
          propAlignSelf1="stretch"
        />
        <div className={styles.card}>
          <div className={styles.paragraph}>
            <b className={styles.goodAndSolid}>“Good and solid team!”</b>
            <div className={styles.peopleCompanyThe}>
              people company, the company....
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.starParent}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <img className={styles.starIcon} alt="" src="/star1.svg" />
              <img className={styles.starIcon} alt="" src="/star2.svg" />
              <img className={styles.starIcon} alt="" src="/star3.svg" />
              <img className={styles.starIcon} alt="" src="/star4.svg" />
            </div>
            <div className={styles.memojiParent}>
              <div className={styles.memoji}>
                <img
                  className={styles.memojiIcon}
                  alt=""
                  src="/memoji@2x.png"
                />
              </div>
              <div className={styles.bagusSParent}>
                <div className={styles.bagusS}>Bagus S</div>
                <div className={styles.ceoOfBank}>CEO of Bank UX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.button}>
          <div className={styles.frameContainer}>
            <div className={styles.frame}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.frame1}>
              <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
