import React from 'react';
import {
  StyledHomeScreenContainer,
  StyledSearchBar,
  StyledHeroTitle,
  StyledContent,
} from './HomeScreen.styles';
import { ImageBackground, StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <StyledHomeScreenContainer>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/wallpaper.jpg')}
      >
        <StyledSearchBar placeholder='Where are you going?' />
        <StyledContent>
          <StyledHeroTitle>Go Near</StyledHeroTitle>
        </StyledContent>
      </ImageBackground>
    </StyledHomeScreenContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: '85%',
  },
});
