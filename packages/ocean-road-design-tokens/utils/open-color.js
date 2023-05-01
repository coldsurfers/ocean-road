/**
 * generate design token json file from open color json
 */
const ocJSON = require('open-color/open-color.json')
const fs = require('fs')
const path = require('path')

const ocDesignTokenJSONFilePath = path.resolve(__dirname, '../tokens/color/oc.json')

function parseOCJSON() {
    function isHashColorValue(value) {
        return value.startsWith('#')
    }
    const ocDesignTokenObj = {}
    Object.keys(ocJSON).forEach((ocJSONKey) => {
        const value = ocJSON[ocJSONKey]
        if (Array.isArray(value)) {
            const hashColorValueArr = value
            ocDesignTokenObj[ocJSONKey] = hashColorValueArr.reduce((prev, curr, index) => {
                const next = prev
                prev[index] = {
                    value: curr
                }
                return next
            }, {})
        } else if (isHashColorValue(value)) {
            ocDesignTokenObj[ocJSONKey] = {
                value
            }
        }
    })

    fs.writeFileSync(
        ocDesignTokenJSONFilePath,
        JSON.stringify({ oc: ocDesignTokenObj }, null, 4)
    )
}

module.exports = {
    parseOCJSON
}