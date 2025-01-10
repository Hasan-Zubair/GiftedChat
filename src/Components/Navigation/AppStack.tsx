import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Messages from '../../Screens/Messages';
import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';
import ChatScreen from '../../Screens/ChatScreen';



type RootStackParamList = {
    Home: undefined;
    AddPost: undefined;
    HomeProfile: undefined;
    Messages: undefined;
    Chat: {userName: string};
    Profile: undefined;
    EditProfile: undefined;
  };
  
  type TabParamList = {
    Home: undefined;
    Messages: undefined;
    Profile: undefined;
  };

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();



const FeedStack:React.FC<{navigation: any}> = ({navigation}) =>(
    <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={Home}
        options = {{
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerRight: () =>(
                <View style = {styles.headerRight}>
                    <FontAwesome5.Button
                    name = 'plus'
                    size= {22}
                    backgroundColor = 'fff'
                    color = '#2e64e5'
                    onPress= {() => navigation.navigate('AddPost')}
                    />
                </View>
            ),
        }}
        />
         {/* <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: styles.addPostHeaderStyle,
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={styles.headerBack}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    /> */}
    </Stack.Navigator>
)


const MessageStack:React.FC<{navigation:any}>=({navigation}) =>(
    <Stack.Navigator>
        <Stack.Screen 
        name= 'Messages' component={Messages}
        />
        <Stack.Screen name='Chat' component={ChatScreen} options = {({route}) =>({
            title: route.params.userName,
            headerBackTitleVisible: false,
        })} />
    </Stack.Navigator>
)


const ProfileStack: React.FC<{navigation: any}> = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen 
        name='Profile'
        component={Profile}
        options = {{
            headerShown: false,
        }}
        />
       <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: styles.editProfileHeaderStyle,
      }}
    />
    </Stack.Navigator>
)



const AppStack:React.FC = () => {


    const getTabBarVisibility = (route: any): boolean =>{
        const routeName = route.state ? route.state.routes[route.state.index]?.name:'';
        return routeName !=='Chat';
    }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({color, size}) => (
            <Ionicons name= 'chatbox-ellipses-outline'
            color= {color}
            size= {size}
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name= 'person-outline'
            color= {color}
            size= {size}
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({headerTitleStyle: {
    color: '#2e64e5',
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 18,
  },
  headerStyle: {
    shadowColor: '#fff',
    elevation: 0,
  },
  headerRight: {
    marginRight: 10,
  },
  addPostHeaderStyle: {
    backgroundColor: '#2e64e515',
    shadowColor: '#2e64e515',
    elevation: 0,
  },
  profileHeaderStyle: {
    backgroundColor: '#fff',
    shadowColor: '#fff',
    elevation: 0,
  },
  editProfileHeaderStyle: {
    backgroundColor: '#fff',
    shadowColor: '#fff',
    elevation: 0,
  },
  headerBack: {
    marginLeft: 15,
  },});
