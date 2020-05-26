import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, FONTS } from './constants';

export const MainContainer = styled.main`
  background: ${COLORS.mainBackground};
`;

export const Title = styled.h1`
  padding-top: 20px;
  font-size: 1.5em;
  text-align: center;
  color: ${COLORS.title};
  font-family: ${FONTS.family};
`;

export const Section = styled.section`
  position: relative;
  top: -50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${FONTS.family};
  font-weight: 400;
  font-size: 30px;
  font-style: italic;
`;

export const List = styled.ul`
  font-family: ${FONTS.family};
  font-weight: 100;
  font-style: normal;
  font-size: 30px;
  list-style: none;
  position: relative;
  left: -12px;
`;

export const AddString = styled(Link)`
  color: ${COLORS.title};
  text-decoration: none;
  padding: 20px;
  border: 2px solid ${COLORS.title};
  border-radius: 3px;
`;
