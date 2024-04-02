import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(false) 

  return (
    <View style={styles.conatiner}>
      <Text style={styles.headingText}>Login Page</Text>
      <View style={styles.card}>
        <View style={styles.elevatedCard}>
          <Text style= {styles.username}>Username</Text>
          <TextInput
          onChangeText={text => setUsername(text)}></TextInput>
          <Text style={styles.password}>Password</Text>
          <TextInput
          onChangeText={text => setPassword(text)}></TextInput>
          <TouchableOpacity
          onPress={()=> setIsLogin(true)}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
        {isLogin && (
          <View>
            <Text style={styles.successCard}>Login Successful</Text>
          </View>
        )}
        {!isLogin && (
        <View>
          <Text style={styles.failCard}>Enter valid username and password</Text>
        </View>) }
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#DAE0E2',
    width: 400,
    height: 600
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    textAlign: 'center',
    marginTop: 20,
    color: '#30336B'
  },

  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 4
  },

  elevatedCard: {
    backgroundColor: '#99AAAB',
    elevation: 4,
    width: 300,
    height: 200
  },
  
  username: {
    fontSize: 20,
    color: '#2475B0',
    textAlign: 'center'
  },

  password: {
    fontSize: 20,
    color: '#2475B0',
    textAlign: 'center'
  },

  login : {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3C40C6'
  },
  
  successCard: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6ab04c'
  },

  failCard: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E71C23'
  }
})

export default Login;