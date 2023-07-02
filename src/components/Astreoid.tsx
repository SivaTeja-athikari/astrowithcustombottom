import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {moderateScale, verticalScale} from '../../Metrics';

const {width, height} = Dimensions.get('window');
interface IState {
  astreoidId: string;
  name: string;
  url: string;
  isPotential: string;
  error: boolean;
}

interface IProps {
  navigation: any;
}

class Astreoid extends Component<IProps, IState> {
  state = {
    astreoidId: '',
    name: '',
    url: '',
    isPotential: '',
    error: false,
  };

  getAstreoidData = async () => {
    this.setState({error: true});
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${this.state.astreoidId}?api_key=CwNb1hUfIZ3M3yj8ctTkGbcjGFjopB0HTrWG5Yng`;
    await fetch(url)
      .then(response => response.json())
      .then(response =>
        this.setState(
          {
            name: response?.name,
            url: response?.nasa_jpl_url,
            isPotential: response?.is_potentially_hazardous_asteroid,
            error: false,
          },
          async () =>
            await this.props.navigation.navigate('AstreoidDetails', {
              astreoidId: this.state.astreoidId,
              name: this.state.name,
              url: this.state.url,
              isPotential: this.state.isPotential,
            }),
        ),
      );
  };

  getRandomAstreoidData = async () => {
    this.setState({error: true});
    const number = Math.ceil(Math.random() * 10);
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=CwNb1hUfIZ3M3yj8ctTkGbcjGFjopB0HTrWG5Yng`;
    await fetch(url)
      .then(response => response.json())
      .then(response =>
        this.setState({
          astreoidId: response.near_earth_objects[number].id,
          error: false,
        }),
      )
      .catch(error => console.log(error));
  };

  render() {
    const {astreoidId, url, isPotential, name} = this.state;
    console.log(this.state.name, this.state.url, this.state.isPotential);
    return (
      <View
        style={{
          height: height,
          backgroundColor: '#A59692',
        }}>
        <View style={{height: moderateScale(60), backgroundColor: '#4863A0'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 26,
              paddingTop: moderateScale(10),
              fontWeight: '800',
              color: '#ffffff',
            }}>
            Astreoid App
          </Text>
        </View>
        <ImageBackground
          style={{
            height: height,
            width: width,
            maxWidth: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('./images/astreoid.png')}>
          <Image
            style={{width: 60, height: 60}}
            source={require('./images/nasa.png')}
          />

          {this.state.error ? <ActivityIndicator size="large" /> : ''}
          <TextInput
            value={this.state.astreoidId}
            onChangeText={(value: string) => this.setState({astreoidId: value})}
            style={{
              backgroundColor: '#BCC6CC',

              borderRadius: moderateScale(9),

              padding: moderateScale(10),
              marginTop: moderateScale(10),

              marginHorizontal: moderateScale(20),
            }}
            placeholder="Enter Astreoid Id"
            placeholderTextColor="#ffffff"
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: moderateScale(50),
            }}>
            <TouchableOpacity
              onPress={() => {
                this.getAstreoidData();
                this.setState({astreoidId: ''});
              }}
              disabled={this.state.astreoidId === '' ? true : false}
              style={{
                backgroundColor: '#2B547E',
                height: moderateScale(40),
                width: moderateScale(120),
                borderRadius: moderateScale(10),
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: moderateScale(15),
              }}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.getRandomAstreoidData()}
              style={{
                backgroundColor: '#2B547E',
                height: moderateScale(40),
                width: moderateScale(190),
                borderRadius: moderateScale(10),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>
                Random Astreoid
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Astreoid;
