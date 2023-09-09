import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../Constants/colors';
import Octicon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
      }}>
      <View>
        <Text style={styles.headerNameText}>m.faizan.arif.nafees</Text>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginHorizontal: 5}}>
            <Octicon name="diff-added" size={25} color={colors.white} />
          </View>
          <View style={{marginHorizontal: 5}}>
            <Ionicon name="reorder-three" size={25} color={colors.white} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerNameText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '600',
  },
  tinyLogo: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
});
