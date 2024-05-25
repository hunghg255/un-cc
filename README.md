<p align="center">
<a href="https://www.npmjs.com/package/un-cc" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/codicon:terminal-cmd.svg?color=%23b3ff75" alt="logo" width='100'/></a>
</p>

<p align="center">
  A script to create a template component
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/un-cc" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/un-cc.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/un-cc" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/un-cc.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=un-cc" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/un-cc" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/un-cc/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/un-cc/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/un-cc" alt="License" /></a>
</p>

## Get started

```bash
# npx
npm install un-cc@latest -D
```

## Usage

```ts
import { createComponent } from 'un-cc';

createComponent({
  staticComponentDir: 'src',
  componentDirectoryStr: ['components'],
  templatesDir: 'scripts/templates',

  transform(content, componentName) {
    return content.replaceAll('COMPONENT_NAME', 'TestComponent');
  },
});
```

## API

```ts
type CreateComponentOptions = {
  staticComponentDir: string;
  componentDirectoryStr: string[];
  templatesDir: string;
  transform?: (content: string, componentName: string) => string;
  transformFileName?: (filename: string, componentName: string) => string;
  transformExecFile?: (componentName: string) => string;
};
```
