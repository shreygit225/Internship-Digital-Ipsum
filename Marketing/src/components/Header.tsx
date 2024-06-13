import { FunctionComponent } from "react";
import TypeSecondarySizeLargeIc from "./TypeSecondarySizeLargeIc";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1440px] h-[900px] text-left text-base text-text-white font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[1440px] h-[900px]" />
      <div className="absolute top-[0px] left-[832px] bg-other-image-placeholder w-[608px] h-[900px]" />
      <TypeSecondarySizeLargeIc
        large="Get Started"
        typeSecondarySizeLargeIcBorder="unset"
        typeSecondarySizeLargeIcPadding="16px 40px"
        typeSecondarySizeLargeIcPosition="absolute"
        typeSecondarySizeLargeIcTop="633px"
        typeSecondarySizeLargeIcLeft="104px"
        typeSecondarySizeLargeIcBackgroundColor="#fa6d24"
        largeColor="#fff"
      />
      <div className="absolute top-[539px] left-[104px] leading-[27px] inline-block w-[623px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis
      </div>
      <b className="absolute top-[251px] left-[104px] text-45xl leading-[88px] inline-block w-[624px]">
        Professional SEO Services for Your Website
      </b>
      <div className="absolute top-[211px] left-[104px] leading-[24px] font-medium">
        SEO EXPERT AGENCY
      </div>
    </div>
  );
};

export default Header;
