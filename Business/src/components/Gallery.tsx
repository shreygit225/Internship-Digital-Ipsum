import { FunctionComponent } from "react";

export type GalleryType = {
  className?: string;
};

const Gallery: FunctionComponent<GalleryType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3920px] left-[0px] w-[1440px] h-[1240px] text-center text-29xl text-text-title font-heading-bold-heading-6-16 ${className}`}
    >
      <div className="absolute top-[600px] left-[972px] bg-other-image-placeholder w-[468px] h-[480px]" />
      <div className="absolute top-[760px] left-[484px] bg-other-image-placeholder w-[472px] h-[480px]" />
      <div className="absolute top-[600px] left-[0px] bg-other-image-placeholder w-[468px] h-[480px]" />
      <div className="absolute top-[104px] left-[972px] bg-other-image-placeholder w-[468px] h-[480px]" />
      <div className="absolute top-[104px] left-[484px] bg-other-image-placeholder w-[472px] h-[640px]" />
      <div className="absolute top-[104px] left-[0px] bg-other-image-placeholder w-[468px] h-[480px]" />
      <b className="absolute top-[0px] left-[364px] leading-[63.98px] inline-block w-[712px]">
        Get to Know Us
      </b>
    </div>
  );
};

export default Gallery;
