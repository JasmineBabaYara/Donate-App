import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  usercontainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#000160",
  },
  header: {
    justifyContent: "space-between",
    marginTop: 20,
    flexDirection: "row",
    padding: 15,
  },
  headertext: {
    color: "#fff",
    fontSize: 18,
    textTransform: "capitalize",
  },
  imagecontainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 15,
    //padding:6
  },
  image: {
    width: 35,
    height: 35,
    alignSelf: "center",
    marginTop: 10,
  },
  rounded: {
    width: 350,
    height: 370,
    alignSelf: "center",
    borderRadius: 180,
  },
  boldtext: {
    position: "absolute",
    top: "25%",
    left: 20,
    fontSize: 60,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    width:240,
  },
  bodytext:{
    flexDirection:'row',
    marginTop:-70
  },
  bodytext1:{
    color:'#fff',
    marginLeft:30
  },
  bodytext2:{
    color:'#fff',
    marginLeft:90,
    width:180,
    lineHeight:25
  },
  addresstext:{
    color:'#fff',
    alignSelf:'flex-end',
    lineHeight:25,
    width:160,
    marginTop:60,
    marginRight:35
  },
  detailscontainer:{
    flexDirection:'row',
    marginTop:80,
    alignItems:'center',
    alignSelf:'center'
  },
  detailstext:{
    color:'rgba(255,255,255,0.6 )',
    marginLeft:12
  },
  donatecontainer:{
    width:'90%',
    borderRadius:30,
    borderColor:'#fff',
    borderWidth:1,
    backgroundColor:'#fff',
    height:50,
    alignItems:'center',
    alignSelf:'center',
    position:'absolute',
    bottom:'6%',
    padding:15,
  },
  donate:{
    alignSelf:'center',
    color:'#310062',
    fontSize:17,
    fontWeight:'500'
  },

  
});

export default styles;
