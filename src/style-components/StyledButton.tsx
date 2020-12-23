import React, { FC } from 'react';
import styled from 'styled-components/native';

type StyledButtonProps = {
  backgroundColor: string;
  padding: string;
  margin: string;
  width: string;
  borderRadius: string;
};

const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export const StyledButtonComponent: FC<Partial<StyledButtonProps>> = ({
  children,
  backgroundColor = '#333',
  padding = '8px',
  margin = '0px',
  width = '100%',
  borderRadius = '10px',
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
      width={width}
      borderRadius={borderRadius}
    >
      {children}
    </StyledButton>
  );
};
