import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ButtonPrimarySizeLargeTy from "../components/ButtonPrimarySizeLargeTy";
import Teams from "../components/Teams";
import Reviews from "../components/Reviews";
import Clients from "../components/Clients";
import Value from "../components/Value";
import BasicCard from "../components/BasicCard";
import Hero from "../components/Hero";
import HomeContainer from "../components/HomeContainer";
import Header from "../components/Header";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
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
    <div className="w-full relative bg-text-white h-[5184px] overflow-hidden text-center text-base text-text-body font-heading-bold-heading-6-16">
      <Footer />
      <div className="absolute top-[4296px] left-[0px] w-[1440px] h-[408px]">
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
      <Teams />
      <Reviews />
      <Clients
        logo4="/logo-4@2x.png"
        logo9="/logo-4@2x.png"
        logo6="/logo-4@2x.png"
        logo7="/logo-4@2x.png"
        logo8="/logo-4@2x.png"
      />
      <Value />
      <div className="absolute top-[896px] left-[104px] w-[1232px] h-[568px] text-left">
        <BasicCard
          notification="/notification-@2x.png"
          loremIpsumDolorSitAmetCon="Strategy Business"
        />
        <BasicCard
          notification="/notification-@2x.png"
          loremIpsumDolorSitAmetCon="Human Resources"
          propLeft="624px"
          propBoxShadow="unset"
          propBackgroundColor="#fff6dd"
        />
        <BasicCard
          notification="/notification-@2x.png"
          loremIpsumDolorSitAmetCon="Financial Consulting"
          propLeft="0px"
          propBoxShadow="unset"
          propBackgroundColor="#edf8f4"
        />
        <BasicCard
          notification="/notification-@2x.png"
          loremIpsumDolorSitAmetCon="Business Plan"
          propLeft="312px"
          propBoxShadow="0px 24px 160px rgba(0, 0, 0, 0.1)"
          propBackgroundColor="#fff0e9"
        />
        <ButtonPrimarySizeLargeTy
          activeButton="Learn More"
          buttonPrimarySizeLargeTyWidth="160px"
          buttonPrimarySizeLargeTyPosition="absolute"
          buttonPrimarySizeLargeTyTop="152px"
          buttonPrimarySizeLargeTyLeft="624px"
          buttonPrimarySizeLargeTyBackgroundColor="unset"
          buttonPrimarySizeLargeTyBorder="1px solid #2b6e46"
          activeButtonColor="#2b6e46"
        />
        <div className="absolute top-[0px] left-[624px] leading-[32px] inline-block w-[608px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-text-title w-[608px]">
          We help more than 200+ clients to grow their business
        </b>
      </div>
      <Hero />
      <HomeContainer
        onAboutUsTextClick={onAboutUsTextClick}
        onServicesTextClick={onServicesTextClick}
        onBlogTextClick={onBlogTextClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <Header />
    </div>
  );
};

export default Home;
