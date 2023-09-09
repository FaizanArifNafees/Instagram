import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Profile from '../Screens/Profile';
import colors from '../Constants/colors';
import {Image} from 'react-native';
import Home from '../Screens/Home';
import Add from '../Screens/Add';
import Search from '../Screens/Search';
import Reels from '../Screens/Reels';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicon from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={({navigation, route}) => ({
          headerShown: false,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.theme,
          },
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarInactiveTintColor: '#666',
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: '5%',
          },
          tabBarStyle: {
            height: '6.9%',
            paddingVertical: '1%',
            backgroundColor: colors.theme,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              return <AntDesign name="home" size={25} color={color} />;
            } else if (route.name === 'Search') {
              return <AntDesign name="search1" size={25} color={color} />;
            } else if (route.name === 'Add') {
              return <Octicon name="diff-added" size={25} color={color} />;
            } else if (route.name === 'Reels') {
              return <Octicon name="video" size={25} color={color} />;
            } else if (route.name === 'Profile') {
              return <AntDesign name="user" size={25} color={color} />;
            }
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'grey',
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Add" component={AddStack} />
        <Tab.Screen name="Reels" component={ReelsStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Home1" component={Home} />
    </Stack.Navigator>
  );
};
const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Search1" component={Search} />
    </Stack.Navigator>
  );
};
const AddStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Add1" component={Add} />
    </Stack.Navigator>
  );
};
const ReelsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Reels1" component={Reels} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Profile1" component={Profile} />
    </Stack.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 18,
    height: 18,
  },
});
