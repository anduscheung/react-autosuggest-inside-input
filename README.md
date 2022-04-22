# ATTENTION!!

I'm learning to bundle a project properly with this package. So I'll keep releasing change from time to time and it may break suddenly due to change of webpack setup.

Please do not use it at production at the moment until 1.0.0 is released (will be done before May).

However, if you think the package is exactly what you need, you can directly copy the code here https://github.com/anduscheung/react-autosuggest-inside-input/blob/main/src/components/AutoSuggestInsideInput.tsx.

This file is the actual implementation and will not have anymore change unless there is bugs discovered. Use cases are tested with Cypress.

# React Autosuggest Inside Input

This is a React project that provide autosuggest feature inside an input component like below.

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

## License

[MIT](http://moroshko.mit-license.org)
