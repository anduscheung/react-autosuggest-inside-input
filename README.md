# ATTENTION!!

This project has not gone through the testing process.
I published it early because I want to explore npm packaging only.
Do not directly import it in your production projects because it might have bugs and I will keep releasing changes.
But feel free to take a look at the implementation :P.

Road map:

- 100% test coverage
- Typescript

# React Autosuggest Inside Input

This is a React project that provide autosuggest feature inside an input component like below.

![Demo](https://github.com/anduscheung/react-autosuggest-inside-input/blob/main/src/assets/demo.gif)

Currently this project might be buggy because I have not fully test it yet, but test cases and types are releasing soon.

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

Add a `className` to style it if needed.

## License

[MIT](http://moroshko.mit-license.org)
