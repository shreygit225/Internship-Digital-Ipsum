import { FunctionComponent, useMemo, type CSSProperties } from "react";
import EditorFormatQuote from "./EditorFormatQuote";

export type TestimonialsType = {
  className?: string;
  editorFormatQuoteEditorFo?: string;

  /** Style props */
  testimonialsTop?: CSSProperties["top"];
  testimonialsLeft?: CSSProperties["left"];
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
  editorFormatQuoteEditorFo,
  testimonialsTop,
  testimonialsLeft,
}) => {
  const testimonialsStyle: CSSProperties = useMemo(() => {
    return {
      top: testimonialsTop,
      left: testimonialsLeft,
    };
  }, [testimonialsTop, testimonialsLeft]);

  return (
    <div
      className={`absolute top-[6736px] left-[208px] w-[1128px] h-[520px] text-left text-base text-text-title font-heading-bold-heading-2-64 ${className}`}
      style={testimonialsStyle}
    >
      <div className="absolute top-[0px] left-[208px] bg-other-blue-light w-[920px] h-[476px]" />
      <div className="absolute h-[7.63%] w-[8.51%] top-[59.88%] right-[5.67%] bottom-[32.48%] left-[85.82%]">
        <img
          className="absolute h-full w-[41.67%] top-[0%] right-[0%] bottom-[0%] left-[58.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow-right.svg"
        />
        <img
          className="absolute h-full w-[41.67%] top-[0%] right-[58.33%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow-left.svg"
        />
      </div>
      <div className="absolute top-[337px] left-[520px] leading-[27px]">
        CEO of Patah Hati Agency
      </div>
      <b className="absolute top-[305px] left-[520px] leading-[24px]">
        Alber Riera
      </b>
      <b className="absolute top-[169px] left-[520px] text-13xl leading-[48px] inline-block w-[504px]">
        Now I an Manage my Remote Team in Easy Way
      </b>
      <EditorFormatQuote
        editorFormatQuoteEditorFo="/editor--format-quote@2x.png"
        editorFormatQuoteWidth="80px"
        editorFormatQuoteOverflow="unset"
        editorFormatQuoteHeight="80px"
        editorFormatQuotePosition="absolute"
        editorFormatQuoteTop="65px"
        editorFormatQuoteLeft="520px"
      />
      <div className="absolute top-[40px] left-[0px] bg-other-image-placeholder w-[400px] h-[480px]" />
    </div>
  );
};

export default Testimonials;
