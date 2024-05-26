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

## Demo

<video src="https://private-user-images.githubusercontent.com/42096908/333846834-3f3ed579-db81-45f6-bb8d-a147d888500a.mov?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTY2OTY5ODEsIm5iZiI6MTcxNjY5NjY4MSwicGF0aCI6Ii80MjA5NjkwOC8zMzM4NDY4MzQtM2YzZWQ1NzktZGI4MS00NWY2LWJiOGQtYTE0N2Q4ODg1MDBhLm1vdj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTI2VDA0MTEyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU5MmQxNDIzMjc2Y2MzZGQ5NjhhMDIwMjM3OGU1MWY1OGZiMzc1NTQyM2U5Y2Y5NjE0NTUwZmIyMDQwNDJhNTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Mi_bH-UYMM5u-VoUEmwM0sJWOsARkGJv-gh9ELY_UXU" data-canonical-src="https://private-user-images.githubusercontent.com/42096908/333846834-3f3ed579-db81-45f6-bb8d-a147d888500a.mov?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTY2OTY5ODEsIm5iZiI6MTcxNjY5NjY4MSwicGF0aCI6Ii80MjA5NjkwOC8zMzM4NDY4MzQtM2YzZWQ1NzktZGI4MS00NWY2LWJiOGQtYTE0N2Q4ODg1MDBhLm1vdj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTI2VDA0MTEyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU5MmQxNDIzMjc2Y2MzZGQ5NjhhMDIwMjM3OGU1MWY1OGZiMzc1NTQyM2U5Y2Y5NjE0NTUwZmIyMDQwNDJhNTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Mi_bH-UYMM5u-VoUEmwM0sJWOsARkGJv-gh9ELY_UXU" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:640px; min-height: 200px">
  </video>

## Get started

```bash
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
