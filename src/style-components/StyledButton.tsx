import React, { FC } from 'react';
import styled from 'styled-components/native';

type StyledButtonProps = {
  backgroundColor: string;
  padding: string;
  margin: string;
};

const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const StyledButtonComponent: FC<Partial<StyledButtonProps>> = ({
  children,
  backgroundColor = '#333',
  padding = '8px',
  margin = '0px',
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
    >
      {children}
    </StyledButton>
  );
};
