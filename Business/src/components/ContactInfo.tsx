import { FunctionComponent } from "react";
import ContactInfoCard from "./ContactInfoCard";

export type ContactInfoType = {
  className?: string;
};

const ContactInfo: FunctionComponent<ContactInfoType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[1272px] left-[104px] w-[1232px] h-[624px] text-left text-base text-primary-green font-caption-12px-medium ${className}`}
    >
      <ContactInfoCard
        gordonStreetLosAngeles="4321  Gordon Street, Los Angeles"
        prop="+44 812 5893 22"
      />
      <ContactInfoCard
        gordonStreetLosAngeles="102 Staples Center, Los Angeles"
        prop="+1 812 5893 33"
        propLeft="416px"
      />
      <ContactInfoCard
        gordonStreetLosAngeles="221 b Santa Monica, Los Angeles"
        prop="+44 812 5893 22"
        propLeft="0px"
      />
      <div className="absolute top-[0px] left-[311px] flex flex-row items-start justify-start gap-[40px] text-5xl text-text-disable font-heading-bold-heading-6-16">
        <div className="flex flex-col items-center justify-center gap-[6px] text-text-title">
          <div className="relative leading-[32px] font-semibold">
            Los Angeles
          </div>
          <div className="w-[104px] relative bg-primary-green h-0.5" />
        </div>
        <div className="flex flex-col items-center justify-center gap-[6px]">
          <div className="relative leading-[32px]">New York</div>
          <div className="w-[104px] relative h-0.5" />
        </div>
        <div className="flex flex-col items-center justify-center gap-[6px]">
          <div className="relative leading-[32px]">Houston</div>
          <div className="w-[104px] relative h-0.5" />
        </div>
        <div className="flex flex-col items-center justify-center gap-[6px]">
          <div className="relative leading-[32px]">Washington</div>
          <div className="w-[104px] relative h-0.5" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
