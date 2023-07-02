import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {Component} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native';

interface IProps {
  route: any;
  navigation: any;
}

class Screen2 extends Component<IProps, {}> {
  render() {
    const {author, bookname, cardImage} = this.props.route.params;
    console.log(this.props);

    return (
      <SafeAreaView style={{backgroundColor: '#13153d', height: '100%'}}>
        <StatusBar hidden />
        <View
          style={{
            backgroundColor: '#af4dff',
            height: '60%',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}>
          <ImageBackground
            imageStyle={{
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
            style={{
              height: '80%',
              width: '100%',
            }}
            source={{uri: cardImage.toString()}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '50%',
                  paddingTop: 15,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Bottom')}>
                  <MaterialIcons name="arrow-back" size={30} color="#FFFFFF" />
                </TouchableOpacity>
                <Text
                  style={{fontSize: 20, color: '#FFFFFF', fontWeight: '700'}}>
                  Comments
                </Text>
              </View>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={30}
                color="#FFFFFF"
              />
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 15,
              paddingRight: 15,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600'}}>
              {bookname}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  size={30}
                  color="#1c0246"
                />
                <Text style={{paddingLeft: 5}}>192</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <EvilIcons name="comment" size={34} color="#1c0246" />
                <Text style={{paddingLeft: 5}}>12</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{paddingLeft: 15, fontSize: 12, color: '#ffffff'}}>
              {author}
            </Text>
            <View>
              <TouchableWithoutFeedback>
                <View
                  style={{
                    padding: 15,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <ImageBackground
                    style={{height: 20, width: 20}}
                    source={require('./images/avatar2.png')}>
                    <Image
                      style={{height: 20, width: 20, marginLeft: 16}}
                      source={require('./images/avatar2.png')}
                    />
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 30,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('./images/avatar.png')} />
            <View style={{paddingLeft: 20}}>
              <Text style={{color: '#7a81a4', paddingBottom: 7}}>{author}</Text>
              <Text style={{color: '#FFFFFF', fontSize: 16}}>{bookname}</Text>
            </View>
          </View>
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={20}
            color="#40426b"
          />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 20,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              zIndex: 1,

              borderRadius: 15,
              left: 30,
            }}>
            <Image
              source={require('./images/avatar.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Add comment.."
            placeholderTextColor="#a6aab3"
            style={{
              borderWidth: 1,
              width: `90%`,
              marginHorizontal: 15,
              paddingLeft: 55,
              backgroundColor: 'white',
              borderRadius: 30,
            }}
          />
          <TouchableOpacity
            style={{position: 'absolute', bottom: 15, right: 40}}>
            <Entypo name="emoji-happy" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Screen2;
