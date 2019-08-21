import React from 'react';
// import react components that style the UI
import { StyleSheet, Text, View, Button, TextInput ,Navigator} from 'react-native';

// react class component with constructor function containing the state of name and color
export default class chat extends React.Component {
  constructor(props) {
    super(props);
  }
 //navigation bar configuration, add user name nav ba
    static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.name,
  };
};
  }
