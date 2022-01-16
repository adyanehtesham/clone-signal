import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements';
import { auth } from "../firebase";

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    })
  }, [navigation])

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      authUser.user.updateProfile({
        displayName: name,
        photoURL: imageUrl || "https://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
      })
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={styles.container}>

      <StatusBar style="light" />

      <Text h3 style="{{ marginBottom: 50}}">
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Password"
          secureTextEntry
          autoFocus
          type="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Profile Picture URL (Optional)"
          autoFocus
          type="text"
          value={imageUrl}
          onChangeText={text => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        containerStyle={styles.button} 
        raised
        onPress={register}
        title="Register"
      />

      <View style={{height: 100}} />


    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  }
})
