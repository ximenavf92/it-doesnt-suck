module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("assets/css/main.css");
    eleventyConfig.addPassthroughCopy("assets/css/product.css");
    
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