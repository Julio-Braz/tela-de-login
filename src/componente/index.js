import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './Login/styles'


export default function Login () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo} >
            LogIn
            </Text>
                
             <Text style={styles.email}>
                 Email
             </Text>
             <TextInput style={styles.emailInput} placeholder="hola@soytian.tech" keyboardType="email-address"/>
             <Text style={styles.password}>
                 Password
             </Text>
             <TextInput style={styles.passwordInput} placeholder="password" secureTextEntry={true}/>
             <Text style={styles.forgetPassword}>
                Forgot Your Password
             </Text>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.textButton}>Continue</Text>
                </TouchableOpacity>
        </View>
    )
}