import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthScreen from './Pages/AuthScreen';
import MainApp from './MainApp';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Auth"
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            gestureEnabled: false
          }}
        >
          <RootStack.Screen 
            name="Auth" 
            component={AuthScreen} 
          />
          <RootStack.Screen 
            name="MainApp" 
            component={MainApp} 
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;



