local lsp = require('lsp-zero')
lsp.preset('recommended')

lsp.on_attach(function(client, bufnr)
    lsp.default_keymaps({buffer = bufnr})
    client.server_capabilities.semanticTokensProvider = nil
end)

require('mason').setup({})
require('mason-lspconfig').setup({
    ensure_installed = {
        'clangd',
        'pyright',
        'rust_analyzer',
        'eslint',
    },
    handlers = {
        lsp.default_setup,
        ['clangd'] = function ()
            require('lspconfig').clangd.setup {
                cmd = {
                    'clangd',
                    '--background-index',
                    -- by default, clang-tidy use -checks=clang-diagnostic-*,clang-analyzer-*
                    -- to add more checks, create .clang-tidy file in the root directory
                    -- and add Checks key, see https://clang.llvm.org/extra/clang-tidy/
                    "--clang-tidy",
                    "--completion-style=bundled",
                    "--header-insertion=iwyu",
                }
            }
        end
    },
})

local cmp = require('cmp')
local cmp_select = {behavior = cmp.SelectBehavior.Select}
local cmp_mappings = lsp.defaults.cmp_mappings({
    ['<C-p>'] = cmp.mapping.select_prev_item(cmp_select),
    ['<C-n>'] = cmp.mapping.select_next_item(cmp_select),
    ['<C-l>'] = cmp.mapping.confirm(cmp_select),
    ['<C-Space>'] = cmp.mapping.complete(),
})

lsp.setup()
