import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ItemTextStateParagraphType = {
  className?: string;
  placeTextHere?: string;
  placeTextHere1?: string;

  /** Style props */
  itemTextStateParagraphPosition?: CSSProperties["position"];
  itemTextStateParagraphTop?: CSSProperties["top"];
  itemTextStateParagraphLeft?: CSSProperties["left"];
  placeTextHereLeft?: CSSProperties["left"];
  placeTextHereFontFamily?: CSSProperties["fontFamily"];
  placeTextHereLeft1?: CSSProperties["left"];
  placeTextHereLetterSpacing?: CSSProperties["letterSpacing"];
  placeTextHereLineHeight?: CSSProperties["lineHeight"];
  placeTextHereFontFamily1?: CSSProperties["fontFamily"];
};

const ItemTextStateParagraph: FunctionComponent<ItemTextStateParagraphType> = ({
  className = "",
  placeTextHere,
  placeTextHere1,
  itemTextStateParagraphPosition,
  itemTextStateParagraphTop,
  itemTextStateParagraphLeft,
  placeTextHereLeft,
  placeTextHereFontFamily,
  placeTextHereLeft1,
  placeTextHereLetterSpacing,
  placeTextHereLineHeight,
  placeTextHereFontFamily1,
}) => {
  const itemTextStateParagraphStyle: CSSProperties = useMemo(() => {
    return {
      position: itemTextStateParagraphPosition,
      top: itemTextStateParagraphTop,
      left: itemTextStateParagraphLeft,
    };
  }, [
    itemTextStateParagraphPosition,
    itemTextStateParagraphTop,
    itemTextStateParagraphLeft,
  ]);

  const placeTextHereStyle: CSSProperties = useMemo(() => {
    return {
      left: placeTextHereLeft,
      fontFamily: placeTextHereFontFamily,
    };
  }, [placeTextHereLeft, placeTextHereFontFamily]);

  const placeTextHere1Style: CSSProperties = useMemo(() => {
    return {
      left: placeTextHereLeft1,
      letterSpacing: placeTextHereLetterSpacing,
      lineHeight: placeTextHereLineHeight,
      fontFamily: placeTextHereFontFamily1,
    };
  }, [
    placeTextHereLeft1,
    placeTextHereLetterSpacing,
    placeTextHereLineHeight,
    placeTextHereFontFamily1,
  ]);

  return (
    <div
      className={`w-[103px] h-[49px] text-center text-4xs text-light-text-color-body-1 font-captions-captions-bold ${className}`}
      style={itemTextStateParagraphStyle}
    >
      <img
        className="relative w-[103px] h-[49px]"
        alt=""
        src="/combined-shape.svg"
      />
      <div
        className="absolute top-[48.98%] left-[19.42%] tracking-[0.01em] leading-[120%]"
        style={placeTextHereStyle}
      >
        {placeTextHere}
      </div>
      <b
        className="absolute top-[14.29%] left-[7.77%] text-xs tracking-[0.01em] leading-[110%] text-light-text-color-title"
        style={placeTextHere1Style}
      >
        {placeTextHere1}
      </b>
    </div>
  );
};

export default ItemTextStateParagraph;
