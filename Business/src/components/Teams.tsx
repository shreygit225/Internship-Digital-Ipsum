import { FunctionComponent } from "react";
import TeamCard from "./TeamCard";

export type TeamsType = {
  className?: string;
};

const Teams: FunctionComponent<TeamsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3576px] left-[104px] w-[1232px] h-[600px] text-left text-sm text-text-body font-heading-bold-heading-6-16 ${className}`}
    >
      <TeamCard />
      <TeamCard propTop="104px" propLeft="0px" propBoxShadow="unset" />
      <TeamCard
        propTop="104px"
        propLeft="416px"
        propBoxShadow="0px 24px 160px rgba(0, 0, 0, 0.1)"
      />
      <div className="absolute top-[16px] left-[1112px] w-[120px] h-10">
        <img
          className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
          alt=""
          src="/arrow-left.svg"
        />
        <img
          className="absolute top-[0px] left-[80px] w-10 h-10 overflow-hidden"
          alt=""
          src="/arrow-right.svg"
        />
      </div>
      <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-text-title w-[712px]">
        Our Team
      </b>
    </div>
  );
};

export default Teams;
