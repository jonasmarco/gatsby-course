import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                category
                background
              }
              timeToRead
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />

      {postList.map(
        ({
          node: {
            frontmatter: { title, date, description, category, background },
            timeToRead,
            fields: { slug },
          },
        }, index) => (
          <PostItem
            key={index}
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
