import React from 'react';
import 'prismjs/themes/prism.css';
import CookieConsent from "react-cookie-consent";
import { useLocation } from "@reach/router"
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'

import '../global-styles';
import userConfig from '../../config';

import Header from '../components/Header';
import GlobalStyle from '../global-styles';

const Template = ({ children }) => {
  const location = useLocation()
  return (
    <div>
      <GlobalStyle />
      <Header config={userConfig} />
      {children}
      <CookieConsent
        location="bottom"
        cookieName="gatsby-gdpr-google-analytics"
        onAccept={() => {
          initializeAndTrack(location)
        }}
      >
        This website protects your privacy by adhering to the European Union General Data Protection Regulation (GDPR). 
        We will not use your data for any purpose that you do not consent to and only to the extent not exceeding data which is necessary in relation to a specific purpose(s) of processing. You can grant your consent(s) to use your data for specific purposes below or by clicking "Agree to all".
      </CookieConsent>
    </div>
  );
}

export default Template;
