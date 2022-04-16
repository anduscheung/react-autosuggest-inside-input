# React Autosuggest Inside Input

This is a React project that provide autosuggest feature inside an input component like below.

![Demo](https://github.com/anduscheung/react-autosuggest-inside-input/blob/main/src/assets/demo.gif)

# ATTENTION!!

This package will work but the current version is still in beta, will keep releasing changes (full test cases and types will release soon.).

Please use it at your own risk.

Road map:

- 100% test coverage
- Typescript

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

## License

[MIT](http://moroshko.mit-license.org)
