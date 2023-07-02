import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

import {moderateScale, verticalScale} from '../../Metrics';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  route: any;
  navigation: any;
}

class AstreoidDetails extends Component<IProps, {}> {
  render() {
    const {name, url, isPotential} = this.props.route.params;
    console.log(name, url, isPotential, 'details');
    return (
      <View>
        <View
          style={{
            height: moderateScale(60),
            backgroundColor: '#4863A0',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity
            style={{paddingLeft: 12}}
            onPress={() => this.props.navigation.navigate('Astreoid')}>
            <MaterialIcons name="arrow-back" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 26,
              paddingTop: moderateScale(10),
              fontWeight: '800',
              color: '#ffffff',
              paddingLeft: 20,
              paddingBottom: 12,
            }}>
            Astreoid Details
          </Text>
        </View>
        <View
          style={{
            height: moderateScale(300),
            width: '90%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#837E7C',
            alignSelf: 'center',
            top: moderateScale(100),
            borderRadius: moderateScale(9),
            flexDirection: 'column',
            padding: moderateScale(12),
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
              paddingBottom: moderateScale(5),
            }}>
            Name :
            <Text style={{color: '#3A3B3C', fontSize: 18, fontWeight: '500'}}>
              {' '}
              {name}
            </Text>
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
              paddingBottom: moderateScale(5),
            }}>
            URL :{' '}
            <Text style={{color: '#3A3B3C', fontSize: 18, fontWeight: '500'}}>
              {url}
            </Text>
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
              paddingBottom: moderateScale(5),
            }}>
            Is hazardious :{' '}
            <Text style={{color: '#3A3B3C', fontSize: 18, fontWeight: '500'}}>
              {isPotential !== '' ? JSON.stringify(isPotential) : ''}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default AstreoidDetails;
