import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <SEO
        title="Busca"
        description="Busque por título ou termo"
    />

    <Search />
  </Layout>
)

export default SearchPage
