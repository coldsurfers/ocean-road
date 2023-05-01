import StyleDictionary from 'style-dictionary'
import { Dictionary } from 'style-dictionary/types/Dictionary';
import { FormatterArguments } from 'style-dictionary/types/Format';
import {parseOCJSON} from './utils/open-color'
import fs from 'fs'
import path from 'path'

if (!fs.existsSync(path.resolve(__dirname, './dist'))) {
    fs.mkdirSync('dist')
}

parseOCJSON()

const prefix = 'or'

function themedColorFormat(dictionary: Dictionary) {
    return dictionary.allTokens.map((token) => {
      const { value: lightValue, darkValue } = token;
      return [
        { ...token, name: `${prefix}-${token.name}-light`, value: lightValue },
        { ...token, name: `${prefix}-${token.name}-dark`, value: darkValue }
      ]
    }).flatMap(v => v);
}

function themedColorWrapper(format: 'css/variables' | 'json/flat') {
    return (args: FormatterArguments) => {
        const dictionary = { ...args.dictionary };
        dictionary.allTokens = themedColorFormat(dictionary)
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

StyleDictionary.registerFilter({
    name: 'themedColorFilter',
    matcher(token) {
        return (
            (token.darkValue) &&
            (token.attributes?.category === `color` || token.attributes?.category === `elevation`)
        );
    },
});

StyleDictionary.registerFilter({
    name: 'baseColorFilter',
    matcher(token) {
        return token.attributes?.category === `oc`;
    },
});

StyleDictionary.registerFormat({
    name: 'themedJson',
    formatter: themedColorWrapper(`json/flat`),
});

StyleDictionary.extend('config.json').buildAllPlatforms();