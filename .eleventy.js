module.exports = function (eleventyConfig) {

	// File copy
	eleventyConfig.addPassthroughCopy({
		"_src/public/*/*": "public",
	});

	return {
		templateFormats: ["md", "njk", "html", "yaml"],
		dir: {
			// pathPrefix: _pathPrefix,
			input: "_src",
			includes: "_includes",
			output: "_dist"
		},
	}
}