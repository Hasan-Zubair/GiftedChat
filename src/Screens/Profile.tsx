import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {stackScreens} from '../Components/Navigation/StackNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type propsType = NativeStackScreenProps<stackScreens, 'Profile'>;

const Profile = (props: propsType) => {
  const {navigation} = props;
  const gotoHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View>
        <Button title="Go To Home" color={'brown'} onPress={gotoHome} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 600,
  },
});
