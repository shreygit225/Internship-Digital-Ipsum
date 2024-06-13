import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type EditorFormatQuoteType = {
  className?: string;
  editorFormatQuoteEditorFo?: string;

  /** Style props */
  editorFormatQuoteWidth?: CSSProperties["width"];
  editorFormatQuoteOverflow?: CSSProperties["overflow"];
  editorFormatQuoteHeight?: CSSProperties["height"];
  editorFormatQuotePosition?: CSSProperties["position"];
  editorFormatQuoteTop?: CSSProperties["top"];
  editorFormatQuoteLeft?: CSSProperties["left"];
};

const EditorFormatQuote: FunctionComponent<EditorFormatQuoteType> = ({
  className = "",
  editorFormatQuoteEditorFo,
  editorFormatQuoteWidth,
  editorFormatQuoteOverflow,
  editorFormatQuoteHeight,
  editorFormatQuotePosition,
  editorFormatQuoteTop,
  editorFormatQuoteLeft,
}) => {
  const editorFormatQuoteStyle: CSSProperties = useMemo(() => {
    return {
      width: editorFormatQuoteWidth,
      overflow: editorFormatQuoteOverflow,
      height: editorFormatQuoteHeight,
      position: editorFormatQuotePosition,
      top: editorFormatQuoteTop,
      left: editorFormatQuoteLeft,
    };
  }, [
    editorFormatQuoteWidth,
    editorFormatQuoteOverflow,
    editorFormatQuoteHeight,
    editorFormatQuotePosition,
    editorFormatQuoteTop,
    editorFormatQuoteLeft,
  ]);

  return (
    <img
      className={`w-6 max-w-full overflow-hidden h-6 object-cover ${className}`}
      alt=""
      src={editorFormatQuoteEditorFo}
      style={editorFormatQuoteStyle}
    />
  );
};

export default EditorFormatQuote;
