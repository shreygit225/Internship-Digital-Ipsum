import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BlogCardType = {
  className?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const BlogCard: FunctionComponent<BlogCardType> = ({
  className = "",
  propLeft,
}) => {
  const blogCard1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[0px] left-[624px] w-[608px] h-[280px] flex flex-row items-start justify-start text-left text-sm text-text-white font-caption-12px-medium ${className}`}
      style={blogCard1Style}
    >
      <div className="self-stretch flex-1 rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-other-image-placeholder flex flex-row items-start justify-start p-6">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[77px] rounded-lg bg-primary-green flex flex-row items-center justify-center py-[1.5px] px-2 box-border">
            <div className="relative leading-[150%]">Design</div>
          </div>
          <div className="self-stretch flex-1 relative" />
        </div>
      </div>
      <div className="self-stretch w-[352px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-text-white flex flex-col items-start justify-start p-6 box-border gap-[16px] text-5xl text-text-title font-heading-bold-heading-6-16">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
          <b className="self-stretch relative leading-[32px]">
            Lorem ipsum dolor sit amet, con sec tetur adipiscing elit, sed.
          </b>
          <div className="self-stretch relative text-base leading-[32px] text-text-body">
            Lorem ipsum dolor sit amet, con sec tetur adipiscing elit, sed do
            eiusmod.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[6px] text-base text-primary-green">
          <div className="relative leading-[24px] font-semibold">Read More</div>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/arrow-chevron-right.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
