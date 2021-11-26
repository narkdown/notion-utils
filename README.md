# @narkdown/notion-utils

> Utility functions for Notion

[![codecov](https://codecov.io/gh/narkdown/notion-utils/branch/main/graph/badge.svg)](https://codecov.io/gh/narkdown/notion-utils)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![npm version](https://badge.fury.io/js/@narkdown%2Fnotion-utils.svg)](https://badge.fury.io/js/@narkdown%2Fnotion-utils)
[![license: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

## Install

```
$ npm install @narkdown/notion-utils
```

## Usage

```javascript
const {extractIdFromUrl} = require('@narkdown/notion-utils');

const pageId = extractIdFromUrl(
  'https://www.notion.so/username/et-tempore-iste-36d1060897c442399eb86e1f98dd31d4',
);

console.log(pageId); // 36d1060897c442399eb86e1f98dd31d4
```

## APIs

`extractIdFromUrl(url)`

Extract page or database id from url

### url

Type: `string`

## License

[MIT](LICENSE)
