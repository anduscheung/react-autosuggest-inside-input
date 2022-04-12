import { useState, useEffect, createRef, forwardRef, memo } from "react";

const suggestions = [
  "abcde",
  "applebcdefghijklmnopqrstuvwxyz",
  "apple",
  "ape",
  "arrow",
  "angel",
  "archer",
];

const MemorizedInput = memo(
  forwardRef(({ displayValue, onChange }, inputRef) => {
    return <input ref={inputRef} value={displayValue} onChange={onChange} />;
  })
);

function AutoSuggestInside2() {
  const inputRef = createRef();
  const [value, setValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [prevDisplayValue, setPrevDisplayValue] = useState("");
  const [caretPosition, setCaretPosition] = useState(0);

  const onChange = (e) => {
    console.log("2.... onChange, value =>>", e.target.value);
    console.log("2.... onChange, prev value =>>", value);
    console.log("2.... caret position ==>>", inputRef.current.selectionEnd);
    setCaretPosition(inputRef.current.selectionEnd);
    setPrevValue(value);
    setPrevDisplayValue(displayValue);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length < prevValue.length || value.length === prevValue.length) {
      console.log("3....follow up, setting display value =", value);
      setDisplayValue(value);
      return;
    }

    const suggestedWord =
      value.length > 0 && suggestions.find((item) => item.startsWith(value));

    const suggestedPart = suggestedWord
      ? suggestedWord.slice(value.length, suggestedWord.length)
      : null;

    const suggested = value.length > 0 && suggestedPart ? suggestedPart : "";
    console.log("3....follow up, setting display value =", value + suggested);
    setDisplayValue(value + suggested);
  }, [value, prevValue, inputRef, caretPosition]);

  useEffect(() => {
    console.log("4....", displayValue, prevDisplayValue);
    if (displayValue.length < prevDisplayValue.length) {
      console.log(
        "4....update caret position (delete)",
        value,
        prevDisplayValue,
        caretPosition,
        caretPosition
      );
      console.log("------");
      inputRef.current.setSelectionRange(caretPosition, caretPosition);
      return;
    }
    console.log(
      "4....update caret position (type)",
      value,
      prevDisplayValue,
      value.length,
      displayValue.length
    );
    console.log("------");
    inputRef.current.focus();
    inputRef.current.setSelectionRange(value.length, displayValue.length);
    inputRef.current.scrollLeft = 0;
  }, [displayValue, value, prevDisplayValue, inputRef, caretPosition]);

  return (
    <div className="input_wrapper">
      <MemorizedInput
        ref={inputRef}
        displayValue={displayValue}
        onChange={onChange}
      />
    </div>
  );
}

export default AutoSuggestInside2;
