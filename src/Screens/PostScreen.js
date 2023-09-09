import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../Constants/colors';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicon from 'react-native-vector-icons/Octicons';

import AntDesign from 'react-native-vector-icons/AntDesign';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PostScreen = () => {
  const [focused, setFocused] = useState(1);
  const Posts = [
    {
      id: 1,
      image: require('../Assets/Images/2.jpg'),
    },
    {
      id: 2,
      image: require('../Assets/Images/3.jpg'),
    },
    {
      id: 3,
      image: require('../Assets/Images/4.jpg'),
    },
    {
      id: 4,
      image: require('../Assets/Images/5.jpg'),
    },
    {
      id: 5,
      image: require('../Assets/Images/6.jpg'),
    },
    {
      id: 6,
      image: require('../Assets/Images/7.jpg'),
    },
    {
      id: 7,
      image: require('../Assets/Images/8.jpg'),
    },
    {
      id: 8,
      image: require('../Assets/Images/9.jpg'),
    },
  ];

  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <TouchableOpacity
          onPress={() => setFocused(1)}
          style={[
            styles.focus,
            {
              borderBottomWidth: focused === 1 ? 1 : 0,
              borderBottomColor: 'white',
            },
          ]}>
          <MaterialCommunityIcons
            name="grid"
            size={25}
            color={focused === 1 ? 'white' : 'grey'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFocused(2)}
          style={[
            styles.focus,
            {
              borderBottomWidth: focused === 2 ? 1 : 0,
              borderBottomColor: 'white',
            },
          ]}>
          <Octicon
            name="video"
            size={25}
            color={focused === 1 ? 'white' : 'grey'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFocused(3)}
          style={[
            styles.focus,
            {
              borderBottomWidth: focused === 3 ? 1 : 0,
              borderBottomColor: 'white',
            },
          ]}>
          <AntDesign
            name="save"
            size={25}
            color={focused === 1 ? 'white' : 'grey'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFocused(4)}
          style={[
            styles.focus,
            {
              borderBottomWidth: focused === 4 ? 1 : 0,
              borderBottomColor: 'white',
            },
          ]}>
          <AntDesign
            name="profile"
            size={25}
            color={focused === 1 ? 'white' : 'grey'}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 35,
          }}>
          {focused === 1 &&
            Posts?.map(item => {
              return (
                <View>
                  <Image
                    source={item?.image}
                    style={{width: 130, height: 130}}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  focus: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  tinyLogo: {
    paddingBottom: 15,
  },
});
