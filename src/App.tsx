import "./App.css";
import AutoSuggestInsideInput from "./components/AutoSuggestInsideInput";
import { useState } from "react";

const suggestions = [
  "abcde",
  "applebcdefghijklmnopqrstuvwxyz",
  "apple",
  "ape",
  "arrow",
  "angel",
  "archer",
  "www.google.com",
];

function App() {
  const [displayValue, setDisplayValue] = useState("");
  return (
    <div className="container">
      <AutoSuggestInsideInput
        suggestions={suggestions}
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
      />
    </div>
  );
}

export default App;
