import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomeScreen, MySpaceScreen, NotificationsScreen} from '../screens'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator<any>()

const ACTIVE_COLOR = '#42ab56'
const INACTIVE_COLOR = '#637381'

export const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        unmountOnBlur: true,
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          height: 60,
          paddingVertical: 8,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
          marginBottom: 8,
        },
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icon
                name="home"
                color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                size={28}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="MySpace"
        component={MySpaceScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Space',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icon
                name="account"
                color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                size={28}
              />
            )
          },
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Notifications',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icon
                name="bell"
                color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                size={24}
              />
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}
