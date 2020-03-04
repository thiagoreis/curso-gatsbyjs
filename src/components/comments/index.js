import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import propTypes from "prop-types"

import * as S from "./styled"
const Comments = ({ url, title }) => {
  const completeUrl = `https://thiago.dev${url}`
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle></S.CommentsTitle>
      <ReactDisqusComments
        shortname="thiagoreis"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.CommentsWrapper>
  )
}
Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}
export default Comments
