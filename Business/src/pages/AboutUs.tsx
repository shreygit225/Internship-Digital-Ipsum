import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import CEO from "../components/CEO";
import ButtonPrimarySizeLargeTy from "../components/ButtonPrimarySizeLargeTy";
import Mission from "../components/Mission";
import Hero1 from "../components/Hero1";
import HomeContainer from "../components/HomeContainer";
import Header from "../components/Header";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/service");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="w-full relative bg-text-white h-[6184px] overflow-hidden text-left text-base text-text-body font-heading-bold-heading-6-16">
      <Footer backgroundTop="5704px" />
      <CTA />
      <Gallery />
      <Team />
      <CEO />
      <div className="absolute top-[1848px] left-[104px] w-[1232px] h-[872px]">
        <ButtonPrimarySizeLargeTy
          activeButton="Contact  us"
          buttonPrimarySizeLargeTyWidth="160px"
          buttonPrimarySizeLargeTyPosition="absolute"
          buttonPrimarySizeLargeTyTop="384px"
          buttonPrimarySizeLargeTyLeft="0px"
          buttonPrimarySizeLargeTyBackgroundColor="unset"
          buttonPrimarySizeLargeTyBorder="1px solid #2b6e46"
          activeButtonColor="#2b6e46"
        />
        <div className="absolute top-[472px] left-[0px] rounded-3xl bg-other-image-placeholder w-[1232px] h-[400px]" />
        <div className="absolute top-[216px] left-[0px] leading-[32px] inline-block w-[504px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="absolute top-[216px] left-[624px] leading-[32px] inline-block w-[608px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-text-title w-[712px]">
          We are the best service business to grow your business
        </b>
      </div>
      <Mission ourMission="Our Mission" />
      <Mission
        ourMission="Our VIsion"
        propTop="1216px"
        propLeft="0px"
        propLeft1="624px"
        propLeft2="624px"
        propLeft3="624px"
        propLeft4="624px"
        propLeft5="624px"
        propLeft6="624px"
        propLeft7="624px"
      />
      <Hero1
        helloGetInTouchWithUs="Who Are We"
        propLeft="312px"
        propWidth="816px"
      />
      <HomeContainer
        onHomeTextClick={onHomeTextClick}
        onServicesTextClick={onServicesTextClick}
        onBlogTextClick={onBlogTextClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <Header />
      <b className="absolute top-[2792px] left-[728px] text-29xl leading-[63.98px] inline-block text-text-title w-[712px]">
        Herman Defoe
      </b>
    </div>
  );
};

export default AboutUs;
