import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Home from './Home';
import Search from './Search';
import Like from './Like';
import Profile from './Profile';

const Stack = createNativeStackNavigator();

interface IProps {
  navigation: any;
}

class App extends Component<IProps, {}> {
  _renderIcon = (routeName: any, selectedTab: any) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'home-sharp';
        break;
      case 'Search':
        icon = 'search';
        break;

      case 'Like':
        icon = 'heart-outline';
        break;
      case 'Profile':
        icon = 'person-circle-sharp';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {this._renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  render() {
    // console.log(this.props);
    return (
      <CurvedBottomBar.Navigator
        screenOptions={{headerShown: false}}
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Click Action')}>
              <Text style={{fontSize: 30}}>+</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={this.renderTabBar}>
        <CurvedBottomBar.Screen
          name="Home"
          position="LEFT"
          component={() => <Home props={this.props} />}
          options={{Headers: false}}
        />
        <CurvedBottomBar.Screen
          name="Search"
          component={() => <Search />}
          position="LEFT"
        />
        <CurvedBottomBar.Screen
          name="Like"
          component={() => <Like />}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="Profile"
          component={() => <Profile />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    );
  }
}

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0070',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
