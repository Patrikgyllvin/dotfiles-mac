local highlights = require("nord").bufferline.highlights({
    italic = false,
    bold = true,
})

require("bufferline").setup({
    options = {
        separator_style = "thin",
    },
    highlights = highlights,
})
