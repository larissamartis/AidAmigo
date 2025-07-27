import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavBar} from './Components';  
import Home from './Pages/HOME';
import Saved from './Pages/Saved';
import CPR from './Pages/CPR';
import BURNS from './Pages/BURNS';
import CHOKING from './Pages/CHOKING';
import BLEEDING from './Pages/BLEEDING';
import Profile from './Pages/Profile';
import Track from './Pages/Track';
import AddWound from './Pages/AddWounds';
import WoundOverview from './Pages/WoundOverview';
import WoundResult from './Pages/WoundResult';

const MainStack = createNativeStackNavigator();

const MainApp = () => {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <View style={styles.container}>
      <MainStack.Navigator
        screenOptions={{ 
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' }
        }}
      >
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Saved" component={Saved} />
        <MainStack.Screen name="Profile" component={Profile} />
        <MainStack.Screen name="Track" component={Track} />
        <MainStack.Screen name="CPR" component={CPR} />
        <MainStack.Screen name="Burns" component={BURNS} />
        <MainStack.Screen name="Choking" component={CHOKING} />
        <MainStack.Screen name="Bleeding" component={BLEEDING} />
        <MainStack.Screen name="AddWound" component={AddWound} />
        <MainStack.Screen name="WoundOverview" component={WoundOverview} />
        <MainStack.Screen name="WoundResult" component={WoundResult}/>
      </MainStack.Navigator>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
});

export default MainApp;
