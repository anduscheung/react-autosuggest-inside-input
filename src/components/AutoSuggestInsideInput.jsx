import { useEffect, createRef, useRef, useState } from "react";

function AutoSuggestInputInside({
  suggestions,
  value: displayValue,
  setValue: setDisplayValue,
  className = undefined,
}) {
  const value = useRef("");
  const prevValue = useRef("");
  const prevDisplayValue = useRef("");
  const suggestionActive = useRef(false);

  const [caret, setCaret] = useState([0, 0]);

  const inputRef = createRef();

  const onChange = (e) => {
    prevValue.current = value.current;
    value.current = e.target.value;

    const suggestedWord =
      value.current.length > 0 &&
      suggestions.find((item) => item.startsWith(value.current));

    const suggestedPart = suggestedWord
      ? suggestedWord.slice(value.current.length, suggestedWord.length)
      : null;

    // delete
    const deleteCase0 =
      suggestionActive.current && e.target.value === prevValue.current;
    const deleteCase1 = suggestionActive.current && !suggestedPart;
    const deleteCase2 =
      suggestionActive.current === false &&
      value.current.length < prevValue.current.length;
    if (deleteCase0 || deleteCase1 || deleteCase2) {
      suggestionActive.current = false;
      setDisplayValue(value.current);
      setCaret([inputRef.current.selectionEnd, inputRef.current.selectionEnd]);
    }
    // type
    else {
      prevDisplayValue.current = displayValue;

      const suggested =
        value.current.length > 0 && suggestedPart ? suggestedPart : "";
      const newDisplayValue = value.current + suggested;

      if (suggested) {
        suggestionActive.current = true;
      }

      setCaret([value.current.length, newDisplayValue.length]);
      setDisplayValue(newDisplayValue);
    }
  };

  // set caret if there is suggestionActive
  useEffect(() => {
    console.log(
      "suggestionActive.current =",
      suggestionActive.current === false,
      caret
    );
    if (suggestionActive.current === true) {
      inputRef.current.setSelectionRange(caret[0], caret[1]);
      // TODO: when it is too long
      // inputRef.current.scrollLeft = 0;
    }
  }, [inputRef, caret]);

  const onClick = () => {
    suggestionActive.current = false;
    value.current = displayValue;
    prevDisplayValue.current = displayValue;
  };

  return (
    <input
      ref={inputRef}
      onClick={onClick}
      value={displayValue}
      onChange={onChange}
      className={className}
    />
  );
}

export default AutoSuggestInputInside;
