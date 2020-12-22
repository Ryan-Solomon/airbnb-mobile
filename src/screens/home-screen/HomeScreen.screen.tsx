import React from 'react';
import {
  StyledHomeScreenContainer,
  StyledSearchBar,
} from './HomeScreen.styles';
import { ImageBackground, StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <StyledHomeScreenContainer>
      <StyledSearchBar />
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/wallpaper.jpg')}
      />
    </StyledHomeScreenContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: '85%',
  },
});
