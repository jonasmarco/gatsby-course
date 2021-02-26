import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { ArrowLeft } from "@styled-icons/evaicons-solid/ArrowLeft"
import { ArrowRight } from "@styled-icons/evaicons-solid/ArrowRight"

import getThemeColor from '../../utils/getThemeColor'

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink paintDrip duration={0.5} hex={getThemeColor()} to={prevPage}>
        <ArrowLeft width={20} /> página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink paintDrip duration={0.5} hex={getThemeColor()} to={nextPage}>
        próxima página <ArrowRight width={20} />
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
