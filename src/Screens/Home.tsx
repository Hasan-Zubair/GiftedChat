import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {stackScreens} from '../Components/Navigation/StackNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type propsType = NativeStackScreenProps<stackScreens, 'Home'>;

const Home = (props: propsType) => {
  const {navigation} = props;
  const gotoMessages = () => {
    navigation.navigate('Message');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
      <View>
        <Button title="Go To Messages" color={'brown'} onPress={gotoMessages} />
      </View>
    </View>
  );
};

export default Home;

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
