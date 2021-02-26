import React from "react"
import propTypes from "prop-types"

import getThemeColor from '../../utils/getThemeColor'
import * as S from "./styled"

import { ArrowLeft } from "@styled-icons/evaicons-solid/ArrowLeft"
import { ArrowRight } from "@styled-icons/evaicons-solid/ArrowRight"

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        paintDrip
        duration={0.5}
        hex={getThemeColor()}
        to={previous.fields.slug}
        className="previous"
      >
        <ArrowLeft width={20} /> {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        paintDrip
        duration={0.5}
        hex={getThemeColor()}
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title} <ArrowRight width={20} />
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
