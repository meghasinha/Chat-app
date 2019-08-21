import React from 'react';
// import react components that style the UI
import { StyleSheet, Text, View, Button, ImageBackground, TextInput,Navigator } from 'react-native';

// react class component with constructor function containing the state of name and color
export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        color:''
    }
  }

  render()
  {
    <View style={styles.container}>
      <ImageBackground source={('./assets/image.png')} style={styles.backgroundImage}>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>Chat App</Text>
        <TextInput
          style={styles.input}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder='your name'
        />
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'flex-start'}}>
              <Text style={styles.choice}>Choose Background Color:</Text>
        </View>
        <View  style ={style.colors}>
          <Button
            style ={styles.blue}
            onpress ={()=>this.setState({color:'#6495ED'})}
          />
          <Button
            style ={styles.black}
            onpress ={()=>this.setState({color:'#000000'})}
          />
          <Button
            style ={styles.grey}
            onpress ={()=>this.setState({color:'#696969'})}
          />
          <Button
            style ={styles.green}
            onpress ={()=>this.setState({color:'#66CDAA'})}
          />
        </View>

    <Button
          style={styles.button}
          onPress={() =>{ this.props.navigation.navigate('Chat',{ name: this.state.name })}}
          title ="Start Chatting"
          />
      </View>
      </ImageBackground>
    </View>
  }
}

  const styles = StyleSheet.create({
  // main container that holds all elements
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 20,
    width: '88%',
    height: 60,
    padding: 20
  },
  button: {
    backgroundColor: '#757083',
    width: '88%',
    height: 60,
    padding: 20
  },
  backgroundImage: {
    flex:1,
    width:'100%',
    height:'100%'
  },
  colors: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 20,
    width: '88%',
    height: 60,
    padding: 20
  },
  blue: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth:2,
    borderColor: '#474056',
    opacity: 1
  },
  gray: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth:2,
    borderColor: '#474056',
    opacity: 1
  },
  green: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth:2,
    borderColor: '#474056',
    opacity: 1
  },
  black: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth:2,
    borderColor: '#474056',
    opacity: 1
  }
});
