import React from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link';

export const NavBar = styled.ul`

`   

const Item = styled.li`
    list-style: none;
    display: inline-block;
    color: #666d71;
    font-size: 1.6em;
`
const ExternalLink = styled.a`
    display: block;
    padding: 10px;

    color: #3e465b;
    text-decoration: none;
`

const Link = styled(GatsbyLink)`
    display: block;
    padding: 10px;

    color: #3e465b;
    text-decoration: none;
`

export const NavLink = ({to, isExternal, children}) => {
    if (isExternal) 
    return (
        <Item>
            <ExternalLink href={to}>{children}</ExternalLink>
        </Item>
    )

   return  <Item>
        <Link to={to}>{children}</Link>
    </Item>
}