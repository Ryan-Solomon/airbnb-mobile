import { FC } from 'react';
import styled from 'styled-components/native';

type StyledTextProps = {
  textColor: string;
  fontSize: string;
  textAlign: string;
  margin: string;
};

const StyledText = styled.Text<StyledTextProps>`
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ margin }) => margin};
`;

export const StyledTextComponent: FC<StyledTextProps> = ({
  textColor = 'black',
  fontSize = '16px',
  textAlign = 'center',
  margin = '0px',
}) => {
  return (
    <StyledText
      textColor={textColor}
      fontSize={fontSize}
      textAlign={textAlign}
      margin={margin}
    />
  );
};
