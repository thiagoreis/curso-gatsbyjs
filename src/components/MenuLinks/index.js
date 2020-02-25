import React from 'react';

import links from './content';

import * as S from './styled';

const MenuLinks = () => (
    <S.MenuLinkWrapper>
        <S.MenuLinkList>
            {links.map((link, i) => (
                <S.MenuLinkItem key={i}>
                    <S.MenuLinksLink activeClassName='active' to={link.url}>{link.label}</S.MenuLinksLink>
                </S.MenuLinkItem>
            ))
            }
        </S.MenuLinkList>
    </S.MenuLinkWrapper>
);

export default MenuLinks;