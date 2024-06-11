import { FunctionComponent } from "react";
import styles from "./Paragraph.module.css";

export type ParagraphType = {
  className?: string;
  sell?: string;
  freeConsultantsForFreeUse?: string;
};

const Paragraph: FunctionComponent<ParagraphType> = ({
  className = "",
  sell,
  freeConsultantsForFreeUse,
}) => {
  return (
    <div className={[styles.paragraph, className].join(" ")}>
      <img className={styles.sellIcon} alt="" src={sell} />
      <div className={styles.freeConsultantsForFreeUserParent}>
        <b className={styles.freeConsultantsFor}>{freeConsultantsForFreeUse}</b>
        <div className={styles.weHaveSet}>
          We have set free service for 3 days for new users who want to try our
          service before starting subscription
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
