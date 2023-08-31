import React from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles'; 
import IconHeader from '../assets/IconHeader.png'

const WelcomeScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Posts List'); 
        }, 1500); 
    
      
        return () => clearTimeout(timer);
      }, [navigation]);

      const goToDetail = () => {
        navigation.navigate('Posts List');
      };

  return (
    
      <View style={styles.containerWel}>
       <TouchableOpacity onPress={goToDetail}>
        <Image source={IconHeader} style={styles.welcomeImg} />
        </TouchableOpacity> 
    
      </View>
    
  );
};

export default WelcomeScreen;
