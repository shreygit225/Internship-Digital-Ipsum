import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ContainerHowWeWork from "../components/ContainerHowWeWork";
import Clients from "../components/Clients";
import BasicCard from "../components/BasicCard";
import ButtonPrimarySizeLargeTy from "../components/ButtonPrimarySizeLargeTy";
import Hero1 from "../components/Hero1";
import HomeContainer from "../components/HomeContainer";
import Header from "../components/Header";

const Service: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="w-full relative bg-text-white h-[4240px] overflow-hidden text-left text-base text-text-body font-heading-bold-heading-6-16">
      <Footer backgroundTop="3760px" />
      <CTA propTop="3336px" />
      <ContainerHowWeWork />
      <Clients
        logo4="/logo-4@2x.png"
        logo9="/logo-4@2x.png"
        logo6="/logo-4@2x.png"
        logo7="/logo-4@2x.png"
        logo8="/logo-4@2x.png"
        propTop="2144px"
      />
      <div className="absolute top-[1456px] left-[104px] w-[1232px] h-[568px]">
        <BasicCard
          notification="/notification-@2x.png"
          loremIpsumDolorSitAmetCon="Strategy Business"
          propLeft="936px"
          propBoxShadow="unset"
          propBackgroundColor="#e9eefb"
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
      <div className="absolute top-[1200px] left-[155px] w-[1128px] h-[136px] text-center">
        <div className="absolute top-[0px] left-[938px] w-[190px] h-[136px]">
          <div className="absolute top-[104px] left-[26px] leading-[32px]">
            Project completed
          </div>
          <b className="absolute top-[0px] left-[0px] text-53xl leading-[96px] text-text-title">
            425+
          </b>
        </div>
        <div className="absolute top-[0px] left-[671px] w-[101px] h-[136px]">
          <div className="absolute top-[104px] left-[0px] leading-[32px]">
            Office in USA
          </div>
          <b className="absolute top-[0px] left-[27px] text-53xl leading-[96px] text-text-title">{`8 `}</b>
        </div>
        <div className="absolute top-[0px] left-[334px] w-[150px] h-[136px]">
          <div className="absolute top-[104px] left-[0px] leading-[32px]">
            Years of experience
          </div>
          <b className="absolute top-[0px] left-[10px] text-53xl leading-[96px] text-text-title">
            12+
          </b>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[194px] h-[136px]">
          <div className="absolute top-[104px] left-[36px] leading-[32px]">
            Satisfied Clients
          </div>
          <b className="absolute top-[0px] left-[0px] text-53xl leading-[96px] text-text-title">
            200+
          </b>
        </div>
      </div>
      <div className="absolute top-[624px] left-[104px] w-[1232px] h-[456px] text-text-title">
        <div className="absolute top-[0px] left-[624px] rounded-3xl bg-other-image-placeholder w-[608px] h-[456px]" />
        <div className="absolute top-[368px] left-[208px] flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/checkmark.svg"
          />
          <div className="relative leading-[32px]">Guarantee</div>
        </div>
        <div className="absolute top-[312px] left-[208px] flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/checkmark.svg"
          />
          <div className="relative leading-[32px]">Efficient</div>
        </div>
        <div className="absolute top-[424px] left-[0px] flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/checkmark.svg"
          />
          <div className="relative leading-[32px]">Safe and secure</div>
        </div>
        <div className="absolute top-[368px] left-[0px] flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/checkmark.svg"
          />
          <div className="relative leading-[32px]">Full Support</div>
        </div>
        <div className="absolute top-[312px] left-[0px] flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/checkmark.svg"
          />
          <div className="relative leading-[32px]">On target</div>
        </div>
        <div className="absolute top-[216px] left-[0px] leading-[32px] text-text-body inline-block w-[608px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </div>
        <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block w-[608px]">
          Develop Ideas into Solutions for Your Business
        </b>
      </div>
      <Hero1
        helloGetInTouchWithUs="Our Best Services!"
        propLeft="312px"
        propWidth="816px"
      />
      <HomeContainer
        onHomeTextClick={onHomeTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onBlogTextClick={onBlogTextClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <Header />
    </div>
  );
};

export default Service;
