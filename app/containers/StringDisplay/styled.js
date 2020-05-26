import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, FONTS } from './constants';
import { backgroundColorChange } from './keyFrames';
// Page styling for StringDisplay and StringForm
export const MainContainer = styled.main`
  background: ${COLORS.mainBackground};
  border: 1px solid ${COLORS.mainBackground};
`;

// Utility for main styling
export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-family: ${FONTS.family};
  font-weight: 400;
  font-size: 30px;
  font-style: italic;
`;

export const Title = styled.h1`
  padding-top: 20px;
  font-size: 1.5em;
  text-align: center;
  color: ${COLORS.title};
  font-family: ${FONTS.family};
`;

// Utility for navigating links

export const List = styled.ul`
  font-family: ${FONTS.family};
  font-weight: 100;
  font-style: normal;
  font-size: ${props => (props.fontSize ? '15px' : '30px')};
  list-style: none;
  position: relative;
  left: -12px;
`;

// StringForm styling

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StringNavigation = styled(Link)`
  color: ${COLORS.title};
  text-decoration: none;
  padding: 20px;
  border: 2px solid ${COLORS.title};
  border-radius: 3px;
  outline: none;
  &:focus {
    border: 5px solid ${COLORS.title};
  }

  &:hover {
    animation: ${backgroundColorChange} 1s forwards;
    color: ${COLORS.mainBackground};
    background: ${COLORS.title};
    border: 2px solid ${COLORS.mainBackground};
  }
`;

export const SubmitString = styled.button`
  padding: 10px 20px;
  background: ${COLORS.mainBackground};
  border: 2px solid ${COLORS.title};
  border-radius: 3px;
  color: ${COLORS.title};
  cursor: pointer;
  outline: none;
  &:focus {
    border: 5px solid ${COLORS.title};
  }

  &:hover {
    animation: ${backgroundColorChange} 1s forwards;
    color: ${COLORS.mainBackground};
    background: ${COLORS.title};
    border: 2px solid ${COLORS.mainBackground};
  }
`;

export const TextArea = styled.textarea`
  font-size: 18px;
  resize: none;
  outline: none;
  &:focus {
    border: 5px solid ${COLORS.title};
  }
`;
