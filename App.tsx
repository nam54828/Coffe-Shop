import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import SignInScreen from './src/components/Screens/SignInScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
})

export default App