import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container:{
    flex: 1,    
    backGroundColor:'#F9F7FC',
    marginLeft: 40,
    marginTop: 60,
    marginRight: 40,


    

    
},
titulo:{
    color: '#292929',
    marginTop: 60,
    fontSize: 22,
    // fontFamily: 'Gotham',
    fontWeight: "bold",
    marginBottom: 30,
    

},
email:{
    fontSize: 16,
    marginBottom: 10


},
emailInput:{
      width:'90%',
        borderRadius: 10,
        height:50,
        borderWidth: 1,
        borderColor: '#64C661', 
        paddingHorizontal: 10,

},
password:{
    fontSize: 16,
    marginBottom: 10,
    marginTop: 30   

},
passwordInput:{
    width:'90%',
    borderRadius: 10,
    height:50,
    borderWidth: 1,
    borderColor:'#292929',
    paddingHorizontal: 10,
    
},
forgetPassword:{
    marginTop: 5,
    color:'#909090',
    paddingHorizontal: 5,


},
textButton:{
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",

},
button:{
    marginTop: 20,
    width:'90%',
    height:50,
    alignItems: "center",
    backgroundColor: "#292929",
    color: '#F9F7FC',
    justifyContent: "center",
    borderRadius: 6,
}

})

export default styles