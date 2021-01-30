# next-svg-inline-loader [![npm version](https://badgen.net/npm/v/next-svg-inline-loader)](https://www.npmjs.com/package/next-svg-inline-loader) [![license](https://badgen.net/github/license/tinialabs/next-svg-inline-loader)](https://github.com/tinialabs/next-svg-inline-loader/blob/master/LICENSE) [![downloads](https://badgen.net/npm/dt/next-svg-inline-loader)](https://www.npmjs.com/package/next-svg-inline-loader)

Features:
- **SVG as React** Include .svg files as React components
- **SVGO plugins** All [SVGO processor](https://github.com/svg/svgo) plugins supported for example to remove ViewBox or Dimensions etc.

## Table of contents

- [Installation](#installation)
- [Options](#options)
- [Usage](#usage)
- [License](#license)

## Installation

```
npm install next-svg-inline-loader next-compose-plugins
```

Add the plugin with [`next-compose-plugins`](https://github.com/cyrilwanner/next-compose-plugins) to your Next.js configuration:

```javascript
// next.config.js
const withPlugins = require("next-compose-plugins");
const nextSvgInlineLoader = require("next-svg-inline-loader");

module.exports = withPlugins([
  nextSvgInlineLoader
  // your other plugins here
]);
```

## Options
| Option | Default | Type | Description |
| :--- | :------: | :--: | :---------- |
| svgoPlugins | see below | Array<{}> | The The list of plugins for the [SVGO processor](https://github.com/svg/svgo) |

```js
// default svgoPlugins
{ removeViewBox: false },
{ removeDimensions: false },
{
  prefixIds: {
    delim: "_",
    prefixIds: true,
    prefixClassNames: false,
  },
}
```

## Typescript

Include a `images.d.ts` in your source folder

``` ts
declare module '*.inline.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default ReactComponent
}
```

## Usage

You can now simply import images in your projects directly from source folders.  

``` js
   const Logo = require('./images/logo.mobile.inline.svg')

  // render
  <Logo />
```

## License

Licensed under the [MIT](https://github.com/tinialabs/next-svg-inline-loader/blob/master/LICENSE) license.

© Copyright Guy Barnard and Tinia Labs contributors