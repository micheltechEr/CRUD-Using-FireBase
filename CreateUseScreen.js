import React,{useState} from 'react'
import firebase from './firebase'
import {View,Text, TextInput, TouchableOpacity} from 'react-native'
import style from './Styles'
import {useNavigation} from '@react-navigation/native'

export default function CreateUserScreen  (){
    const  navigation = useNavigation()
    const [state,setState] = useState({ 
        name :"",
        email :"",
        password:"",
    })
    const handleChangeText =(name,value) =>{
        setState({...state,[name]:value}) //Os elementos do state são desempacotados(name,email,password), após isso ele seciona se receberá um nome ou um valor.
        //Basicamente ele irá receber alguma propriedade do state e algum valor ou nome
    }

    const saveNewUser = async() =>{
        try{
            if(state.name === '' || state.email === '' || state.password === ''){
                alert('Provide a value')
            }
            else{
               await firebase.db.collection('users').add({
                    name:state.name,
                    email: state.email,
                    password: state.password
                   
                })
                alert('Saved')
            }
        }
        catch(e){
            console.log('Erro de inserção')
        }      
    }
    return(
        <View  style ={style.container}>
            <TextInput style= {style.input} placeholder={'Name'}  onChangeText ={(value)=> handleChangeText('name',value)} ></TextInput>
            <TextInput  style= {style.input} placeholder={'Email'} autoCompleteType={'email'} onChangeText ={(value)=> handleChangeText('email',value)}></TextInput>
            <TextInput  style= {style.input} placeholder={'Passowrd'} autoCompleteType={'password'} secureTextEntry={true} onChangeText ={(value)=> handleChangeText('password',value)}></TextInput> 
            <TouchableOpacity onPress={()=>saveNewUser()}>
                <Text style ={style.button}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}