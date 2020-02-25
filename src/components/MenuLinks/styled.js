import styled from 'styled-components';

import { Link } from 'gatsby';

export const MenuLinkWrapper = styled.nav``

export const MenuLinkList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
`

export const MenuLinkItem = styled.li`
    padding: 0.5rem 0;

    .active {
        color: #1fa1f2;
    }
`

export const MenuLinksLink = styled(Link)`
    color: #8899a6;
    text-decoration: color 0.5s;

    &:hover {
        color: #1fa1f2;
    }
`