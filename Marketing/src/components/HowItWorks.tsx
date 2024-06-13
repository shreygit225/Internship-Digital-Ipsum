import { FunctionComponent } from "react";
import Launch from "./Launch";

export type HowItWorksType = {
  className?: string;
};

const HowItWorks: FunctionComponent<HowItWorksType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2344px] left-[104px] w-[1232px] h-[729px] text-left text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[0px] left-[624px] w-[608px] h-[729px]">
        <Launch launch="Launch" prop="04" />
        <Launch launch="Development" prop="03" propTop="333px" propLeft="0px" />
        <Launch
          launch="SEO Research"
          prop="02"
          propTop="80px"
          propLeft="312px"
        />
        <div className="absolute top-[0px] left-[0px] w-[296px] h-[316px] text-text-white">
          <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[296px] h-[316px]" />
          <div className="absolute top-[176px] left-[24px] leading-[27px] inline-block w-[248px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
          <b className="absolute top-[136px] left-[24px] text-5xl leading-[32px]">
            Ideas
          </b>
          <b className="absolute top-[52px] left-[221px] text-29xl leading-[63.98px] text-primary-80-blue">
            01
          </b>
          <div className="absolute top-[56px] left-[24px] w-14 h-14">
            <div className="absolute top-[0px] left-[0px] bg-text-white w-14 h-14" />
          </div>
        </div>
      </div>
      <div className="absolute top-[253px] left-[0px] w-[504px] h-[223px]">
        <div className="absolute top-[88px] left-[0px] leading-[27px] inline-block w-[504px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non viverra egestas ultrices in turpis. Vel in nulla porttitor pellentesque lacus ridiculus tellus enim, in. Dignissim elementum ac, consectetur nulla ultricies. Sed pellentesque lobortis nisi porttitor. Facilisis cursus iaculis quis amet magna pretium morbi. `}</div>
        <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-text-title w-[312px]">
          How it Works
        </b>
      </div>
    </div>
  );
};

export default HowItWorks;
