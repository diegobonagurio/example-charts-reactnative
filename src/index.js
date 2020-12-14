import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Report from './pages/Report';

import HeaderRight from './components/HeaderRight';

const { Navigator, Screen } = createStackNavigator();

function Entry() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000',
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontWeight: '500',
            },
            headerLeftContainerStyle: {
              paddingHorizontal: 8,
            },
            headerTintColor: '#7159c1',
            headerBackTitleVisible: false,
          }}
        >
          <Screen
            name="home"
            component={Home}
            options={{
              title: 'Visualize suas despesas',
              headerRight: HeaderRight,
              headerRightContainerStyle: {
                paddingRight: 16,
              },
            }}
          />

          <Screen
            name="report"
            component={Report}
            options={{
              title: 'Relatório completo',
              headerRight: HeaderRight,
              headerRightContainerStyle: {
                paddingRight: 16,
              },
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default Entry;
