import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';

const CardItem = styled(Link)`
  min-height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 0.75) 100%
    );
    opacity: 0;
  }

  &:hover {
    color:#fff!important;
    &:after {
      opacity: 1;
    }
    box-shadow: 0 35px 48px rgba(0, 0, 0, 0.3), 0 30px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  div {
    overflow: hidden;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 1rem;
  z-index: 10;
  opacity: 0;

  ${CardItem}:hover & {
    opacity: 1;
  }
`;

const DateWrapper = styled.div`
  font-size: 0.9rem;
`;

const Data = styled.div`
  z-index: 10;
  position: relative;
  width: 100%;
`;

const Content = styled.div`
  padding: 1rem;
  position: relative;
  opacity: 0;

  ${CardItem}:hover & {
    opacity: 1;
  }
`;

const Areas = styled.span`
  font-size: 0.75rem;
`;

const AreaItem = styled.span`
  &:not(:last-child) {
    margin-right: 0.25rem;
    &:after {
      content: ',';
    }
  }
`;

const Name = styled.h2`
  text-transform: uppercase;
  margin-top: 1.25rem;
  margin-bottom: 0;
`;

const Card = ({ path, cover, date, areas, title, slug }) => (
    <CardItem to={path}>
      <Cover>
        <Img sizes={cover} />
      </Cover>
      <Header>
        <DateWrapper>{date}</DateWrapper>
        <Areas>{areas.map(area => <AreaItem key={area}>{area}</AreaItem>)}</Areas>
      </Header>
      <Data>
        <Content>
          <Name>{title}</Name>
        </Content>
      </Data>
    </CardItem>
);

export default Card;
