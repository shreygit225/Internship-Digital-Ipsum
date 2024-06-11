import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import AboutUs from "../components/AboutUs";
import ValueCompany from "../components/ValueCompany";
import Services from "../components/Services";
import GroupIcon from "../components/GroupIcon";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import CTA from "../components/CTA";
import BottomFooter from "../components/BottomFooter";
import Footer from "../components/Footer";
import styles from "./Dekstop.module.css";

const Dekstop: FunctionComponent = () => {
  return (
    <div className={styles.dekstop}>
      <div className={styles.heropage}>
        <Header />
        <div className={styles.heropage1}>
          <FrameComponent3 />
          <FrameComponent2 />
        </div>
      </div>
      <AboutUs />
      <ValueCompany />
      <Services />
      <div className={styles.testimonials}>
        <GroupIcon
          group104="/group-1043@2x.png"
          propWidth="1696px"
          propTop="691px"
          propLeft="calc(50% - 848px)"
          propHeight="1696px"
        />
        <FrameComponent1 />
        <FrameComponent />
      </div>
      <CTA />
      <div className={styles.footer}>
        <BottomFooter />
        <Footer />
      </div>
    </div>
  );
};

export default Dekstop;
