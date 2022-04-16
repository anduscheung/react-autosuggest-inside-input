import { useEffect, createRef, useRef, useState } from "react";

const getSuggestedPart = (suggestions, value) => {
  const suggestedWord =
    value.length > 0 && suggestions.find((item) => item.startsWith(value));

  return suggestedWord
    ? suggestedWord.slice(value.length, suggestedWord.length)
    : null;
};

// Determine whether user has produced a delete action
const checkIsDeleteAction = (
  value,
  prevValue,
  suggestionActive,
  suggestedPart
) => {
  const deleteCase0 = suggestionActive && value === prevValue;
  const deleteCase1 = suggestionActive && !suggestedPart;
  const deleteCase2 =
    suggestionActive === false && value.length < prevValue.length;

  return deleteCase0 || deleteCase1 || deleteCase2;
};

function AutoSuggestInputInside({
  suggestions,
  value: displayValue,
  setValue: setDisplayValue,
  className = undefined,
}) {
  const inputRef = createRef();
  const value = useRef("");
  const prevValue = useRef("");
  const prevDisplayValue = useRef("");
  const suggestionActive = useRef(false);
  const [caret, setCaret] = useState([0, 0]);

  const onChange = (e) => {
    prevValue.current = value.current;
    value.current = e.target.value;

    const suggestedPart = getSuggestedPart(suggestions, value.current);

    const isDelete = checkIsDeleteAction(
      value.current,
      prevValue.current,
      suggestionActive.current,
      suggestedPart
    );

    if (isDelete) {
      suggestionActive.current = false;
      setDisplayValue(value.current);
      setCaret([inputRef.current.selectionEnd, inputRef.current.selectionEnd]);
    } else {
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

  // update caret position if suggestion is active
  useEffect(() => {
    if (suggestionActive.current === true) {
      inputRef.current.setSelectionRange(caret[0], caret[1]);
    }
  }, [inputRef, caret]);

  const onClick = () => {
    suggestionActive.current = false;
    value.current = displayValue;
    prevDisplayValue.current = displayValue;
  };

  return (
    <input
      id="asi-input"
      ref={inputRef}
      onClick={onClick}
      value={displayValue}
      onChange={onChange}
      className={className}
    />
  );
}

export default AutoSuggestInputInside;
