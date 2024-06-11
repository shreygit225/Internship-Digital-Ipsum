import { FunctionComponent } from "react";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke h-[4178px] overflow-hidden text-left text-33xl text-white font-poppins">
      <img
        className="absolute top-[2727.2px] left-[-286.8px] w-[906.5px] h-[914px] object-contain"
        alt=""
        src="/shape.svg"
      />
      <img
        className="absolute top-[1355.8px] left-[1116.5px] w-[444.8px] h-[665.7px]"
        alt=""
        src="/shape1.svg"
      />
      <img
        className="absolute top-[832px] left-[-435px] w-[593.5px] h-[666.1px] object-contain"
        alt=""
        src="/shape2.svg"
      />
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[691.5px] text-center text-[60px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[691.5px]"
          alt=""
          src="/bg.svg"
        />
        <div className="absolute top-[205px] left-[378px] flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="w-[685px] relative leading-[68px] capitalize font-semibold inline-block">
              Unlock Your Financial Potential with Us
            </div>
            <div className="w-[627px] relative text-lg leading-[28px] inline-block opacity-[0.6]">
              We offer a wide range of financial services to help you achieve
              your goals. From investment management to retirement planning
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[15px] text-left text-base text-darkslategray-100 font-archivo">
            <div className="rounded-xl bg-darkorange overflow-hidden flex flex-row items-center justify-start py-4 px-9">
              <b className="relative leading-[24px] uppercase">contact us</b>
            </div>
            <div className="w-[181px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-9 box-border text-darkslategray-500">
              <b className="relative leading-[24px] uppercase">learn more</b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] shadow-[-3px_19px_126.9px_rgba(220,_197,_163,_0.23)] [backdrop-filter:blur(183px)] w-[1440px] flex flex-row items-center justify-between py-5 px-28 box-border text-base">
        <div className="flex flex-row items-center justify-start gap-[7px] z-[0] text-2xl-3 font-inter">
          <img className="w-[20.2px] relative h-3" alt="" src="/mark.svg" />
          <div className="relative tracking-[0.02em] leading-[26.67px] font-black">
            Meryno
          </div>
        </div>
        <div className="flex flex-row items-center justify-end z-[1] text-darkslategray-500">
          <div className="flex flex-row items-center justify-end gap-[8px]">
            <div className="rounded-xl bg-white flex flex-row items-center justify-start py-2 px-[35px]">
              <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                Log in
              </div>
            </div>
            <div className="rounded-xl flex flex-row items-center justify-start py-2 px-[35px] text-white border-[1px] border-solid border-white">
              <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                Sign Up
              </div>
            </div>
          </div>
        </div>
        <div className="!m-[0] absolute top-[32px] left-[calc(50%_-_192.5px)] flex flex-row items-center justify-center gap-[32px] z-[2]">
          <div className="relative leading-[24px]">Personal Finance</div>
          <div className="relative leading-[24px]">Investments</div>
          <div className="relative leading-[24px]">Mortgages</div>
        </div>
      </div>
      <div className="absolute top-[776px] left-[112px] flex flex-row items-end justify-start gap-[103px] text-black">
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="w-[600px] relative leading-[60px] capitalize font-semibold inline-block">
              Why Choose Our Services?
            </div>
            <div className="w-[596px] relative text-lg leading-[28px] inline-block opacity-[0.6]">
              Our services provide numerous benefits that set us apart from our
              competitors. With our expertise and dedication, we deliver
              exceptional results and ensure customer satisfaction.
            </div>
          </div>
          <div className="w-[656px] flex flex-row items-start justify-start gap-[16px] text-center text-xl">
            <div className="flex-1 shadow-[-3px_19px_126.9px_rgba(167,_175,_172,_0.3)] rounded-3xl bg-white flex flex-col items-center justify-center p-6 gap-[24px]">
              <img
                className="w-20 relative h-20 overflow-hidden shrink-0"
                alt=""
                src="/icmoney.svg"
              />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Quality Solutions
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-darkslategray-300 opacity-[0.6]">
                  Our team of experts delivers high-quality solutions tailored
                  to your specific needs.
                </div>
              </div>
            </div>
            <div className="flex-1 [filter:drop-shadow(-3px_19px_126.9px_rgba(167,_175,_172,_0.3))] rounded-3xl flex flex-col items-center justify-center p-6 gap-[24px] border-[1px] border-solid border-silver">
              <img
                className="w-20 relative h-20 overflow-hidden shrink-0"
                alt=""
                src="/icsupport.svg"
              />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Customer Support
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-darkslategray-300 opacity-[0.6]">
                  We provide excellent customer support to ensure a smooth and
                  hassle-free experience.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[457px] relative h-[635px] object-cover"
          alt=""
          src="/image@2x.png"
        />
      </div>
      <div className="absolute top-[2376px] left-[112px] flex flex-col items-start justify-start gap-[64px] text-black">
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <div className="w-[703px] relative leading-[60px] capitalize font-semibold inline-block shrink-0">
            Streamline your financial journey with us
          </div>
          <div className="w-[482px] relative text-lg leading-[28px] inline-block shrink-0 opacity-[0.6]">
            Engaging with our financial services is a straightforward process.
            We provide you with the tools and guidance you need to achieve your
            financial goals.
          </div>
        </div>
        <div className="w-[1216px] flex flex-row items-start justify-start gap-[24px] text-center text-xl">
          <div className="flex-1 [filter:drop-shadow(-3px_19px_126.9px_rgba(167,_175,_172,_0.3))] rounded-3xl flex flex-col items-center justify-center p-6 border-[1px] border-solid border-silver">
            <div className="flex flex-col items-center justify-start gap-[22px]">
              <div className="rounded-3xl bg-darkslategray-200 flex flex-row items-start justify-start p-4">
                <img
                  className="w-[60px] relative h-[60px] overflow-hidden shrink-0"
                  alt=""
                  src="/icclocl.svg"
                />
              </div>
              <div className="w-[272px] flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Save Time
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-darkslategray-300 opacity-[0.6]">
                  Automate your financial tasks and spend more time doing what
                  you love
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[-3px_19px_126.9px_rgba(167,_175,_172,_0.3)] rounded-3xl bg-white flex flex-col items-center justify-center p-6">
            <div className="flex flex-col items-center justify-start gap-[22px]">
              <div className="rounded-3xl bg-darkslategray-200 flex flex-row items-start justify-start p-4">
                <img
                  className="w-[60px] relative h-[60px] overflow-hidden shrink-0"
                  alt=""
                  src="/icwallet.svg"
                />
              </div>
              <div className="w-[272px] flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Simplify Your Finances
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-darkslategray-300 opacity-[0.6]">
                  Manage your money with our intuitive and user-friendly
                  platform
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 [filter:drop-shadow(-3px_19px_126.9px_rgba(167,_175,_172,_0.3))] rounded-3xl flex flex-col items-center justify-center p-6 border-[1px] border-solid border-silver">
            <div className="flex flex-col items-center justify-start gap-[22px]">
              <div className="rounded-3xl bg-darkslategray-200 flex flex-row items-start justify-start p-4">
                <img
                  className="w-[60px] relative h-[60px] overflow-hidden shrink-0"
                  alt=""
                  src="/statistic.svg"
                />
              </div>
              <div className="w-[272px] flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Stay Organized
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-darkslategray-300 opacity-[0.6]">
                  Track your expenses, budgets, and goals all in one place in
                  our platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[1566px] left-[112px] w-[1216px] h-[549px]"
        alt=""
        src="/section-3.svg"
      />
      <div className="absolute top-[3051px] left-[0px] w-[1440px] h-[691px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[691px]"
          alt=""
          src="/bg1.svg"
        />
        <div className="absolute top-[238px] left-[112px] flex flex-col items-start justify-start gap-[32px]">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="w-[703px] relative leading-[60px] capitalize font-semibold inline-block">
              Solutions for your financial needs
            </div>
            <div className="w-[508px] relative text-lg leading-[28px] inline-block opacity-[0.6]">
              Contact us today to discuss your financial goals and find the best
              solutions.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[15px] text-base text-darkslategray-100 font-archivo">
            <div className="rounded-xl bg-darkorange overflow-hidden flex flex-row items-center justify-start py-4 px-9">
              <b className="relative leading-[24px] uppercase">Contact us</b>
            </div>
            <div className="w-[181px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-9 box-border text-darkslategray-500">
              <b className="relative leading-[24px] uppercase">learn more</b>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[110px] left-[740px] w-[591.5px] h-[511.6px]"
          alt=""
          src="/illustration.svg"
        />
      </div>
      <div className="absolute top-[3151px] left-[1098px] rounded-[50%] bg-teal w-3.5 h-3.5" />
      <div className="absolute top-[3742px] left-[0px] flex flex-col items-start justify-start text-2xl-3 font-inter">
        <div className="w-[1440px] bg-darkslategray-400 flex flex-row items-center justify-center py-[100px] px-0 box-border gap-[320px]">
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <div className="flex flex-row items-center justify-start gap-[7px]">
              <img className="w-[20.2px] relative h-3" alt="" src="/mark.svg" />
              <div className="relative tracking-[0.02em] leading-[26.67px] font-black">
                Meryno
              </div>
            </div>
            <div className="w-[183px] relative text-lg leading-[24px] font-poppins inline-block opacity-[0.6]">
              Meryno is the best finance assistent for organized your earning
              and cost
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[98px] text-xl">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[40px] font-semibold">
                Quicklinks
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-lg font-poppins">
                <div className="relative leading-[28px] opacity-[0.6]">
                  Personal Finance
                </div>
                <div className="relative leading-[28px] opacity-[0.6]">
                  Investments
                </div>
                <div className="relative leading-[28px] opacity-[0.6]">
                  Mortgages
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[40px] font-semibold">
                Company
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-lg font-poppins">
                <div className="relative leading-[28px] opacity-[0.6]">
                  Products
                </div>
                <div className="relative leading-[28px] opacity-[0.6]">
                  Services
                </div>
                <div className="relative leading-[28px] opacity-[0.6]">
                  Blog
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[40px] font-semibold">Help</div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-lg font-poppins">
                <div className="relative leading-[28px] opacity-[0.6]">
                  About Us
                </div>
                <div className="relative leading-[28px] opacity-[0.6]">
                  Payment
                </div>
                <div className="relative leading-[28px] opacity-[0.6]">
                  Legal
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[40px] font-semibold">
                Social
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-lg font-poppins">
                <div className="relative leading-[28px] opacity-[0.6]">
                  Instagram
                </div>
                <div className="relative leading-[28px] opacity-[0.6]">
                  Youtube
                </div>
                <div className="relative leading-[28px] opacity-[0.6]">
                  Facebook
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] bg-darkslategray-600 flex flex-row items-center justify-center py-6 px-1 box-border text-lg font-poppins">
          <div className="relative leading-[28px] opacity-[0.6]">{`© 2024 meryno. All rights reserved `}</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
