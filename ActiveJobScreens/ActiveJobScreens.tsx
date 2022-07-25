import React from 'react';
import {Box} from 'atoms/Box';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ClientScreen} from './organisms/ClientScreen';
import {OrganizationScreen} from './organisms/OrganizationScreen';

const Tab = createMaterialTopTabNavigator();

export const ActiveJobScreens = () => {
  return (
    <Box>
      <Tab.Navigator
        initialRouteName="Clients"
        screenOptions={{
          tabBarActiveTintColor: 'black',

          tabBarLabelStyle: {fontSize: 18},
          tabBarStyle: {backgroundColor: 'white'},
        }}>
        <Tab.Screen
          name="Clients"
          component={ClientScreen}
          options={{tabBarLabel: 'Clients'}}
        />
        {console.log('is it working?')}
        <Tab.Screen
          name="Organizations"
          component={OrganizationScreen}
          options={{tabBarLabel: 'Organizations'}}
        />
      </Tab.Navigator>
    </Box>
  );
};
