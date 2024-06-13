import { FunctionComponent } from "react";
import TeamCard from "./TeamCard";

export type TeamType = {
  className?: string;
};

const Team: FunctionComponent<TeamType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3216px] left-[104px] w-[1232px] h-[584px] ${className}`}
    >
      <TeamCard propTop="88px" propLeft="832px" propBoxShadow="unset" />
      <TeamCard propTop="88px" propLeft="0px" propBoxShadow="unset" />
      <TeamCard propTop="88px" propLeft="416px" propBoxShadow="unset" />
      <div className="absolute top-[0px] left-[1112px] w-[120px] h-10">
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
    </div>
  );
};

export default Team;
