import { createComponent } from '../src';

createComponent({
  staticComponentDir: 'src',
  componentDirectoryStr: ['components'],
  templatesDir: 'scripts/templates',

  transform(content, componentName) {
    return content.replaceAll('COMPONENT_NAME', 'TestComponent');
  },
});
