const pkg = require("../package.json");

module.exports = {
	// Feel free to override these, they are pulling from package.json for default values.
	title: "Donut" || pkg.name,
	description: "" || pkg.description,
	language: "en",
	repository: "https://github.com/rdela/tugboat/blob/donut/",
};