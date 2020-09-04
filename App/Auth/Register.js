import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Form, Item, Input, Button, Text } from 'native-base';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      authanticated: false,
      error: null,
      message: null
    };
  }
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={{ paddingHorizontal: '10%' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ height: 229, resizeMode: 'contain', width: 300, marginTop: 40, marginBottom: 30 }}
              source={require('../Assets/images/logo_horizontal.png')}
            />
          </View>
          <Form>
            <Item>
              <Input
                placeholder="Mailiniz"
                keyboardType="email-address"
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  secondTextInput._root.focus();
                }}
                blurOnSubmit={false}
                // onChangeText={(e) => this.setState({ email: e })}
              />
            </Item>
            <Item>
              <Input
                placeholder="Şifreniz"
                secureTextEntry={true}
                ref={(input) => {
                  secondTextInput = input;
                }}
                // onSubmitEditing={() => {
                //   this.onSubmit();
                // }}
                // onChangeText={(e) => this.setState({ password: e })}
              />
            </Item>
            <Item>
              <Input
                placeholder="Şifreniz Tekrar"
                secureTextEntry={true}
                ref={(input) => {
                  secondTextInput = input;
                }}
                // onSubmitEditing={() => {
                //   this.onSubmit();
                // }}
                // onChangeText={(e) => this.setState({ password: e })}
              />
            </Item>
            <View style={{ justifyContent: 'center', marginTop: 30 }}>
              <Button
                style={{ display: 'flex', alignSelf: 'center', width : '100%' }}
                danger
                bordered
                block
                //  onPress={() => this.onSubmit()}
              >
                <Text onPress={() => Actions.home()}> Kayıt Ol</Text>
              </Button>
            </View>
          </Form>
          <View style={{ justifyContent: 'center', marginTop: 10, flex : 1 }}>
            <Text style={{ color: 'grey', display: 'flex', alignSelf: 'center' }}>Veya</Text>
            {/* <Text
              onPress={() => Actions.register()}
              style={{ color: 'grey', display: 'flex', alignSelf: 'center', marginTop: 20, fontWeight: 'bold' }}
            >
              Register Now!
            </Text> */}
            <Button
              style={{ display: 'flex', alignSelf: 'center', marginTop : 20, width : '100%' }}
              primary
              full 
              //  onPress={() => this.onSubmit()}
            >
              <Text onPress={() => Actions.register()}> Giriş Yap </Text>
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Register;
