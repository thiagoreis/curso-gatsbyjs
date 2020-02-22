import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar';
import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
            position
          }
        }
      }
    `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          <h1>{title}</h1>
          <S.ProfilePosition><h2>{position}</h2></S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>

      <S.ProfileDescription>
        <p>{description}</p>
      </S.ProfileDescription>

    </S.ProfileWrapper>
  )
}

export default Profile;