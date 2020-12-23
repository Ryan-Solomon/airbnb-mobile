import React from 'react';
import {
  StyledHomeScreenContainer,
  StyledSearchBar,
  StyledHeroTitle,
  StyledContent,
} from './HomeScreen.styles';
import { ImageBackground, StyleSheet } from 'react-native';
import { StyledTextComponent } from './../../style-components/StyledText';
import { StyledButtonComponent } from '../../style-components/StyledButton';

export const HomeScreen = () => {
  return (
    <StyledHomeScreenContainer>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/wallpaper.jpg')}
      >
        <StyledSearchBar placeholder='Where are you going?' />
        <StyledContent>
          <StyledTextComponent
            textColor='white'
            fontSize='54px'
            textAlign='left'
            textShadow='2px 2px 20px black'
            margin='0 0 -12px 0'
          >
            Go
          </StyledTextComponent>
          <StyledTextComponent
            textColor='white'
            fontSize='54px'
            textAlign='left'
            textShadow='2px 2px 20px black'
          >
            Near
          </StyledTextComponent>
          <StyledButtonComponent
            padding='12px 0px'
            margin='20px 0px 0px 0px'
            backgroundColor='white'
            width='55%'
          >
            <StyledTextComponent>Explore nearby stays</StyledTextComponent>
          </StyledButtonComponent>
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
