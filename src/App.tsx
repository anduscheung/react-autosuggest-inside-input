import "./App.css";
import AutoSuggestInside from "./AutoSuggestInside";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  return (
    <div className="container">
      <AutoSuggestInside
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
      />
    </div>
  );
}

export default App;
