import 'react-native-gesture-handler';
import React from 'react';
import {Home} from './app/views/Home.js'; 
import { Contact } from './app/views/Contact.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Video } from './app/views/Video.js';
import { VideoDetail } from './app/views/VideoDetail.js';
import { Register } from './app/views/Register.js';
import { Login } from './app/views/Login.js';

import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';

import { Blog } from './app/views/Blog.js';
import { BlogDetail } from './app/views/BlogDetail.js';

import { About } from './app/views/About.js';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: null }} >
          <Stack.Screen name="HomeRT" component={Home} />
          <Stack.Screen name="ContactRT" component={Contact} />
          <Stack.Screen name="VideoRT" component={Video} />
          <Stack.Screen name="VideoDetailRT" component={VideoDetail} />
          <Stack.Screen name="RegisterRT" component={Register} />
          <Stack.Screen name="LoginRT" component={Login} />
          <Stack.Screen name="QuizRT" component={Quiz} />
          <Stack.Screen name="FinishRT" component={Finish} />
          <Stack.Screen name="BlogRT" component={Blog} />
          <Stack.Screen name="BlogDetailRT" component={BlogDetail} />
          <Stack.Screen name="AboutRT" component={About} />
        </Stack.Navigator>     
      </NavigationContainer> 
    );
  }   
}

