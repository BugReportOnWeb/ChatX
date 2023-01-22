
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity ,Button,Alert, Platform, StatusBar} from 'react-native';
import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
//import FontAwesomeIcon from 'react-native-fontawesome';
import { useDimensions , useDeviceOrientation} from '@react-native-community/hooks';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Bubble } from 'react-native-gifted-chat'
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
        <Stack.Screen name="review" component={ReviewPage} />
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

    </View><View style={{ bottom: "10%", backgroundColor: "#EDE7F6" }}>
        <TouchableOpacity style={{ borderStyle: 'dashed', height: 50, width: 50, left: "38%" }}>
          <Image source={require("./assets/mic.png")} style={styles.mic}></Image>
        </TouchableOpacity>
        <View style={{display:'flex', flexDirection:"row"}}>
        <TouchableOpacity style={{flex:1}} onPress={() => {   navigation.navigate('review') } }>
          <Image source={require("./assets/rating.png")} style={styles.rating}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1}} onPress={() => {   navigation.navigate('bot') } }>
          <Image source={require("./assets/key.png")} style={styles.key}></Image>
        </TouchableOpacity>
        </View>
      </View></>
  );
}
const CustomBubble = (props) => {
  return (
    <View >
      <Bubble  {...props} wrapperStyle={{right:{backgroundColor: "rgb(98,42,232)"}}} />
    </View>
  );
}

const ReviewPage = (navigation) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  }

  return (
    <View style={styles2.container}>
      <Text style={styles2.title}>Rate Our Chatbox</Text>
      <View style={styles2.starContainer}>
        <TouchableOpacity onPress={() => handleRating(1)}>
          <Image
            style={styles2.star}
            source={rating >= 1 ? {uri: "https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg"} : {uri:"https://static.thenounproject.com/png/1371880-200.png"}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRating(2)}>
          <Image
            style={styles2.star}
            source={rating >= 2 ? {uri: "https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg"} : {uri:"https://static.thenounproject.com/png/1371880-200.png"}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRating(3)}>
          <Image
            style={styles2.star}
            source={rating >= 3 ? {uri: "https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg"} : {uri:"https://static.thenounproject.com/png/1371880-200.png"}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRating(4)}>
          <Image
            style={styles2.star}
            source={rating >= 4 ? {uri: "https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg"} : {uri:"https://static.thenounproject.com/png/1371880-200.png"}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRating(5)}>
          <Image
            style={styles2.star}
            source={rating >= 5 ? {uri: "https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg"} : {uri:"https://static.thenounproject.com/png/1371880-200.png"}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"rgb(255,255,255)"
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    width: 40,
    height: 40,
    margin: 10,
  },
});

function ChatBot() {
  const [messages, setMessages] = useState([]);

  const onSend = async (newMessages) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages)
    );
    try {
      const response = await fetch(`http://6d44-2a09-bac1-36a0-20-00-242-2d.ngrok.io/api?input=${newMessages[0].text}`);
      const data = await response.json();

      setMessages(previousMessages => GiftedChat.append(previousMessages, {
        _id: Math.round(Math.random() * 1000000),
        text: data.response,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
          avatar: 'https://images.assetsdelivery.com/compings_v2/ussr/ussr1908/ussr190800001.jpg',
        },
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat renderBubble={CustomBubble}
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
        containerStyle={{ backgroundColor: 'white' }} />
    </View>
  );
}
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
    height:20, width:26,left:"46%",top:-20
  },
  rating:{
    height:22, width:25, margin:"auto",left:"40%",top:-20
  }

});

export default MyStack;