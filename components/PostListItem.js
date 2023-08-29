import React from 'react';
import { Text, TouchableOpacity, Image, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles'; 
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

const PostListItem = ({ post }) => {
  const navigation = useNavigation();

  const userProfileImage = userImages[post.userId - 1];

  const goToDetail = () => {
    navigation.navigate('Details', { post });
  };

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{post.title.toUpperCase()}</Text>
        <Text style={styles.postExcerpt}>{post.body.length > 50 ? post.body.charAt(0).toUpperCase() + post.body.substring(1, 50) + "..." : post.body.charAt(0).toUpperCase() + post.body.substring(1, post.body.length) + "."}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Image source={userProfileImage} style={styles.userImage} />
        <Text style={styles.userPost}>User Name {post.userId}</Text>
        <TouchableOpacity onPress={goToDetail} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>READ MORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostListItem;
