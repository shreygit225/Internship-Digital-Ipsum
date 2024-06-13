import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TypeSecondarySizeMediumIType = {
  className?: string;
  medium?: string;

  /** Style props */
  typeSecondarySizeMediumIBorder?: CSSProperties["border"];
  typeSecondarySizeMediumIPadding?: CSSProperties["padding"];
  typeSecondarySizeMediumIPosition?: CSSProperties["position"];
  typeSecondarySizeMediumITop?: CSSProperties["top"];
  typeSecondarySizeMediumILeft?: CSSProperties["left"];
  typeSecondarySizeMediumIBackgroundColor?: CSSProperties["backgroundColor"];
  mediumColor?: CSSProperties["color"];
};

const TypeSecondarySizeMediumI: FunctionComponent<
  TypeSecondarySizeMediumIType
> = ({
  className = "",
  medium,
  typeSecondarySizeMediumIBorder,
  typeSecondarySizeMediumIPadding,
  typeSecondarySizeMediumIPosition,
  typeSecondarySizeMediumITop,
  typeSecondarySizeMediumILeft,
  typeSecondarySizeMediumIBackgroundColor,
  mediumColor,
}) => {
  const typeSecondarySizeMediumIStyle: CSSProperties = useMemo(() => {
    return {
      border: typeSecondarySizeMediumIBorder,
      padding: typeSecondarySizeMediumIPadding,
      position: typeSecondarySizeMediumIPosition,
      top: typeSecondarySizeMediumITop,
      left: typeSecondarySizeMediumILeft,
      backgroundColor: typeSecondarySizeMediumIBackgroundColor,
    };
  }, [
    typeSecondarySizeMediumIBorder,
    typeSecondarySizeMediumIPadding,
    typeSecondarySizeMediumIPosition,
    typeSecondarySizeMediumITop,
    typeSecondarySizeMediumILeft,
    typeSecondarySizeMediumIBackgroundColor,
  ]);

  const mediumStyle: CSSProperties = useMemo(() => {
    return {
      color: mediumColor,
    };
  }, [mediumColor]);

  return (
    <div
      className={`rounded-lg flex flex-row items-start justify-start py-3 px-8 text-left text-base text-text-body font-heading-bold-heading-2-64 border-[1px] border-solid border-text-body ${className}`}
      style={typeSecondarySizeMediumIStyle}
    >
      <b className="relative leading-[24px]" style={mediumStyle}>
        {medium}
      </b>
    </div>
  );
};

export default TypeSecondarySizeMediumI;
