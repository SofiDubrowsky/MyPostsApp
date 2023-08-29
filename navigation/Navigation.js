import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import PostsScreen from '../screens/PostsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import WelcomeScreen from '../screens/WelcomeScreen'; 
import IconHeader from "../assets/IconHeader.png"

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Posts List"
          component={PostsScreen}
          options={{
            headerStyle: {
              backgroundColor: '#56388a',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            },
            headerTintColor: 'white',
            headerLeft: () => (
              <Image source={IconHeader} style={{ marginLeft: 25, height: 30, width: 30, marginTop:5 }} /> // Aplica estilos según necesites
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
