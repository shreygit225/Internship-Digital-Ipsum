import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContactInfoCardType = {
  className?: string;
  gordonStreetLosAngeles?: string;
  prop?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const ContactInfoCard: FunctionComponent<ContactInfoCardType> = ({
  className = "",
  gordonStreetLosAngeles,
  prop,
  propLeft,
}) => {
  const contactInfoCardStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[80px] left-[832px] w-[400px] h-[544px] text-left text-base text-primary-green font-caption-12px-medium ${className}`}
      style={contactInfoCardStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-text-white w-[400px] h-[544px]" />
      <div className="absolute top-[496px] left-[24px] w-[264px] flex flex-row items-start justify-start gap-[6px]">
        <div className="relative leading-[150%] font-medium">See on Map</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrow-chevron-right1.svg"
        />
      </div>
      <div className="absolute top-[312px] left-[24px] flex flex-col items-start justify-start gap-[24px] text-text-title font-heading-bold-heading-6-16">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/location-map-marker-41.svg"
          />
          <div className="w-[304px] relative leading-[24px] font-semibold whitespace-pre-wrap inline-block shrink-0">
            {gordonStreetLosAngeles}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/phone1.svg"
          />
          <div className="w-[304px] relative leading-[24px] font-semibold inline-block shrink-0">
            {prop}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/mail1.svg"
          />
          <div className="w-[304px] relative leading-[24px] font-semibold inline-block shrink-0">
            contact@tanahairstudio.com
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-other-image-placeholder w-[400px] h-72" />
    </div>
  );
};

export default ContactInfoCard;
