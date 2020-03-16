import styled from "styled-components"

import { Link } from "gatsby"

export const MenuLinkWrapper = styled.nav``

export const MenuLinkList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinkItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--highlight);
  }
`

export const MenuLinksLink = styled(Link)`
  color: var(--postColor);
  text-decoration: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`
