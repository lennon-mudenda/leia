const css = require('css')

class Leia
{
	constructor()
	{

	}

	parseString()
	{

	}

	parseFile()
	{

	}

	parse(string = '')
	{

	}

	camelCase(string='')
	{
		if(typeof string !== typeof "") return ""
		let lastPosition = 0
		let position = string.indexOf('-', 0)
		while (position >= 0)
		{
			lastPosition = position
			string = `${string.substr(0,position)}${this.capitaliseFirst(string.substr(position + 1))}`
			position = string.indexOf('-', lastPosition)

		}
		return string
	}

	capitaliseFirst(string = '')
	{
		if(typeof string !== typeof "") return ""
		let [first, ...rest] = string
		return `${first.toString().toUpperCase()}${rest.join('')}`
	}

	validateProperty()
	{

	}
}

module.exports.Leia = Leia