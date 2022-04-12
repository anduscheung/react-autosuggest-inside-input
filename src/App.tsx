import "./App.css";
import AutoSuggestInsideInput from "./components/AutoSuggestInsideInput";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  return (
    <div className="container">
      <AutoSuggestInsideInput
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
      />
    </div>
  );
}

export default App;
