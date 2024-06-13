import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TypeSecondarySizeLargeIcType = {
  className?: string;
  large?: string;

  /** Style props */
  typeSecondarySizeLargeIcBorder?: CSSProperties["border"];
  typeSecondarySizeLargeIcPadding?: CSSProperties["padding"];
  typeSecondarySizeLargeIcPosition?: CSSProperties["position"];
  typeSecondarySizeLargeIcTop?: CSSProperties["top"];
  typeSecondarySizeLargeIcLeft?: CSSProperties["left"];
  typeSecondarySizeLargeIcBackgroundColor?: CSSProperties["backgroundColor"];
  largeColor?: CSSProperties["color"];
};

const TypeSecondarySizeLargeIc: FunctionComponent<
  TypeSecondarySizeLargeIcType
> = ({
  className = "",
  large,
  typeSecondarySizeLargeIcBorder,
  typeSecondarySizeLargeIcPadding,
  typeSecondarySizeLargeIcPosition,
  typeSecondarySizeLargeIcTop,
  typeSecondarySizeLargeIcLeft,
  typeSecondarySizeLargeIcBackgroundColor,
  largeColor,
}) => {
  const typeSecondarySizeLargeIcStyle: CSSProperties = useMemo(() => {
    return {
      border: typeSecondarySizeLargeIcBorder,
      padding: typeSecondarySizeLargeIcPadding,
      position: typeSecondarySizeLargeIcPosition,
      top: typeSecondarySizeLargeIcTop,
      left: typeSecondarySizeLargeIcLeft,
      backgroundColor: typeSecondarySizeLargeIcBackgroundColor,
    };
  }, [
    typeSecondarySizeLargeIcBorder,
    typeSecondarySizeLargeIcPadding,
    typeSecondarySizeLargeIcPosition,
    typeSecondarySizeLargeIcTop,
    typeSecondarySizeLargeIcLeft,
    typeSecondarySizeLargeIcBackgroundColor,
  ]);

  const largeStyle: CSSProperties = useMemo(() => {
    return {
      color: largeColor,
    };
  }, [largeColor]);

  return (
    <div
      className={`rounded-lg flex flex-row items-start justify-start py-4 px-10 text-left text-base text-text-body font-heading-bold-heading-2-64 border-[1px] border-solid border-text-body ${className}`}
      style={typeSecondarySizeLargeIcStyle}
    >
      <b className="relative leading-[24px]" style={largeStyle}>
        {large}
      </b>
    </div>
  );
};

export default TypeSecondarySizeLargeIc;
