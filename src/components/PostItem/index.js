import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="">
    <S.PostItemWrapper>
      <S.PostItemTag background="#000DDD">TEST</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          29 de Dezembro de 2020 - 4 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </S.PostItemTitle>
        <S.PostItemDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia enim
          quaerat cumque harum vel voluptatibus id pariatur exercitationem.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
