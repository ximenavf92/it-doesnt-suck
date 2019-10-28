module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("/assets");

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