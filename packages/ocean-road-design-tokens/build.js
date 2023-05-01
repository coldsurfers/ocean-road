const {parseOCJSON} = require('./utils/open-color')
const StyleDictionary = require('style-dictionary')

parseOCJSON()

function themedColorFormat(dictionary) {
    return dictionary.allTokens.map((token) => {
      const { value: lightValue, darkValue } = token;
      return [
        { ...token, name: `${token.name}-light`, value: lightValue },
        { ...token, name: `${token.name}-dark`, value: darkValue }
      ]
    }).flatMap(v => v);
}

function themedColorWrapper(format) {
    return (args) => {
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
            (token.attributes.category === `color` || token.attributes.category === `elevation`)
        );
    },
});

StyleDictionary.registerFilter({
    name: 'baseColorFilter',
    matcher(token) {
        return token.attributes.category === `oc`;
    },
});

StyleDictionary.registerFormat({
    name: 'themedJson',
    formatter: themedColorWrapper(`json/flat`),
});

StyleDictionary.extend('config.json').buildAllPlatforms();