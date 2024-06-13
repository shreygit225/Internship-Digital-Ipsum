import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FeaturedType = {
  className?: string;
  makeYourSiteMoreVisibleTo?: string;

  /** Style props */
  featuredTop?: CSSProperties["top"];
};

const Featured: FunctionComponent<FeaturedType> = ({
  className = "",
  makeYourSiteMoreVisibleTo,
  featuredTop,
}) => {
  const featuredStyle: CSSProperties = useMemo(() => {
    return {
      top: featuredTop,
    };
  }, [featuredTop]);

  return (
    <div
      className={`absolute top-[1968px] left-[0px] w-[1440px] h-[816px] text-left text-base text-text-title font-heading-bold-heading-2-64 ${className}`}
      style={featuredStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-other-blue-light w-[1440px] h-[816px]" />
      <div className="absolute top-[0px] left-[832px] bg-other-image-placeholder w-[608px] h-[816px]" />
      <div className="absolute top-[640px] left-[104px] w-[593px] h-8">
        <div className="absolute top-[2px] left-[56px] leading-[27px] inline-block w-[537px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        <div className="absolute top-[0px] left-[0px] w-8 h-8 text-text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslateblue w-8 h-8" />
          <b className="absolute top-[5px] left-[5px] leading-[24px] inline-block w-[25px] h-5">
            04
          </b>
        </div>
      </div>
      <div className="absolute top-[584px] left-[104px] w-[593px] h-8">
        <div className="absolute top-[2px] left-[56px] leading-[27px] inline-block w-[537px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        <div className="absolute top-[0px] left-[0px] w-8 h-8 text-text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslateblue w-8 h-8" />
          <b className="absolute top-[5px] left-[5px] leading-[24px] inline-block w-[25px] h-5">
            03
          </b>
        </div>
      </div>
      <div className="absolute top-[528px] left-[104px] w-[593px] h-8">
        <div className="absolute top-[2px] left-[56px] leading-[27px] inline-block w-[537px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        <div className="absolute top-[0px] left-[0px] w-8 h-8 text-text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslateblue w-8 h-8" />
          <b className="absolute top-[5px] left-[5px] leading-[24px] inline-block w-[21px] h-5">
            02
          </b>
        </div>
      </div>
      <div className="absolute top-[472px] left-[104px] w-[593px] h-8">
        <div className="absolute top-[2px] left-[56px] leading-[27px] inline-block w-[537px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        <div className="absolute top-[0px] left-[0px] w-8 h-8 text-text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslateblue w-8 h-8" />
          <b className="absolute top-[5px] left-[7px] leading-[24px] inline-block w-[17px] h-5">
            01
          </b>
        </div>
      </div>
      <b className="absolute top-[144px] left-[104px] text-45xl leading-[88px] inline-block w-[634px]">
        {makeYourSiteMoreVisibleTo}
      </b>
    </div>
  );
};

export default Featured;
