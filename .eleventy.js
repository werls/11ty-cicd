module.exports = function (eleventyConfig) {

	// File copy
	eleventyConfig.addPassthroughCopy({
		"_src/public/*/*": "public",
	});

	return {
		templateFormats: ["md", "njk", "html", "yaml"],
		dir: {
			pathPrefix: '/11ty-cicd/',
			input: "_src",
			includes: "_includes",
			output: "_dist"
		},
	}
}