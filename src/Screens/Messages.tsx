import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../Components/Navigation/StackNavigation';

type propsType = NativeStackScreenProps<stackScreens, 'Message'>;

const Messages = (props: propsType) => {
  const {navigation} = props;
  const gotoProfile = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Messages</Text>
      <View>
        <Button title="Go To Profile" color={'brown'} onPress={gotoProfile} />
      </View>
    </View>
  );
};

export default Messages;

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
