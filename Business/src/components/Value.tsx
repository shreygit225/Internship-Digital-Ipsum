import { FunctionComponent } from "react";
import ButtonPrimarySizeLargeTy from "./ButtonPrimarySizeLargeTy";

export type ValueType = {
  className?: string;
};

const Value: FunctionComponent<ValueType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1584px] left-[104px] w-[1232px] h-[824px] text-left text-base text-text-body font-heading-bold-heading-6-16 ${className}`}
    >
      <ButtonPrimarySizeLargeTy
        activeButton="Learn More"
        buttonPrimarySizeLargeTyWidth="160px"
        buttonPrimarySizeLargeTyPosition="absolute"
        buttonPrimarySizeLargeTyTop="776px"
        buttonPrimarySizeLargeTyLeft="0px"
        buttonPrimarySizeLargeTyBackgroundColor="unset"
        buttonPrimarySizeLargeTyBorder="1px solid #2b6e46"
        activeButtonColor="#2b6e46"
      />
      <div className="absolute top-[336px] left-[624px] rounded-3xl bg-other-image-placeholder w-[608px] h-[400px]" />
      <div className="absolute top-[608px] left-[0px] leading-[32px] inline-block w-[504px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="absolute top-[168px] left-[624px] leading-[32px] inline-block w-[608px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="absolute top-[168px] left-[0px] rounded-3xl bg-other-image-placeholder w-[504px] h-[400px]" />
      <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-text-title w-[712px]">
        Build a Business Foundation for Good Initial Planning
      </b>
    </div>
  );
};

export default Value;
