import React from 'react';
import {
  StyledBackground,
  StyledHomeScreenContainer,
} from './HomeScreen.styles';

export const HomeScreen = () => {
  return (
    <StyledHomeScreenContainer>
      <StyledBackground
        source={require('../../../assets/images/wallpaper.jpg')}
      />
    </StyledHomeScreenContainer>
  );
};
