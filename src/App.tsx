import "./App.css";
import AutoSuggestInsideInput from "./components/AutoSuggestInsideInput";
import { useCallback, useState } from "react";

const suggestions = ["w.g", "w.a", "w.c"];

function App() {
  const [value, setValue] = useState("");

  useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return (
    <div className="container">
      <AutoSuggestInsideInput
        suggestions={suggestions}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
