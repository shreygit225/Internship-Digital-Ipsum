import { FunctionComponent } from "react";
import styles from "./BottomFooter.module.css";

export type BottomFooterType = {
  className?: string;
};

const BottomFooter: FunctionComponent<BottomFooterType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.paragraphParent, className].join(" ")}>
      <div className={styles.paragraph}>
        <div className={styles.paragraph1}>
          <div className={styles.logo}>
            <img className={styles.markIcon} alt="" src="/mark7@2x.png" />
            <b className={styles.veenice}>VeeNice</b>
          </div>
          <div className={styles.financeConsultingFirm}>
            Finance consulting firm dedicated to helping businesses and
            individuals achieve their financial goals.
          </div>
        </div>
      </div>
      <div className={styles.footerMenu}>
        <div className={styles.footerMenu1}>
          <div className={styles.service}>Service</div>
          <div className={styles.navMenu}>
            <div className={styles.consultant}>Consultant</div>
            <div className={styles.consultant}>Bussines Plan</div>
            <div className={styles.consultant}>{`Finance Plan `}</div>
            <div className={styles.consultant}>Investment</div>
          </div>
        </div>
        <div className={styles.footerMenu1}>
          <div className={styles.service}>Resource</div>
          <div className={styles.navMenu}>
            <div className={styles.consultant}>Testimonials</div>
            <div className={styles.consultant}>Community</div>
            <div className={styles.consultant}>Careers</div>
            <div className={styles.consultant}>Add Schedule</div>
            <div className={styles.consultant}>Partner</div>
          </div>
        </div>
        <div className={styles.footerMenu1}>
          <div className={styles.service}>Blog</div>
          <div className={styles.navMenu}>
            <div className={styles.consultant}>Company</div>
            <div className={styles.consultant}>{`Tips & Tricks`}</div>
            <div className={styles.consultant}>Trending</div>
            <div className={styles.consultant}>Article</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
