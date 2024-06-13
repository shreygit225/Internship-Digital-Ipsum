import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ButtonPrimarySizeLargeTy from "../components/ButtonPrimarySizeLargeTy";
import Blog1 from "../components/Blog1";
import Hero1 from "../components/Hero1";
import HomeContainer from "../components/HomeContainer";
import Header from "../components/Header";

const Blog: FunctionComponent = () => {
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

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="w-full relative bg-text-white h-[3056px] overflow-hidden text-center text-base text-text-body font-heading-bold-heading-6-16">
      <Footer backgroundTop="2576px" />
      <div className="absolute top-[2168px] left-[0px] w-[1440px] h-[408px]">
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
      <Blog1 />
      <Hero1
        helloGetInTouchWithUs="Read the latest News"
        propLeft="312px"
        propWidth="816px"
      />
      <HomeContainer
        onHomeTextClick={onHomeTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onServicesTextClick={onServicesTextClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <Header />
    </div>
  );
};

export default Blog;
