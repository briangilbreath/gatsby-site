import React from 'react';
import styled from 'styled-components';

const Content = styled.p`
  color: ${props => props.theme.colors.secondary};
  padding: 0 ${props => props.theme.contentPadding};
  text-align: center;
`;

const Footer = () => (
  <Content>
    &copy; {new Date().getFullYear()} - Brian Gilbreath
  </Content>
);

export default Footer;
