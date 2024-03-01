import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../../assets/images/smarthome.png'

import CustomInput from '../../CustomInput'
import CusomButton from '../../CustomButton/CusomButton'

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
      console.warn("Sign in")
    }

    const onForgotPasswordPressed = () => {
      console.warn("onForgotPassword")
    }

    const onSignInFacebook = () => {
      console.warn("OnSignInFacebook")
    }

    const onSignInGoogle = () => {
      console.warn("OnSignInGoogle")
    }

    const onSignInApple = () => {
      console.warn("OnSignInApple")
    }

    const onSignUpPress = () => {
      console.warn("OnSignUpPress")
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' />
    
        <CustomInput placeholder='Username' value={username} setValue={setUsername} />
        <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry />
    
        <CusomButton text="Sign In" onPress={onSignInPressed} />
        <CusomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

        <CusomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor='#E7EAF4' fgColor='#4765A9' />
        <CusomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor='#FAE9EA' fgColor='#D04D44' />
        <CusomButton text="Sign In with Apple" onPress={onSignInApple} bgColor='#e3e3e3' fgColor='#363636' />

        <CusomButton text="Don't have an account? Create one" onPress={onSignUpPress} type="TERTIARY" />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingTop: 50
    },
    logo: {
        width: '70%',
        maxHeight: 500,
        maxWidth: 840,
    
    },
});

export default SignInScreen