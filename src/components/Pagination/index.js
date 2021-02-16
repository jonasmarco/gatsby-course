import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'gatsby'

import {ArrowLeft} from '@styled-icons/evaicons-solid/ArrowLeft'
import {ArrowRight} from '@styled-icons/evaicons-solid/ArrowRight'

import * as S from './styled'

const Pagination = ({isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => (
    <S.PaginationWrapper>
        {!isFirst && <Link to={prevPage}><ArrowLeft width={20}/> página anterior</Link>}
        <p>{currentPage} de {numPages}</p>
        {!isLast && <Link to={nextPage}>próxima página <ArrowRight width={20}/></Link>}
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