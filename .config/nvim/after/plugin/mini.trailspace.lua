require('mini.trailspace').setup()

vim.keymap.set('n', '<Leader>t', require('mini.trailspace').trim)
vim.keymap.set('n', '<Leader>T', require('mini.trailspace').trim_last_lines)
