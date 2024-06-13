import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MainHeaderType = {
  className?: string;
  aboutUs?: string;
  aboutUs1?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const MainHeader: FunctionComponent<MainHeaderType> = ({
  className = "",
  aboutUs,
  aboutUs1,
  propWidth,
}) => {
  const breadcrumbsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1440px] h-[480px] text-left text-45xl text-text-white font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[1440px] h-[480px]" />
      <b className="absolute top-[251px] left-[104px] leading-[88px] inline-block w-[636px]">
        {aboutUs}
      </b>
      <div
        className="absolute top-[211px] left-[104px] w-[147px] h-6 text-base"
        style={breadcrumbsStyle}
      >
        <div className="absolute top-[0px] left-[77px] leading-[24px] font-medium">
          {aboutUs1}
        </div>
        <img
          className="absolute top-[4px] left-[53px] w-4 h-4 overflow-hidden"
          alt=""
          src="/arrow-chevron-right.svg"
        />
        <div className="absolute top-[0px] left-[0px] leading-[24px] font-medium">
          Home
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
