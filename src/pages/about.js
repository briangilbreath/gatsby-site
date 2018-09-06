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
  max-width: 80%;
  font-size: .8rem;
  color:#666;
  padding: 0 ${props => props.theme.contentPadding} 1.45rem;
  position: relative;
`;

const Contact = ({

}) => (
  <React.Fragment>
    <Helmet><title>About | {config.siteTitleAlt}</title><meta name="description" content="About Brian Gilbreath"/></Helmet>
    <Header avatar={config.avatar} name={config.name} location={config.location} socialMedia={config.socialMedia} />
    <Content>

        <p>Brian Gilbreath is a street photographer living and photographing in New York City. He specializes in 35mm black and white film, and likes to shoot the people of the city close up with his Nikon F3.</p>

    </Content>
  </React.Fragment>
);

export default Contact;
