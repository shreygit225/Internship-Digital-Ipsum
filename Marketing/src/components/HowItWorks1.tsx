import { FunctionComponent } from "react";

export type HowItWorks1Type = {
  className?: string;
};

const HowItWorks1: FunctionComponent<HowItWorks1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[2178px] left-[104px] w-[1232px] h-[1078px] text-center text-5xl text-text-body font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[294px] left-[0px] w-[1232px] h-[784px]">
        <div className="absolute top-[0px] left-[312px] w-[920px] h-[784px]">
          <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[920px] h-[784px]" />
        </div>
        <div className="absolute top-[600px] left-[0px] w-[296px] h-[184px]">
          <div className="absolute top-[0px] left-[0px] bg-other-blue-light w-[296px] h-[184px]" />
          <b className="absolute top-[120px] left-[90px] leading-[32px]">
            Marketing
          </b>
          <b className="absolute top-[24px] left-[99px] text-53xl leading-[96px] text-primary-60-blue">
            04
          </b>
        </div>
        <div className="absolute top-[400px] left-[0px] w-[296px] h-[184px]">
          <div className="absolute top-[0px] left-[0px] bg-other-blue-light w-[296px] h-[184px]" />
          <b className="absolute top-[120px] left-[93px] leading-[32px]">
            Analytics
          </b>
          <b className="absolute top-[24px] left-[101px] text-53xl leading-[96px] text-primary-60-blue">
            03
          </b>
        </div>
        <div className="absolute top-[200px] left-[0px] w-[296px] h-[184px]">
          <div className="absolute top-[0px] left-[0px] bg-other-blue-light w-[296px] h-[184px]" />
          <b className="absolute top-[120px] left-[73px] leading-[32px]">
            Optimization
          </b>
          <b className="absolute top-[24px] left-[102px] text-53xl leading-[96px] text-primary-60-blue">
            02
          </b>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[296px] h-[184px] text-text-white">
          <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[296px] h-[184px]" />
          <b className="absolute top-[120px] left-[77px] leading-[32px]">
            Copywriting
          </b>
          <b className="absolute top-[24px] left-[110px] text-53xl leading-[96px]">
            01
          </b>
        </div>
      </div>
      <div className="absolute top-[160px] left-[345px] text-base leading-[27px] inline-block w-[542px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </div>
      <b className="absolute top-[0px] left-[243px] text-29xl leading-[63.98px] inline-block text-text-title w-[746px]">{`Our Solutions to Help Your Business Grow `}</b>
    </div>
  );
};

export default HowItWorks1;
