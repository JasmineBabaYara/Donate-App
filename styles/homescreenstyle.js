import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homecontainer: {
        width:'100%',
        height:'100%',
        display:'flex',
    },
    lineargradient:{
        width:'100%',
        height:'100%'
    },
    searchcontainer:{
        alignItems:'center',
        flexDirection:'row',
        padding:17,
        alignSelf:'center',
        marginTop:30,
        justifyContent:'space-between',
    },
    input:{
        backgroundColor:'#fff',
        height:50,
        borderWidth:2,
        borderColor:'#fff',
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        paddingLeft:95,
        paddingRight:75,
        shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
          },
      shadowOpacity: 0.4,
      shadowRadius: 10.32,
      elevation: 2,
    },
    searchicon:{
        //flex:1,
        backgroundColor:'#310062',
        height:50,
        alignItems:'center',
        padding:13,
        borderWidth:2,
        borderColor:'#310062',
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
    },
    rounded:{
        width:350,
        height:350,
        alignSelf:'center',
        marginTop:50,
        borderRadius:175,
        shadowColor: "#AEA4E7",
      shadowOffset: {
        width: 2,
        height: 0,
          },
      shadowOpacity: 0.4,
      shadowRadius: 10.32,
      elevation: 2,
    },
    hometext:{
        position:'absolute',
        top:'32%',
        left:15
    },
    taptext:{
        fontSize:60,
        color:'#310062',
        textTransform:'uppercase',
        fontWeight:'500'
    },
    donatetext:{
        fontSize:60,
        color:'#310062',
        textTransform:'uppercase',
        fontWeight:'500',
    },
    donetext:{
        fontSize:60,
        color:'#310062',
        textTransform:'uppercase',
        fontWeight:'500',
    },
    hometext2:{
        flexDirection:'row',
        marginTop:50
    },
    donortext:{
        fontSize:15,
        color:'#310062',
        marginLeft:30,
        fontWeight:'bold',
        textDecorationLine:'underline',
        lineHeight:25
    },
    infotext:{
        width:215,
        marginLeft:50,
        color:'#310062',
        lineHeight:25,
    }

    
})

export default styles;