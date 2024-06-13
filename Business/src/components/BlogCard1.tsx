import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BlogCard1Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const BlogCard1: FunctionComponent<BlogCard1Type> = ({
  className = "",
  propTop,
  propLeft,
}) => {
  const blogCardStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`absolute top-[856px] left-[936px] bg-text-white w-[296px] h-[480px] flex flex-col items-start justify-start text-left text-sm text-text-white font-caption-12px-medium ${className}`}
      style={blogCardStyle}
    >
      <div className="self-stretch flex-1 rounded-t-lg rounded-b-none bg-other-image-placeholder flex flex-row items-start justify-start p-6">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[77px] rounded-lg bg-primary-green flex flex-row items-center justify-center py-[1.5px] px-2 box-border">
            <div className="relative leading-[150%]">Label</div>
          </div>
          <div className="self-stretch flex-1 relative" />
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-lg bg-text-white flex flex-col items-start justify-start p-4 gap-[16px] text-base text-text-title font-heading-bold-heading-6-16">
        <b className="self-stretch relative text-5xl leading-[32px]">
          Lorem Ipsum Dolor Sit Amet Consectur
        </b>
        <div className="self-stretch relative leading-[32px] text-text-body">
          Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
        <div className="w-[264px] relative h-4" />
        <div className="self-stretch flex flex-row items-start justify-start text-primary-green font-caption-12px-medium">
          <div className="flex-1 flex flex-row items-start justify-start gap-[6px]">
            <div className="relative leading-[150%] font-medium">Read More</div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/arrow-chevron-right1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard1;
