import React from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles'; // Importa tus estilos
import IconHeader from '../assets/IconHeader.png'

const WelcomeScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Posts List'); // Navegar a la lista de posteos
        }, 1500); // 1000 milisegundos = 1 segundo
    
        // Limpieza del temporizador al desmontar el componente
        return () => clearTimeout(timer);
      }, [navigation]);
    

  return (
    
      <View style={styles.containerWel}>
        
        <Image source={IconHeader} style={styles.welcomeImg} />
    
      </View>
    
  );
};

export default WelcomeScreen;
