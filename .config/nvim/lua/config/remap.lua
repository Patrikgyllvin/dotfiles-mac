vim.keymap.set('n', '<Space>', '<nop>')
vim.g.mapleader = ' '

-- Remap <ESC> to jk in insert mode
vim.keymap.set('i', 'jk', '<Esc>')

-- Delete without copy (copy to other register)
vim.keymap.set('n', '<leader>d', '"_d')
vim.keymap.set('x', '<leader>d', '"_d')
vim.keymap.set('x', '<leader>p', '"_dP')

vim.keymap.set('n', '<leader>e', ':NvimTreeToggle <CR>')

-- Move line down/up
vim.keymap.set('n', '-', 'ddp')
vim.keymap.set('n', '_', 'ddkP')

