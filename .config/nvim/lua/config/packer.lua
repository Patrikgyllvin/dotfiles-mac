local ensure_packer = function()
  local fn = vim.fn
  local install_path = fn.stdpath('data')..'/site/pack/packer/start/packer.nvim'
  if fn.empty(fn.glob(install_path)) > 0 then
    fn.system({'git', 'clone', '--depth', '1', 'https://github.com/wbthomason/packer.nvim', install_path})
    vim.cmd [[packadd packer.nvim]]
    return true
  end
  return false
end

local packer_bootstrap = ensure_packer()

return require('packer').startup(function(use)
    -- Packer can manage itself
    use 'wbthomason/packer.nvim'

    -- lsp, autocompletion
    use {
        'VonHeikemen/lsp-zero.nvim',
        requires = {
            -- LSP Support
            {'neovim/nvim-lspconfig'},             -- Required
            {'williamboman/mason.nvim'},           -- Optional
            {'williamboman/mason-lspconfig.nvim'}, -- Optional

            -- Autocompletion
            {'hrsh7th/nvim-cmp'},         -- Required
            {'hrsh7th/cmp-nvim-lsp'},     -- Required
            {'hrsh7th/cmp-buffer'},       -- Optional
            {'hrsh7th/cmp-path'},         -- Optional
            {'saadparwaiz1/cmp_luasnip'}, -- Optional
            {'hrsh7th/cmp-nvim-lua'},     -- Optional

            -- Snippets
            {'L3MON4D3/LuaSnip'},             -- Required
            {'rafamadriz/friendly-snippets'}, -- Optional
        }
    }

    --use({ -- improves neovim lsp experience
	--	"glepnir/lspsaga.nvim",
	--	config = function()
	--		require("lspsaga").setup({})
	--	end,
	--	requires = {
	--		{ "nvim-tree/nvim-web-devicons" },
	--		--Please make sure you install markdown and markdown_inline parser
	--		{ "nvim-treesitter/nvim-treesitter" },
	--	},
	--})

    use 'onsails/lspkind.nvim'

    -- syntax
    use { -- hightlighting
        'nvim-treesitter/nvim-treesitter',
        run = ':TSUpdate'
    }

    use 'folke/lsp-colors.nvim'

    -- git & file management
    use 'tpope/vim-fugitive'

    use {
        'kdheepak/lazygit.nvim',
        requires = 'nvim-lua/plenary.nvim',
    }

    use {'akinsho/bufferline.nvim', requires = 'nvim-web-devicons'}

    use {
        'nvim-tree/nvim-tree.lua',
        requires = 'nvim-web-devicons', -- optional, for file icons
        tag = 'nightly' -- optional, updated every week. (see issue #1193)
    }

    use 'lewis6991/gitsigns.nvim'

    -- formatting

    use 'echasnovski/mini.trailspace'

    --aesthetics
    use "lukas-reineke/indent-blankline.nvim"

    use 'kyazdani42/nvim-web-devicons'
    use {
        'yamatsum/nvim-nonicons',
        requires = 'kyazdani42/nvim-web-devicons',
        -- require('nvim-nonicons').setup(),
    }

    use 'rcarriga/nvim-notify'
    use 'shaunsingh/nord.nvim'
    use {
        'nvim-lualine/lualine.nvim',
        requires = { 'kyazdani42/nvim-web-devicons', opt = true }
    }

    use 'rmehri01/onenord.nvim'
    use 'arzg/vim-colors-xcode'

    -- general tools
    use {
        'nvim-telescope/telescope.nvim', tag = '0.1.x',
        -- or                            , branch = '0.1.x',
        requires = 'nvim-lua/plenary.nvim',
    }

    use 'goolord/alpha-nvim' -- startup menu
    use 'ggandor/lightspeed.nvim' -- fast navigation

    use { 'dccsillag/magma-nvim', run = ':UpdateRemotePlugins' } -- jupyter
    use 'untitled-ai/jupyter_ascending.vim'

    use { -- pdf reader
        'marioortizmanero/adoc-pdf-live.nvim',
        config = "require('adoc_pdf_live').setup()"
    }

    use({'scalameta/nvim-metals', requires = { "nvim-lua/plenary.nvim" }}) -- scala metals

    use { -- markdown headlines
        'lukas-reineke/headlines.nvim',
        config = function()
            require('headlines').setup()
        end,
    }

    use 'mbbill/undotree'

    if packer_bootstrap then
        require('packer').sync()
    end
end)
