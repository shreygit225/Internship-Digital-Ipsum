import { FunctionComponent } from "react";
import ProcessCard from "./ProcessCard";

export type ContainerHowWeWorkType = {
  className?: string;
};

const ContainerHowWeWork: FunctionComponent<ContainerHowWeWorkType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[2648px] left-[104px] w-[1232px] h-[568px] text-left text-base text-text-disable font-heading-bold-heading-6-16 ${className}`}
    >
      <ProcessCard prop="01" planning="Planning" />
      <ProcessCard
        prop="02"
        planning="Brainstorming"
        propLeft="416px"
        propLeft1="297px"
      />
      <ProcessCard
        prop="03"
        planning="Targeting"
        propLeft="832px"
        propLeft1="294px"
      />
      <img
        className="absolute top-[360px] left-[384px] w-12 h-12"
        alt=""
        src="/action-button.svg"
      />
      <img
        className="absolute top-[360px] left-[800px] w-12 h-12"
        alt=""
        src="/action-button.svg"
      />
      <div className="absolute top-[40px] left-[624px] leading-[32px] text-text-body inline-block w-[608px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <b className="absolute top-[40px] left-[0px] text-29xl leading-[63.98px] inline-block text-text-title w-[608px]">
        Get Started with Our Process
      </b>
      <b className="absolute top-[0px] left-[0px] leading-[24px] inline-block text-primary-orange w-[608px]">
        How We Work
      </b>
    </div>
  );
};

export default ContainerHowWeWork;
