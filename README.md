# ATTENTION!!

This project is a practice project for me to explore npm packaging only and still under construction

# React Autosuggest Inside Input

This is a React project that provide autosuggest feature inside an input component like below.

![Demo](https://github.com/anduscheung/react-autosuggest-inside-input/blob/main/src/assets/demo.gif)

Currently this project is still work in process so please do not directly import it in your production projects because I will keep releasing changes.

But feel free to take a look at the implementation :P.

## Installation

`yarn add react-autosuggest-inside-input`

## Usage example

```js
import AutoSuggestInsideInput from "react-autosuggest-inside-input";
import { useState } from "react";

const suggestions = ["www.google.com", "www.github.com", "www.npmjs.com"];
function App() {
  const [value, setValue] = useState("");
  return (
    <AutoSuggestInsideInput
      suggestions={suggestions}
      value={value}
      setValue={setValue}
    />
  );
}
```

## License

[MIT](http://moroshko.mit-license.org)
