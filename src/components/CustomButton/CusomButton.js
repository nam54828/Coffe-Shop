import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CusomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable onPress={
            onPress
    } style={[styles.container, 
    styles[`container_${type}`],
    bgColor ? {backgroundColor : bgColor} : {}
    ]}>
      <Text style={[styles.text,styles[`text_${type}`],
        fgColor ? {color: fgColor} : {}
    ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width : '90%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    
        
    },

    container_PRIMARY : {
        backgroundColor: 'blue'
    },

    container_TERTIARY: {

    },

    text:{
        fontWeight: 'bold',
        color: 'white'
    },

    text_TERTIARY:{
        color: 'grey'
    }
})
export default CusomButton