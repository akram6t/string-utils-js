## String Utils JS

A lightweight collection of essential string utilities for Node.js and browser environments.

## Installation

Install using npm:

```bash
npm install @akram6t/string-utils-js
```

Or using yarn:

```bash
yarn add @akram6t/string-utils-js
```

## Usage

### CommonJS (Node.js)

```javascript
const { capitalize, truncate, wordCount, randomString } = require('string-utils-js');

console.log(capitalize('hello world')); // "Hello world"
console.log(truncate('This is a long string', 10)); // "This is a..."
console.log(wordCount('Four words here')); // 4
console.log(randomString(12)); // "Xc2Fg89HjK3L"
```

### ES Modules

```javascript
import { capitalize, truncate, wordCount, randomString } from 'string-utils-js';

// Usage same as above

```