--------------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}

import Data.Monoid (mappend)
import Hakyll

--------------------------------------------------------------------------------
main :: IO ()
main = hakyll $ do
  match "images/*" $ do
    route idRoute
    compile copyFileCompiler

  match "css/*" $ do
    route idRoute
    compile compressCssCompiler

  match (fromList ["index.markdown", "about.markdown", "contact.markdown"]) $ do
    route $ setExtension "html"
    compile $
      pandocCompiler
        >>= loadAndApplyTemplate "templates/default.html" defaultContext
        >>= relativizeUrls

  -- match "index.html" $ do
  --   route idRoute
  --   compile $ do
  --     getResourceBody
  --       >>= applyAsTemplate defaultContext
  --       >>= loadAndApplyTemplate "templates/default.html" defaultContext
  --       >>= relativizeUrls

  match "templates/*" $ compile templateCompiler
