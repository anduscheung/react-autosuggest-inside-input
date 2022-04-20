import {
  useEffect,
  createRef,
  useRef,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from "react";

const getSuggestedPart = (suggestions: string[], value: string): string => {
  const suggestedWord =
    value.length > 0 && suggestions.find((item) => item.startsWith(value));

  return suggestedWord
    ? suggestedWord.slice(value.length, suggestedWord.length)
    : "";
};

// Determine whether user has produced a delete action
const checkIsDeleteAction = (
  value: string,
  prevValue: string,
  suggestionActive: boolean,
  suggestedPart: string
): boolean => {
  const deleteCase0 = suggestionActive && value === prevValue;
  const deleteCase1 = suggestionActive && suggestedPart.length === 0;
  const deleteCase2 = !suggestionActive && value.length < prevValue.length;

  return deleteCase0 || deleteCase1 || deleteCase2;
};

const LEFT_ARROW_KEY_CODE = "ArrowLeft";
const RIGHT_ARROW_KEY_CODE = "ArrowRight";
const EDGE_LEFT_ARROW_KEY_CODE = "Left";
const EDGE_RIGHT_ARROW_KEY_CODE = "Right";

interface AutoSuggestInputInsideProps {
  suggestions: string[];
  value: string;
  setValue: (newValue: string) => void;
  className?: string;
}

function AutoSuggestInputInside({
  suggestions,
  value: displayValue,
  setValue: setDisplayValue,
  className = undefined,
}: AutoSuggestInputInsideProps) {
  const inputRef = createRef<HTMLInputElement>();
  const value = useRef<string>("");
  const prevValue = useRef<string>("");
  const prevDisplayValue = useRef<string>("");
  const suggestionActive = useRef<boolean>(false);
  const [caret, setCaret] = useState<number[]>([0, 0]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      if (inputRef.current && inputRef.current.selectionEnd) {
        setCaret([
          inputRef.current.selectionEnd,
          inputRef.current.selectionEnd,
        ]);
      }
    } else {
      prevDisplayValue.current = displayValue;

      const newDisplayValue = value.current + suggestedPart;

      if (suggestedPart.length > 0) {
        suggestionActive.current = true;
      }

      setCaret([value.current.length, newDisplayValue.length]);
      setDisplayValue(newDisplayValue);
    }
  };

  // update caret position if suggestion is active
  useEffect(() => {
    if (suggestionActive.current === true && inputRef.current) {
      inputRef.current.setSelectionRange(caret[0], caret[1]);
    }
  }, [inputRef, caret]);

  // Set value and prev display value as current display value, also set suggestion flag to false
  const propagateDisplayValue = () => {
    suggestionActive.current = false;
    value.current = displayValue;
    prevDisplayValue.current = displayValue;
  };

  // Propagate display value if input is being clicked
  const onClick = () => {
    propagateDisplayValue();
  };

  // Propagate display value if left / right arrow keys are pressed
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === LEFT_ARROW_KEY_CODE ||
      e.key === RIGHT_ARROW_KEY_CODE ||
      e.key === EDGE_LEFT_ARROW_KEY_CODE ||
      e.key === EDGE_RIGHT_ARROW_KEY_CODE
    ) {
      propagateDisplayValue();
    }
  };

  return (
    <input
      id="asi-input"
      ref={inputRef}
      onClick={onClick}
      onKeyDown={onKeyDown}
      value={displayValue}
      onChange={onChange}
      className={className}
    />
  );
}

export default AutoSuggestInputInside;
