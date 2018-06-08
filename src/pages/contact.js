import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Header from '../components/Header';
import config from '../../config/site';
import Helmet from 'react-helmet';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.theme.gridColumns}, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    position: static !important;
  }
`;

const Content = styled.div`
  text-align: center;
  margin: -6rem auto 6rem auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 0 ${props => props.theme.contentPadding} 1.45rem;
  position: relative;
`;

const Contact = ({

}) => (
  <React.Fragment>
    <Helmet><title>Contact | {config.siteTitleAlt}</title><meta name="description" content="Contact Brian Gilbreath"/></Helmet>
    <Header avatar={config.avatar} name={config.name} location={config.location} socialMedia={config.socialMedia} />
    <Content>

        <iframe height="420" width="600"
          allowtransparency="true"
          frameBorder="0"
          scrolling="no"
          src="https://hippobraindesign.wufoo.com/embed/q1dpkypk0u2sykd/">
        </iframe>

    </Content>
  </React.Fragment>
);

export default Contact;
