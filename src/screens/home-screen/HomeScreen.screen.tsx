import React from 'react';
import {
  StyledHomeScreenContainer,
  StyledSearchBar,
  StyledHeroTitle,
  StyledContent,
} from './HomeScreen.styles';
import { ImageBackground, StyleSheet } from 'react-native';
import { StyledTextComponent } from './../../style-components/StyledText';

export const HomeScreen = () => {
  return (
    <StyledHomeScreenContainer>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/wallpaper.jpg')}
      >
        <StyledSearchBar placeholder='Where are you going?' />
        <StyledContent>
          <StyledTextComponent>Go Near</StyledTextComponent>
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
