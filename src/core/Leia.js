const css = require('css')
const {capitaliseFirst, camelCase} = require('./String.js')
const {normalizeRule} = require('./Normaliser.js')
const {isValidStyleProperty} = require('./Validator.js')

class Leia
{
	constructor()
	{
		// Our css parser object
		this.css = css
		// The parsed stylesheet
		this.styleSheet = null
		// An object containting the style objects referenced by the slugs
		this.styles = {}
		// List of all encountered selectors
		this.selectors = []
		// CSS string that is to be parsed
		this.string = ''
		// A mapping of the each selector and the corresponding slugs under which it is referenced
		this.selectorSlugMap = {}
	}

	parseString()
	{

	}

	parseFile()
	{


	}

	parse(string = '')
	{
		this.string = string
		try
		{
			this.styleSheet = this.css.parse(string, {silent: false})
			this.styleSheet.stylesheet.rules.forEach((rule) => {
				if(rule.type && ['rule'].indexOf(rule.type) >= 0)
				{
					let {selectors} = rule
					let selectorsSlug = selectors.join('-')
					let {declarations} = rule
					let styleObject = {}
					rule.declarations.forEach((declaration) => {

						if(declaration.type && ['declaration'].indexOf(declaration.type) >= 0)
						{
							let {property, value} = declaration
							styleObject[`${camelCase(property)}`] = value
						}
					})
					this.styles[selectorsSlug] = {
						slug: selectorsSlug,
						selectors: selectors,
						styleObject: styleObject
					}
					this.selectors.push(selectors)
					selectors.forEach((selector) => {
						if (!this.selectorSlugMap[selector])
						{
							this.selectorSlugMap[selector] = []
						}
						if(!(this.selectorSlugMap[selector].indexOf(selectorsSlug) >= 0))
							this.selectorSlugMap[selector] = [...this.selectorSlugMap[selector], selectorsSlug]
					})
				}
			})
		}
		catch (e)
		{
			this.styles = {}
		}
	}
}

module.exports.Leia = Leia