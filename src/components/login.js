import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  render() {
    const { username, password } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <Text> Username / Email : </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ username: text })}
            placeholder="Username/Email"
            keyboardType="email-address"            
            value={username}
          />
        </View>
        <View style={styles.loginForm}>
          <Text> Password : </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ password: text })}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Button
              title="Sign In"
              style={{ color: '#ffffff' }}
              onPress={() => {
                console.log('on press');
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  loginForm: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderColor: '#e1e1e1',
    borderWidth: 1,
    textAlign: 'left',
    height: 40,
    minWidth: 300,
    marginVertical: 10,
    paddingVertical: 4,
    paddingHorizontal: 6
  },
  button: {
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    // backgroundColor: '#FFFFFF',
    backgroundColor: '#2EE59D',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 }
  },
  buttonHover: {
    marginTop: 10,
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: '#2EE59D',
    color: '#FFFFFF'
  }
});

export default Login;
