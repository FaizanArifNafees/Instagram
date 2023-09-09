import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../Constants/colors';
import Header from '../Components/Header';
import PostScreen from './PostScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  const StatusArray = [
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
  ];

  return (
    <View style={{flex: 1, backgroundColor: colors.theme}}>
      <Header />
      <View style={{paddingHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={require('../Assets/Images/1.jpg')}
            />
          </View>
          <View style={styles.postNumberContainer}>
            <View style={styles.postNumberCard}>
              <Text style={styles.numberText}>37</Text>
              <Text style={styles.bottomText}>Posts</Text>
            </View>
            <View style={styles.postNumberCard}>
              <Text style={styles.numberText}>37</Text>
              <Text style={styles.bottomText}>Followers</Text>
            </View>
            <View style={styles.postNumberCard}>
              <Text style={styles.numberText}>37</Text>
              <Text style={styles.bottomText}>Following</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.ProfileName}>Faizan Arif</Text>
          <Text style={styles.Description}>Quaidians</Text>
          <Text style={styles.Description}>Some Description </Text>
          <Text style={styles.Description}>Bio</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.edit}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.edit}>Share Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {width: '15%'}]}>
            <AntDesign name="adduser" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          {StatusArray.map(item => {
            return (
              <View style={styles.StatusContainer}>
                <View
                  style={[
                    styles.profileImageContainer,
                    {width: 65, height: 65},
                  ]}>
                  <Image
                    style={[styles.profileImage, {width: 60, height: 60}]}
                    source={item?.image}
                  />
                </View>
                <Text style={styles.statusText}>Something</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={{flex: 1}}>
        <PostScreen />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImageContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  numberText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },
  bottomText: {
    fontSize: 16,
    color: colors.lightGrey,
  },
  postNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    paddingHorizontal: 5,
  },
  postNumberCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileName: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.white,
  },
  Description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8E8E8E',
  },
  edit: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
  },
  button: {
    backgroundColor: colors.mediumGrey,
    padding: 10,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  tinyLogo: {
    width: 15,
    height: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  statusText: {
    color: colors.mediumGrey,
  },
  StatusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
