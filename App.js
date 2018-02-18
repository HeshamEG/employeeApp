import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyApp from './src/MyApp'

import firebase from 'firebase';
export default class App extends React.Component


{

    componentWillMount(){
        firebase.initializeApp({

            apiKey: 'AIzaSyBfk3wqWHdtRxhgpsDJKV0J0jZMOA-kkz0',
            authDomain: "glogin-4555f.firebaseapp.com",
            databaseURL: "https://glogin-4555f.firebaseio.com",
            projectId: "glogin-4555f",
            storageBucket: "glogin-4555f.appspot.com",
            messagingSenderId: "66437944111"
        })
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({ logedIn:true });

            }else{

                this.setState({ logedIn: false });

            }
        })

    }
  render() {
    return (
      <View>
        <MyApp/>

      </View>
    );
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
