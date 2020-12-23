import { FC } from 'react';
import styled from 'styled-components/native';

type StyledTextProps = {
  textColor: string;
};

const StyledText = styled.Text<StyledTextProps>`
  color: ${({ textColor }) => textColor};
`;

export const StyledTextComponent: FC<StyledTextProps> = ({
  textColor = 'black',
}) => {
  return <StyledText textColor={textColor} />;
};
