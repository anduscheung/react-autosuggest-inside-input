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

// TODO: set displayValue should be memorized
function AutoSuggestInside({ displayValue, setDisplayValue }) {
  const inputRef = createRef();
  const [value, setValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [prevDisplayValue, setPrevDisplayValue] = useState("");
  const [caretPosition, setCaretPosition] = useState(0);

  const onChange = (e) => {
    setCaretPosition(inputRef.current.selectionEnd);
    setPrevValue(value);
    setPrevDisplayValue(displayValue);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length < prevValue.length || value.length === prevValue.length) {
      setDisplayValue(value);
      return;
    }

    const suggestedWord =
      value.length > 0 && suggestions.find((item) => item.startsWith(value));

    const suggestedPart = suggestedWord
      ? suggestedWord.slice(value.length, suggestedWord.length)
      : null;

    const suggested = value.length > 0 && suggestedPart ? suggestedPart : "";
    setDisplayValue(value + suggested);
  }, [value, prevValue, inputRef, caretPosition, setDisplayValue]);

  useEffect(() => {
    if (displayValue.length < prevDisplayValue.length) {
      inputRef.current.setSelectionRange(caretPosition, caretPosition);
      return;
    }
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

export default AutoSuggestInside;
