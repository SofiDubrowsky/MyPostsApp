import React, { useState, useEffect } from 'react';
import { TextInput, Image, View, FlatList, Button, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import PostListItem from '../components/PostListItem';
import LoadingIndicator from '../components/LoadingIndicator';
import styles from '../styles'; // Importar los estilos
import errorImg from "../assets/error.png"
import reloadImg from "../assets/reload.png"
import { FontAwesome } from 'react-native-vector-icons';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState(10); // Inicialmente cargamos 10
  const [loadingMore, setLoadingMore] = useState(false); // Estado de carga más posteos
  const [error, setError] = useState(false);
  const [searchUserId, setSearchUserId] = useState('');
  const [userNotFound, setUserNotFound] = useState(false); 

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Mostrar el loader por 1 segundo
      })
      .catch(error => {
        setError(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Mostrar el loader por 1 segundo
      });
  }, []);

  const loadMorePosts = () => {
    setLoadingMore(true); // Iniciar carga
    // Simular retardo de carga (puedes quitarlo en tu aplicación real)
    setTimeout(() => {
      setLoadedPosts(prevLoadedPosts => prevLoadedPosts + 10);
      setLoadingMore(false); // Finalizar carga
    }, 100);
  };

  const reloadPosts = () => {
    setError(false);
    setLoading(true);

    setTimeout(() => {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          setPosts(data);
          setLoading(false);
        })
        .catch(error => {
          setError(true);
          setLoading(false);
        });
    }, 1000); // Mostrar el loader por 1 segundo
  };

  const filterPostsByUserId = () => {
    if (searchUserId === '') {
      // Si no hay valor de búsqueda, muestra todos los posteos
      return posts.slice(0, loadedPosts);
    } else {
      // Filtra los posteos por el ID de usuario
      return posts.filter(post => post.userId.toString() === searchUserId).slice(0, loadedPosts);
    }
  };

  const renderPosts = () => {
    const visiblePosts = filterPostsByUserId();
    if(visiblePosts.length > 0){
      return (
        <FlatList
          data={visiblePosts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PostListItem
              post={item}
              onPress={() => navigation.navigate('Details', { post: item })}
            />
          )}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator style={styles.loader} size="small" color="#8959dd" />
            ) : (
              // <Button title="View more" onPress={loadMorePosts} />
              <TouchableOpacity onPress={loadMorePosts} style={styles.viewMore}>
                <Text style={styles.viewMoreText}>View More</Text>
              </TouchableOpacity>
            )
          }
        />
      );
    } else {
      return (<Text style={styles.errorMessage}>User not found</Text>)
    }
  };

  if (loading) {
    return <ActivityIndicator size="big" color="#8959dd" style={styles.loaderList} />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Image source={errorImg} style={styles.errorImg} />
        <Text style={styles.errorMessage1}>
          Oops!
        </Text>
        <Text style={styles.errorMessage}>
          There seems to be an error in loading the data. Please try again later.
        </Text>
        <TouchableOpacity onPress={reloadPosts} style={styles.viewMore}>
          <Image source={reloadImg} style={styles.reloadImg} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>

        <TextInput
          style={styles.searchInput}
          placeholder="Search by User ID"
          value={searchUserId}
          onChangeText={text => setSearchUserId(text)}
          keyboardType="numeric"
        />

        <FontAwesome name="search" size={25} color="#d4cffe" style={styles.searchIcon} />

      </View>
      {renderPosts()}
    </View>
  );
};

export default PostsScreen;

