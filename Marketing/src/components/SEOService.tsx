import { FunctionComponent } from "react";
import FullServiceSolution from "./FullServiceSolution";

export type SEOServiceType = {
  className?: string;
};

const SEOService: FunctionComponent<SEOServiceType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[640px] left-[104px] w-[1264px] h-[610px] text-left text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
    >
      <FullServiceSolution fullServiceSolution="Full Service Solution" />
      <FullServiceSolution
        fullServiceSolution="Fast Results"
        propLeft="624px"
      />
      <div className="absolute top-[152px] left-[656px] leading-[27px] inline-block w-[504px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text. Lorem
        Ipsum has been the industry's standard dummy text.
      </div>
      <b className="absolute top-[0px] left-[656px] text-29xl leading-[63.98px] inline-block text-text-title w-[608px]">
        <p className="m-0">{`SEO Services `}</p>
        <p className="m-0">for your Business.</p>
      </b>
      <div className="absolute top-[0px] left-[0px] w-[608px] h-[610px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[608px] h-[610px]" />
      </div>
    </div>
  );
};

export default SEOService;
