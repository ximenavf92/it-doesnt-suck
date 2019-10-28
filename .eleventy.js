module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md", "css"],
        dir: {
            input: "src",
            output: "_site",
            include: "includes"
        }
    }
}