import StyleDictionary from 'style-dictionary'
import { Dictionary } from 'style-dictionary/types/Dictionary';
import { FormatterArguments } from 'style-dictionary/types/Format';
import {parseOCJSON} from './utils/open-color'
import fs from 'fs'
import path from 'path'

type Format = 'css/variables' | 'json/flat' | 'javascript/module'

if (!fs.existsSync(path.resolve(__dirname, './dist'))) {
    fs.mkdirSync('dist')
}

parseOCJSON()


function themedColorFormat(dictionary: Dictionary, format: Format) {
    return dictionary.allTokens.map((token) => {
      const { value: lightValue, darkValue } = token;
      let lightName = ''
      let darkName = ''
      switch (format) {
        case 'css/variables':
        case 'json/flat':
            lightName = `${token.name}-light`
            darkName = `${token.name}-dark`
            break
        case 'javascript/module':
            lightName = `${token.name}Light`
            darkName = `${token.name}Dark`
            break
        default:
            break
      }
      return [
        { ...token, name: lightName, value: lightValue },
        { ...token, name: darkName, value: darkValue }
      ]
    }).flatMap(v => v);
}

function themedColorWrapper(format: Format) {
    return (args: FormatterArguments) => {
        const dictionary = { ...args.dictionary };
        dictionary.allTokens = themedColorFormat(dictionary, format)
        const formatted = StyleDictionary.format[format]({
            ...args,
            dictionary,
        });
        return formatted
    };
}

StyleDictionary.registerFormat({
    name: 'themedCss',
    formatter: themedColorWrapper(`css/variables`),
});

StyleDictionary.registerFormat({
    name: 'themedJson',
    formatter: themedColorWrapper(`json/flat`),
});

StyleDictionary.registerFormat({
    name: 'themedJsModule',
    formatter: themedColorWrapper(`javascript/module`),
});

StyleDictionary.registerFilter({
    name: 'baseColorFilter',
    matcher(token) {
        return token.attributes?.category === `oc`;
    },
});

StyleDictionary.registerFilter({
    name: 'themedColorFilter',
    matcher(token) {
        return (
            (token.darkValue) &&
            (token.attributes?.category === `color` || token.attributes?.category === `elevation`)
        );
    },
});

StyleDictionary.extend('config.json').buildAllPlatforms();