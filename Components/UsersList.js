import React, { useEffect,useState} from 'react'
import {View,Text, TouchableOpacity, } from 'react-native'
import style from './Styles'
import firebase from './firebase'
import {useNavigation} from '@react-navigation/native'
import {ListItem,Avatar} from 'react-native-elements'
export default function UsersList (props) {
  const navigation = useNavigation()
const[users,setUsers] = useState([])

useEffect(()=>{
firebase.db.collection('users').onSnapshot(querySnapshot=>{
  const users = []
  querySnapshot.docs.forEach(doc =>{
    const {name,email,password} = doc.data()
    users.push({
      id:doc.id,
      name,
      email,
      password
    })
  })
  setUsers(users)
})
},[])

    return(
  <View>
      <TouchableOpacity onPress = {()=>{navigation.navigate('CreateUseScreen')}}>
        <Text style = {style.button}>Create Users</Text>
      </TouchableOpacity>
      {
        users.map(user =>{
          return(
            <ListItem
             key = {user.id}
             bottomDivider onPress ={()=>{ navigation.navigate('UsersDetails',{
               userId:user.id})}}
            >
              <ListItem.Chevron />
              <ListItem.Content>
              <Avatar
                  source={{
                    uri:'https://reactnativeelements.com/img/avatar/avatar--photo.jpg'
                  }}
                  rounded
                   />
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Title>{user.email}</ListItem.Title>
                <ListItem.Title>{user.password}</ListItem.Title>

                </ListItem.Content>

            </ListItem>
          )
        })
      }
  </View>
    )
}