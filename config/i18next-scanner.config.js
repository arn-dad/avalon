/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

const LOCALES_LOAD = path.resolve(__dirname, '../public/locales/{{lng}}/{{ns}}.json');
const LOCALES_SAVE = path.resolve(__dirname, '../public/locales/{{lng}}/{{ns}}.json');

module.exports = {
  input: [// Use ! to filter out files or directories
    'src/_components/**/*.{js,jsx}',
    'src/_screens/**/*.{js,jsx}',
    '!**/node_modules/**'
  ],
  output  : './',
  options : {
    debug            : true,
    removeUnusedKeys : true,
    sort             : true,
    func             : {
      list       : ['i18next.t', 'i18n.t'],
      extensions : ['.js', '.jsx']
    },
    // disabled trans component because of issue
    // https://github.com/i18next/i18next-scanner/issues/130
    trans: {
      component   : 'Trans',
      i18nKey     : 'i18nKey',
      defaultsKey : 'defaults',
      extensions  : [],
      // extensions  : ['.js', '.jsx'],
      fallbackKey(ns, value) { // customize
        return value;
      },
      acorn: {
        ecmaVersion : 10, // defaults to 10
        sourceType  : 'module' // defaults to 'module'
        // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
      }
    },
    lngs : ['en', 'ru', 'pl'],
    ns   : [
      'site'
    ],
    defaultLng   : 'en',
    defaultNs    : 'translation',
    defaultValue : (lng, ns, key, { defaultValue }) => defaultValue,
    resource     : {
      loadPath   : LOCALES_LOAD,
      savePath   : LOCALES_SAVE,
      jsonIndent : 2,
      lineEnding : '\n'
    },
    nsSeparator   : ':', // namespace separator
    keySeparator  : '.', // key separator
    interpolation : {
      prefix : '{{',
      suffix : '}}'
    }
  },
  transform: function customTransform(file, enc, done) {
    const { parser } = this;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(content, { list: ['i18n.t'] }, (key, options) => {
      parser.set(key, Object.assign({}, options, {
        nsSeparator  : ':',
        keySeparator : '.'
      }));
      count += 1;
    });

    if (count > 0) {
      console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
    }

    done();
  }
};
