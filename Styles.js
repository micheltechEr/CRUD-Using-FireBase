import { StyleSheet } from 'react-native'; 
 const style = StyleSheet.create({
    input:{
        marginTop:30,
        borderStyle:'solid',
        padding:20,
        textAlign:'center',
        marginBottom:-15,
        borderWidth:0.04,
        height:40,
        borderTopColor:'transparent',
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderBottomColor:'#C0C0C0'
    },
    container:{
        width:200,
        alignSelf:'center'
    },
    button:{
        backgroundColor:'#4169E1',
        borderRadius:5,
        width:80,
        height:30,
        marginTop:40,
        alignSelf:'center',
        color:'#FFFFFF',
        fontWeight:'400',
        textAlign:'center',
        paddingVertical:5,
    },

    buttonUpd:{
        backgroundColor:'#00FF7F',
        borderRadius:5,
        width:80,
        height:30,
        marginTop:40,
        alignSelf:'center',
        color:'#FFFFFF',
        fontWeight:'400',
        textAlign:'center',
        paddingVertical:5,
    },
    
    buttonDel:{
        backgroundColor:'#DC143C',
        borderRadius:5,
        width:80,
        height:30,
        marginTop:20,
        alignSelf:'center',
        color:'#FFFFFF',
        fontWeight:'400',
        textAlign:'center',
        paddingVertical:5,
    },
    icon:{
        
    }
})

export default style