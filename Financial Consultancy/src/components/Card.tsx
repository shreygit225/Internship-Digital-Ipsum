import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
  theBestSupportSystemEver?: string;
  peopleHaveTheBestSupportS?: string;
  memoji?: string;
  jamesArthur?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propWidth2?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  theBestSupportSystemEver,
  peopleHaveTheBestSupportS,
  memoji,
  jamesArthur,
  propWidth,
  propWidth1,
  propAlignSelf,
  propFlex,
  propWidth2,
  propDisplay,
  propAlignSelf1,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const jamesArthurStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      display: propDisplay,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth2, propDisplay, propAlignSelf1]);

  return (
    <div className={[styles.card, className].join(" ")} style={cardStyle}>
      <div className={styles.paragraph}>
        <b className={styles.theBestSupport}>{theBestSupportSystemEver}</b>
        <div className={styles.peopleHaveThe}>{peopleHaveTheBestSupportS}</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.starParent}>
          <img className={styles.starIcon} alt="" src="/star.svg" />
          <img className={styles.starIcon} alt="" src="/star1.svg" />
          <img className={styles.starIcon} alt="" src="/star2.svg" />
          <img className={styles.starIcon} alt="" src="/star3.svg" />
          <img className={styles.starIcon} alt="" src="/star4.svg" />
        </div>
        <div className={styles.memojiParent} style={frameDiv2Style}>
          <img className={styles.memojiIcon} alt="" src={memoji} />
          <div className={styles.jamesArthurParent} style={frameDiv3Style}>
            <div className={styles.jamesArthur} style={jamesArthurStyle}>
              {jamesArthur}
            </div>
            <div className={styles.ceoOfBank}>CEO of Bank UX</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
