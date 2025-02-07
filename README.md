# React Autosuggest Inside Input (Outdated)

This package is a simple React component that provide autosuggest feature inside an input like below. It is inspired by the browser's address bar.

![Demo](https://github.com/anduscheung/react-autosuggest-inside-input/blob/main/src/assets/demo.gif)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

**npm**

```sh
npm install react-autosuggest-inside-input
```

**yarn**

```sh
yarn add react-autosuggest-inside-input
```

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

## Props

| Name        | Type               | Optional | Description                                                                |
| ----------- | ------------------ | -------- | -------------------------------------------------------------------------- |
| suggestions | string array       | false    | List of suggestions, the input will show the the first match of this array |
| value       | string             | false    | Input value                                                                |
| setValue    | (newValue) => void | false    | Callback to set the value                                                  |
| className   | String             | true     | Class name to style the input                                              |

## Customization

If you think this is what you need but you want some customization, feel free to copy the code directly from this link :).

https://github.com/anduscheung/react-autosuggest-inside-input/blob/main/src/components/AutoSuggestInsideInput.tsx.

## License

[MIT](http://moroshko.mit-license.org)
