import React, { useEffect,useState } from 'react'
import { ActivityIndicator } from 'react-native'
import {View,Text ,TextInput, TouchableOpacity,Alert} from 'react-native'
import firebase from './firebase'
import style from './Styles'
import {useNavigation} from '@react-navigation/native'

export default function UsersDetails(props){
    const  navigation = useNavigation()
    const initialState = {
        id:'',
        name:'',
        email:'',
        password:''
    }
     const[user,setUser] = useState(initialState)
     const [loading,setLoading] = useState(true) //Defina se o indicador de carregamento é mostrado.
     const getUsersById =  async (id) =>{
       try{
        const dbRef = firebase.db.collection('users').doc(id)
        const  doc = await dbRef.get()
        const user = doc.data()
        setUser({
            ...user,
            id:doc.id,
        })
        setLoading(false)
       }
       catch(e){
           Alert.alert('Error')
        }  
    }  
    const handleChangeText =(name,value) =>{
        setUser({...user,[name]:value})
        if(loading){
            return(
                <View>
                    <ActivityIndicator size = "large" color="#A9A9A9" />
                </View>
            )
        }
    }  
    useEffect(()=>{
        getUsersById(props.route.params.userId)
       
    },[])
   const deleteUser = async () =>{
       try{
        const delRef = firebase.db.collection('users').doc(props.route.params.userId)
        await delRef.delete()
        alert('Removed')
        props.navigation.navigate('UsersList')
       }
       catch(e){
           Alert.alert('Removal error,try again')
       }
   }


   const updateUser = async() =>{
       try{
        const upRef = firebase.db.collection('users').doc(user.id)
        await upRef.set({
            name :user.name,
            email:user.email,
            password:user.password
        })
        setUser(initialState)
        Alert.alert('Updated')
        props.navigation.navigate('UsersList')
       }
       catch(e){
           Alert.alert('Update error,try again')
       }
  }

    return(
        <View>
             <TextInput style= {style.input} placeholder={'Name'}  value ={user.name} onChangeText ={(value)=> handleChangeText('name',value)} ></TextInput>
             <TextInput  style= {style.input} placeholder={'Email'}  value={user.email} autoCompleteType={'email'} onChangeText ={(value)=> handleChangeText('email',value)}></TextInput>
             <TextInput  style= {style.input} placeholder={'Passowrd'}   value = {user.password} autoCompleteType={'password'} secureTextEntry={true} onChangeText ={(value)=> handleChangeText('password',value)}></TextInput>
                   <TouchableOpacity onPress={()=>updateUser()}>
                      <Text style ={style.buttonUpd}>UPDATE</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>deleteUser()}>
                     <Text style ={style.buttonDel}>DELETE</Text>
                   </TouchableOpacity>
        </View>
    )
}
