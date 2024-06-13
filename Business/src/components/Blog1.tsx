import { FunctionComponent } from "react";
import ButtonPrimarySizeLargeTy from "./ButtonPrimarySizeLargeTy";
import BlogCard1 from "./BlogCard1";
import BlogCard from "./BlogCard";

export type Blog1Type = {
  className?: string;
};

const Blog1: FunctionComponent<Blog1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[624px] left-[104px] w-[1232px] h-[1424px] text-left text-sm text-text-white font-caption-12px-medium ${className}`}
    >
      <ButtonPrimarySizeLargeTy
        activeButton="Load More"
        buttonPrimarySizeLargeTyWidth="160px"
        buttonPrimarySizeLargeTyPosition="absolute"
        buttonPrimarySizeLargeTyTop="1376px"
        buttonPrimarySizeLargeTyLeft="536px"
        buttonPrimarySizeLargeTyBackgroundColor="unset"
        buttonPrimarySizeLargeTyBorder="1px solid #2b6e46"
        activeButtonColor="#2b6e46"
      />
      <BlogCard1 />
      <BlogCard1 propTop="856px" propLeft="624px" />
      <BlogCard1 propTop="856px" propLeft="312px" />
      <BlogCard1 propTop="856px" propLeft="0px" />
      <BlogCard1 propTop="360px" propLeft="936px" />
      <BlogCard1 propTop="360px" propLeft="624px" />
      <BlogCard1 propTop="360px" propLeft="312px" />
      <BlogCard1 propTop="360px" propLeft="0px" />
      <BlogCard />
      <BlogCard propLeft="0px" />
    </div>
  );
};

export default Blog1;
