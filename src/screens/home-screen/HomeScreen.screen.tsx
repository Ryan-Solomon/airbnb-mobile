import React from 'react';
import {
  StyledHomeScreenContainer,
  StyledBackground,
} from './HomeScreen.styles';
import { ImageBackground, StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <StyledHomeScreenContainer>
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
    height: '70%',
  },
});
