import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ButtonPrimarySizeLargeTy from "../components/ButtonPrimarySizeLargeTy";
import ContactInfo from "../components/ContactInfo";
import FormMessage from "../components/FormMessage";
import Hero1 from "../components/Hero1";
import HomeContainer from "../components/HomeContainer";
import Header from "../components/Header";

const Contact: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/service");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  return (
    <div className="w-full relative bg-text-white h-[2904px] overflow-hidden text-center text-base text-text-body font-heading-bold-heading-6-16">
      <Footer backgroundTop="2424px" />
      <div className="absolute top-[2016px] left-[0px] w-[1440px] h-[408px]">
        <div className="absolute top-[0px] left-[0px] bg-secondary-light-green w-[1440px] h-[408px]" />
        <img
          className="absolute top-[64px] left-[122px] w-[1197px] h-[287px]"
          alt=""
          src="/elements.svg"
        />
        <div className="absolute top-[264px] left-[312px] w-[816px] h-16 text-left">
          <div className="absolute top-[0px] left-[0px] rounded-21xl bg-text-white w-[816px] h-16" />
          <ButtonPrimarySizeLargeTy
            activeButton="Send"
            buttonPrimarySizeLargeTyWidth="120px"
            buttonPrimarySizeLargeTyPosition="absolute"
            buttonPrimarySizeLargeTyTop="8px"
            buttonPrimarySizeLargeTyLeft="688px"
            buttonPrimarySizeLargeTyBackgroundColor="#2abb64"
            buttonPrimarySizeLargeTyBorder="unset"
            activeButtonColor="#fff"
          />
          <div className="absolute top-[16px] left-[32px] leading-[32px]">
            Your Email
          </div>
        </div>
        <div className="absolute top-[192px] left-[416px] leading-[32px] inline-block w-[608px]">
          Let's talk with us and more explore how we doing our works.
        </div>
        <b className="absolute top-[80px] left-[312px] text-45xl leading-[88px] inline-block text-text-title w-[816px]">
          Let Us Send You Offering
        </b>
      </div>
      <ContactInfo />
      <FormMessage />
      <Hero1 helloGetInTouchWithUs="Hello, Get in Touch with us!" />
      <HomeContainer
        onHomeTextClick={onHomeTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onServicesTextClick={onServicesTextClick}
        onBlogTextClick={onBlogTextClick}
      />
      <Header />
    </div>
  );
};

export default Contact;
