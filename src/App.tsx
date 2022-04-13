import "./App.css";
import AutoSuggestInsideInput from "./components/AutoSuggestInsideInput";
import { useState } from "react";

const suggestions = ["www.google.com", "www.github.com", "www.npmjs.com"];

function App() {
  const [value, setValue] = useState("");
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
