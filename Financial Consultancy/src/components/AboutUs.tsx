import { FunctionComponent } from "react";
import GroupIcon from "./GroupIcon";
import Property1primary from "./Property1primary";
import Paragraph from "./Paragraph";
import styles from "./AboutUs.module.css";

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {
  return (
    <div className={[styles.aboutUs, className].join(" ")}>
      <div className={styles.title}>
        <GroupIcon
          group104="/group-104.svg"
          propWidth="1176px"
          propTop="-642px"
          propLeft="743px"
          propHeight="1176px"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.polygonParent}>
              <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
              <div className={styles.aboutUs1}>ABOUT US</div>
            </div>
            <div className={styles.findOutWhyPeopleIsTheGoParent}>
              <b className={styles.findOutWhy}>
                Find out why People is the go-to consultant for business growth
              </b>
              <div className={styles.chosenByThousands}>
                chosen by thousands of satisfied customers
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
        <div className={styles.vectorParent}>
          <img className={styles.frameItem} alt="" src="/rectangle-178.svg" />
          <img className={styles.maskGroupIcon} alt="" />
          <div className={styles.emojiEventsParent}>
            <img
              className={styles.emojiEventsIcon}
              alt=""
              src="/emoji-events.svg"
            />
            <div className={styles.yearParent}>
              <img className={styles.yearIcon} alt="" src="/15-year.svg" />
              <img
                className={styles.experiencesIcon}
                alt=""
                src="/experiences.svg"
              />
            </div>
          </div>
          <div className={styles.accountCircleParent}>
            <img
              className={styles.accountCircleIcon}
              alt=""
              src="/account-circle.svg"
            />
            <div className={styles.johnJamesBondParent}>
              <img
                className={styles.johnJamesBond}
                alt=""
                src="/john-james-bond.svg"
              />
              <img
                className={styles.ceoVeeniceIcon}
                alt=""
                src="/ceo-veenice.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.value}>
        <div className={styles.paragraphParent}>
          <Paragraph
            sell="/sell.svg"
            freeConsultantsForFreeUse="Free consultants for free user"
          />
          <Paragraph
            sell="/rocket.svg"
            freeConsultantsForFreeUse="Consultation is open 24 hours"
          />
        </div>
        <div className={styles.paragraphParent}>
          <Paragraph
            sell="/diamond.svg"
            freeConsultantsForFreeUse="Professional consulting "
          />
          <Paragraph
            sell="/light-mode.svg"
            freeConsultantsForFreeUse="Consultation guidance"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
