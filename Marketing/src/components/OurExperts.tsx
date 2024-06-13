import { FunctionComponent } from "react";
import Expert from "./Expert";
import EditorFormatQuote from "./EditorFormatQuote";

export type OurExpertsType = {
  className?: string;
};

const OurExperts: FunctionComponent<OurExpertsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[4209px] left-[104px] w-[1232px] h-[1376px] text-center text-base text-text-white font-heading-bold-heading-2-64 ${className}`}
    >
      <Expert analytics="Analytics" georgeJordan="George Jordan" />
      <Expert
        analytics="Marketing Manager"
        georgeJordan="Nathasa Wiiliam"
        propLeft="416px"
      />
      <Expert
        analytics="SEO Experts"
        georgeJordan="Andre Silva"
        propLeft="0px"
      />
      <div className="absolute top-[184px] left-[0px] w-[1232px] h-[584px]">
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[400px] h-[584px]" />
        <div className="absolute top-[0px] left-[400px] bg-other-blue-light w-[832px] h-[584px]" />
        <div className="absolute top-[80px] left-[520px] w-[608px] h-[392px] text-left">
          <div className="absolute top-[352px] left-[0px] w-[152px] h-10">
            <div className="absolute top-[0px] left-[112px] w-10 h-10">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-secondary-orange w-10 h-10" />
              <b className="absolute top-[10px] left-[13px] tracking-[0.01em] leading-[120%]">
                Ig
              </b>
            </div>
            <div className="absolute top-[0px] left-[56px] w-10 h-10">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-secondary-orange w-10 h-10" />
              <b className="absolute top-[10px] left-[10px] tracking-[0.01em] leading-[120%]">
                Be
              </b>
            </div>
            <div className="absolute top-[0px] left-[0px] w-10 h-10">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-secondary-orange w-10 h-10" />
              <b className="absolute top-[10px] left-[11px] tracking-[0.01em] leading-[120%]">
                Dr
              </b>
            </div>
          </div>
          <b className="absolute top-[128px] left-[0px] text-13xl leading-[48px] inline-block text-text-title w-[608px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
            aliquam pulvinar sed augue aliquam.
          </b>
          <EditorFormatQuote
            editorFormatQuoteEditorFo="/editor--format-quote@2x.png"
            editorFormatQuoteWidth="80px"
            editorFormatQuoteOverflow="unset"
            editorFormatQuoteHeight="80px"
            editorFormatQuotePosition="absolute"
            editorFormatQuoteTop="0px"
            editorFormatQuoteLeft="0px"
          />
        </div>
        <b className="absolute top-[535px] left-[32px] leading-[32px] inline-block w-[336px] h-[33px]">
          CEO
        </b>
        <b className="absolute top-[480px] left-[24px] text-13xl leading-[48px] inline-block w-[352px] h-[47px]">
          Christian Solomon
        </b>
        <img
          className="absolute top-[0px] left-[0px] w-[400px] h-[456px]"
          alt=""
          src="/image-placeholder.svg"
        />
      </div>
      <div className="absolute top-[82px] left-[280px] leading-[27px] text-text-body inline-block w-[672px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <p className="m-0">
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <b className="absolute top-[0px] left-[276px] text-29xl leading-[63.98px] inline-block text-text-title w-[680px]">
        Meet our Experts
      </b>
    </div>
  );
};

export default OurExperts;
