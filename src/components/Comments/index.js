import React from 'react'
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styled'

const Comments = ({ url, title}) => {
    const completeURl = `https://willianjusten.com.br${url}`;

    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
                shortname="willianjusten"
                identifier={completeURl}
                title={title}
                url={completeURl}
            />
        </S.CommentsWrapper>
    )
}

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Comments