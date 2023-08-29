import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native'; // Importa ScrollView
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import user5 from '../assets/user5.png';
import user6 from '../assets/user6.png';
import user7 from '../assets/user7.png';
import user8 from '../assets/user8.png';
import user9 from '../assets/user9.png';
import user10 from '../assets/user10.png';

const userImages = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]

const DetailsScreen = ({ route }) => {
  const { post } = route.params;
  const userProfileImage = userImages[post.userId - 1];

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title:"Go back",
      headerStyle: {
        backgroundColor:'#56388a',
        elevation: 0,
        
      },
      headerTintColor: '#d4cffe', 
      headerTitleStyle: {
        fontSize: 18, // Ajusta el tamaño de la letra según tu preferencia
        marginLeft: -20, // Ajusta el margen izquierdo según tu preferencia
      },
      headerLeftContainerStyle: {
        marginLeft: 0, // Ajusta el margen izquierdo de la flecha según tu preferencia
      },
    });
  }, [navigation, post.title]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fcfdff"}}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.detailsTitle}>{post.title.toUpperCase()}</Text>
        <Text style={styles.detailsBody}>{post.body.charAt(0).toUpperCase() + post.body.substring(1, post.body.length) + "."}</Text>
      </ScrollView>

      <View style={styles.userIdContainer}>
        <Image source={userProfileImage} style={styles.userImage} />
        <Text style={styles.detailsUserId}>By: User Name {post.userId}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;