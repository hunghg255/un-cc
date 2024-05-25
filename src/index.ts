// @ts-nocheck
import { exec } from 'node:child_process';
import fs from 'node:fs';
import { cwd } from 'node:process';

import * as globby from 'globby';
import inquirer from 'inquirer';
import color from 'picocolors';

let staticComponentDir;
let componentDirectoryStr;
let templatesDir;

type CreateComponentOptions = {
  staticComponentDir: string;
  componentDirectoryStr: string[];
  templatesDir: string;
  transform?: (content: string, componentName: string) => string;
  transformFileName?: (filename: string, componentName: string) => string;
  transformExecFile?: (componentName: string) => string;
};

const chooseComponentDirectory = async (directoryList, additionalChoices, path) => {
  const { componentDirectory } = await inquirer.prompt({
    type: 'list',
    name: 'componentDirectory',
    loop: false,
    message: `🚀 Current path: ${color.green(path)}`,
    choices: [
      ...((additionalChoices || []).map((choice) => ({
        value: choice,
        name: choice,
      })) || []),
      ...directoryList.map((dirent) => ({
        value: dirent.name,
        name: color.underline('ㄴ📁 ' + dirent.name),
      })),
    ],
    pageSize: 20,
  });

  return componentDirectory;
};

const readDirectory = (dir) => {
  return fs
    .readdirSync(`${staticComponentDir}/${dir}`, {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory());
};

const createNewFolder = async (path) => {
  const { newFolderName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'newFolderName',
      message: 'Please enter the name of the component folder you want to create.',
      loop: false,
    },
  ]);

  fs.mkdirSync(`${staticComponentDir}/${path}/${newFolderName}`);

  return newFolderName;
};

const addComponentFile = (componentPath, componentName, options: CreateComponentOptions) => {
  fs.mkdirSync(componentPath);

  const templates = globby.globbySync(`${cwd()}/${templatesDir}/**/*`, {
    expandDirectories: {
      extensions: ['tsx', 'css', 'jsx', 'scss', 'ts', 'js', 'json', 'md', 'html'],
    },
    onlyFiles: true,
    deep: 1,
  });

  for (const template of templates) {
    const content = fs.readFileSync(template, 'utf8');

    const filename = template.split('/').pop();
    const c = options?.transform
      ? options?.transform(content, componentName)
      : content.replaceAll('COMPONENT_NAME', componentName);

    const fileName = options?.transformFileName
      ? options?.transformFileName(filename, componentName)
      : filename.replace('index', componentName);

    fs.writeFileSync(`${componentPath}/${fileName}`, c);
  }
};

const createComponent = async (options: CreateComponentOptions) => {
  staticComponentDir = options.staticComponentDir;
  componentDirectoryStr = options.componentDirectoryStr;
  templatesDir = options.templatesDir;

  let directoryList = readDirectory(componentDirectoryStr.join('/'));
  const newFolder = color.italic(color.yellow('🛠 Create new folder here'));
  const back = color.bold(color.bgRed(color.white('◀️ Go back')));
  const createHere = color.italic(color.yellow('🛠 Create component here'));

  while (true) {
    console.clear();
    const additionalChoices = [createHere, newFolder];
    if (componentDirectoryStr.length > 1) {
      additionalChoices.unshift(back);
    }

    const selectedDirectory = await chooseComponentDirectory(
      directoryList,
      additionalChoices,
      componentDirectoryStr.join('/'),
    );
    if (selectedDirectory === createHere) {
      break;
    }

    if (selectedDirectory === newFolder) {
      const newFolderName = await createNewFolder(componentDirectoryStr.join('/'));
      componentDirectoryStr.push(newFolderName);
    } else if (selectedDirectory === back) {
      componentDirectoryStr.pop();
    } else {
      componentDirectoryStr.push(selectedDirectory);
    }

    directoryList = readDirectory(componentDirectoryStr.join('/'));
  }

  const { componentName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'componentName',
      message: 'Please enter the name of the component you want to create. (PascalCase)',
      loop: false,
    },
  ]);

  const componentPath = `${staticComponentDir}/${componentDirectoryStr.join('/')}/${componentName}`;

  addComponentFile(componentPath, componentName, options);

  const execFile = options?.transformExecFile
    ? options?.transformExecFile(componentName)
    : `${componentName}.tsx`;

  exec(`code ${componentPath}/${execFile}`);

  console.log();
  console.log(color.green('🚇 Component creation complete!'));
  console.log();
};

export { createComponent };
