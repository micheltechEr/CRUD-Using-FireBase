import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UsersList from './Components/UsersList'
import UsersDetails from './Components/UsersDetails'
import CreateUserScreen from './Components/CreateUseScreen'

const Stack =  createStackNavigator()
function MyStack(){

  return(
    <Stack.Navigator>
              <Stack.Screen  name = 'UsersList'component = {UsersList} options={{title:'Users List'}}/>
              <Stack.Screen  name = 'CreateUseScreen'component = {CreateUserScreen} options={{title:'Create a new User'}} />
            <Stack.Screen  name = 'UsersDetails'component = {UsersDetails} options={{title:'User Detail'}} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


