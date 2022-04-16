import "./App.css";
import AutoSuggestInsideInput from "./components/AutoSuggestInsideInput";
import { useCallback, useState } from "react";

const suggestions = [
  "www.google.com",
  "www.npmjs.com",
  "www.github.com",
  "www.abcdefghijklmnpoqrstuvwxyz.com",
];

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
