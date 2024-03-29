import React, { useLayoutEffect } from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from '../firebase';
import { Input, Button } from 'react-native-elements';

const AddChatScreen = ({ navigation }) => {

  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headBackTitle: "Chats",
    })
  }, [navigation]);

    const createChat = async () => {
      await db
      .collection('chats')
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => alert(error))
    }

  return (
    <View style={styles.container}>
      <Input 
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="antedesign" size={24} color="black" />
        }
      />
      <Button disabled={!input} onPress={createChat} title="Create new chat" />
    </View>
  )
}

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  }
});
