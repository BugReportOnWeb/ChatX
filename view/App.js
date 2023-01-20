
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity ,Button,Alert, Platform, StatusBar} from 'react-native';
import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
//import FontAwesomeIcon from 'react-native-fontawesome';
import { useDimensions , useDeviceOrientation} from '@react-native-community/hooks';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
 /*function App() {
  return (
    <View style={s}>
    <View style={styles.container}>
    
    <Text style={styles.textsize}> {'   '}Hello  {'\n'}
      I'm Scatty
      {'\n'}
      {'\n'}
      </Text>
      <Image source={{uri:"https://images.assetsdelivery.com/compings_v2/ussr/ussr1908/ussr190800001.jpg",height:100,width:100}} style={styles.circ} ></Image>
      
      <Text style={styles.textsize}>  {'\n'}
      {'\n'}
      How can I help{'\n'}
      {'          '}you?
      {'\n'}
      </Text >
      <TouchableOpacity style={styles.cyl}><Text style={{color:"rgb(98,42,232)"}}>I Want To Know </Text></TouchableOpacity>
     
    </View>
    <View style={{ bottom:"6.5%",backgroundColor: "#EDE7F6"}}>
      <TouchableOpacity style={{borderStyle:  'dashed',height:50, width:50,left:"38%"}}>
    <Image source={require("./assets/mic.png")} style={styles.mic}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{S=chatbot()}}>
    <Image source={require("./assets/key.png")} style={styles.key}></Image>
    </TouchableOpacity>
  
    </View>
    </View>
  );
}
export default S;
const styles = StyleSheet.create({
  container:{
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"rgb(98,42,232)"
  },
  circ:{
    borderRadius: 200,
  },
  textsize:{
    fontSize:30,
    color:"white"
  },
  cyl:{
    borderRadius: 20,
    backgroundColor: 'white',
    width:'75%',
    alignItems:'center',
    justifyContent:'center',
    height:50,
    color:'rgb(98,42,232)'
  },
  mic:{
    height:50, width:50, borderRadius:200, top:-25, left:"44%"
  },
  key:{
    height:20, width:26, top:-29,left:"74%",
  }
});



const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const onSend = async (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    try {
      const response = await fetch(`http://625e-2a09-bac1-36e0-20-00-1c5-7c.ngrok.io/api?input=${newMessages[0].text}`);
      const data = await response.json();
      setMessages(previousMessages => GiftedChat.append(previousMessages, {
        _id: Math.round(Math.random() * 1000000),
        text: data.response,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
          avatar: 'https://i.imgur.com/TkIrScD.png',
        },
      }))
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};
*/
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="App"
          component={App}
        />
        <Stack.Screen name="bot" component={ChatBot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function App({navigation}) {
  return (
    <><View style={styles.container}>

      <Text style={styles.textsize}> {'   '}Hello  {'\n'}
        I'm Scatty
        {'\n'}
        {'\n'}
      </Text>
      <Image source={{ uri: "https://images.assetsdelivery.com/compings_v2/ussr/ussr1908/ussr190800001.jpg", height: 100, width: 100 }} style={styles.circ}></Image>

      <Text style={styles.textsize}>  {'\n'}
        {'\n'}
        How can I help{'\n'}
        {'          '}you?
        {'\n'}
      </Text>
      <TouchableOpacity style={styles.cyl}><Text style={{ color: "rgb(98,42,232)" }}>I Want To Know </Text></TouchableOpacity>

    </View><View style={{ bottom: "6.5%", backgroundColor: "#EDE7F6" }}>
        <TouchableOpacity style={{ borderStyle: 'dashed', height: 50, width: 50, left: "38%" }}>
          <Image source={require("./assets/mic.png")} style={styles.mic}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {   navigation.navigate('bot') } }>
          <Image source={require("./assets/key.png")} style={styles.key}></Image>
        </TouchableOpacity>

      </View></>
  );
}
const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const onSend = async (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
    try {
      const response = await fetch(`http://8caa-2a09-bac1-36e0-20-00-ca-45.ngrok.io/api?input=${newMessages[0].text}`);
      const data = await response.json();
      setMessages(previousMessages => GiftedChat.append(previousMessages, {
        _id: Math.round(Math.random() * 1000000),
        text: data.response,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
          avatar: 'https://i.imgur.com/TkIrScD.png',
        },
      }))
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
        containerStyle={{ backgroundColor: 'white'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"rgb(98,42,232)"
  },
  circ:{
    borderRadius: 200,
  },
  textsize:{
    fontSize:30,
    color:"white"
  },
  cyl:{
    borderRadius: 20,
    backgroundColor: 'white',
    width:'75%',
    alignItems:'center',
    justifyContent:'center',
    height:50,
    color:'rgb(98,42,232)'
  },
  mic:{
    height:50, width:50, borderRadius:200, top:-25, left:"44%"
  },
  key:{
    height:20, width:26, top:-29,left:"74%",
  }
});

export default MyStack;