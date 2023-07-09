import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';
import { NavBar, NavLink} from '../NavBar'

function Header({ config }) {
  const { headline, description, social } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{headline}</Link></H1>
        <P>{description}</P>
        {social &&
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
          />
        }
        <NavBar>
          <NavLink to='/'>Strona Główna</NavLink> | 
          <NavLink to='https://olek.gumroad.com/l/chleb' isExternal>Książka: Domowy chleb w 12 minut</NavLink> | 
          <NavLink to='https://olek.gumroad.com/l/ksiazka' isExternal>Książka: 101 przepisów na domową pizzę</NavLink> |
          <NavLink to='/kontakt'>Kontakt</NavLink>
        </NavBar>
      </Wrapper>
    </Container> 
  );
}

export default Header;