import { FunctionComponent } from "react";
import ButtonPrimarySizeLargeTy from "./ButtonPrimarySizeLargeTy";
import Form from "./Form";

export type FormMessageType = {
  className?: string;
};

const FormMessage: FunctionComponent<FormMessageType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[624px] left-[312px] w-[816px] h-[528px] text-left text-base text-text-in-field font-heading-bold-heading-6-16 ${className}`}
    >
      <ButtonPrimarySizeLargeTy
        activeButton="Send"
        buttonPrimarySizeLargeTyWidth="160px"
        buttonPrimarySizeLargeTyPosition="absolute"
        buttonPrimarySizeLargeTyTop="480px"
        buttonPrimarySizeLargeTyLeft="0px"
        buttonPrimarySizeLargeTyBackgroundColor="#2abb64"
        buttonPrimarySizeLargeTyBorder="unset"
        activeButtonColor="#fff"
      />
      <Form
        inputYourSubjectInHere="Input your subject in here"
        subject="Subject"
      />
      <Form
        inputYourSubjectInHere="Input your email in here"
        subject="Your Email "
        propLeft="280px"
        propWidth="256px"
        propWidth1="256px"
        propWidth2="256px"
      />
      <Form
        inputYourSubjectInHere="Input your full name in here"
        subject="Full Name "
        propLeft="0px"
        propWidth="264px"
        propWidth1="264px"
        propWidth2="264px"
      />
      <div className="absolute top-[0px] left-[0px] w-[816px] h-72">
        <div className="absolute top-[48px] left-[0px] w-[816px] h-60">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-text-white box-border w-[816px] h-60 border-[1px] border-solid border-text-disable" />
          <div className="absolute top-[16px] left-[16px] leading-[32px]">
            Input your message in here
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[32px] text-text-body">
          Your Message
        </div>
      </div>
    </div>
  );
};

export default FormMessage;
