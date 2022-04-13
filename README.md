# React Autosuggest Inside Input

This is a React project that provide autosuggest feature inside an input component like below.

![Demo](https://github.com/anduscheung/react-autosuggest-inside-input/blob/main/src/assets/demo.gif)

Currently it works as expected but still enhancing so please do not directly import it in your production projects because I will keep releasing changes.

But feel free to take a look at the implementation :P.

## Installation

`yarn add react-autosuggest-inside-input`

## Usage

Installation:

```
npm install react-click-outside
```

Some component that you wish to enhance with click outside detection:

```js
import AutoSuggestInsideInput from "react-autosuggest-inside-input";
import { useState } from "react";

const suggestions = ["www.google.com", "www.github.com", "www.npmjs.com"];
function App() {
  const [displayValue, setDisplayValue] = useState("");
  return (
    <AutoSuggestInsideInput
      suggestions={suggestions}
      displayValue={displayValue}
      setDisplayValue={setDisplayValue}
    />
  );
}
```

## License

[MIT](http://moroshko.mit-license.org)
