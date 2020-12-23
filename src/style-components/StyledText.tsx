import React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';

type StyledTextProps = {
  textColor: string;
  fontSize: string;
  textAlign: string;
  margin: string;
  textShadow: string;
};

const StyledText = styled.Text<StyledTextProps>`
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ margin }) => margin};
  text-shadow: ${({ textShadow }) => textShadow};
`;

export const StyledTextComponent: FC<Partial<StyledTextProps>> = ({
  textColor = 'black',
  fontSize = '16px',
  textAlign = 'center',
  margin = '0px',
  textShadow = '0px 0px 0px',
  children,
}) => {
  return (
    <StyledText
      textColor={textColor}
      fontSize={fontSize}
      textAlign={textAlign}
      margin={margin}
      textShadow={textShadow}
    >
      {children}
    </StyledText>
  );
};
