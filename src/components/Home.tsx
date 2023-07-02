import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import statusicon from './images/statusicon.png';
import hammer from './images/hammer.png';
import goodboy from './images/goodboy.png';
import fam from './images/fam.png';
import fire from './images/fire.png';
import lib from './images/lib.png';
import msc from './images/msc.png';
import goodguy from './images/goodguy.png';
import futurana from './images/futurana.png';
import happy from './images/happy.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const StatusIcons = [
  {
    id: '1',
    image: statusicon,
    name: 'Nirmal',
    statusicon: fire,
    status: 'Trending',
    cardImage: 'https://i.dummyjson.com/data/products/1/1.jpg',
    bookname: 'The Good Guy',
    author: 'Mark mcallister',
    active: true,
  },
  {
    id: '2',
    image: hammer,
    name: 'Nagesh',
    statusicon: lib,
    status: '5-Minutes Read',
    cardImage: 'https://i.dummyjson.com/data/products/1/2.jpg',
    bookname: 'Futurana',
    author: 'Michael Douglas jr.',
    active: false,
  },
  {
    id: '3',
    image: goodboy,
    name: 'Sailendra',
    statusicon: msc,
    status: 'Quick Music',
    cardImage: 'https://i.dummyjson.com/data/products/1/1.jpg',
    bookname: 'Explore your creativity',
    author: 'Royryan Mercado',
    active: false,
  },
  {
    id: '4',
    image: fam,
    name: 'Manikanta',
    statusicon: fire,
    status: 'Trending',
    cardImage: 'https://i.dummyjson.com/data/products/1/2.jpg',
    bookname: 'Explore your creativity',
    author: 'Royryan Mercado',
    active: false,
  },
  {
    id: '5',
    image: statusicon,
    name: 'Sai Kiran',
    statusicon: lib,
    status: '5-MinuteRead',
    cardImage: 'https://i.dummyjson.com/data/products/1/3.jpg',
    bookname: 'The Good Guy',
    author: 'Mark mcallister',
    active: false,
  },
  {
    id: '6',
    image: statusicon,
    name: 'Salman',
    statusicon: msc,
    status: 'Quick Music',
    cardImage: 'https://i.dummyjson.com/data/products/1/4.jpg',
    bookname: 'Futurana',
    author: 'Michael Douglas jr.',
    active: false,
  },
  {
    id: '7',
    image: statusicon,
    name: 'Sandeep',
    statusicon: fire,
    status: 'Trending',
    cardImage: goodguy,
    bookname: 'Explore your creativity',
    author: 'Mark mcallister',
    active: false,
  },
];

// const Item2 = ({item}: any) => (
//   <TouchableOpacity onPress={}>
//     <View>
//       <View>
//         <Image
//           resizeMode="contain"
//           style={{margin: 10, width: '95%', borderRadius: 12}}
//           source={item.cardImage}
//         />

//         <View>
//           <View
//             style={{
//               flexDirection: 'row',
//               paddingLeft: 15,
//               paddingRight: 15,
//               alignItems: 'center',
//               justifyContent: 'space-between',
//             }}>
//             <Text style={{color: '#121212', fontSize: 18, fontWeight: '600'}}>
//               {item.bookname}
//             </Text>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   marginRight: 15,
//                 }}>
//                 <MaterialCommunityIcons
//                   name="cards-heart-outline"
//                   size={30}
//                   color="#1c0246"
//                 />
//                 <Text style={{paddingLeft: 5, color: '#121212'}}>192</Text>
//               </View>
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <EvilIcons name="comment" size={34} color="#1c0246" />
//                 <Text style={{paddingLeft: 5, color: '#121212'}}>12</Text>
//               </View>
//             </View>
//           </View>
//           <View>
//             <Text style={{paddingLeft: 15, fontSize: 12, color: '#121212'}}>
//               {item.author}
//             </Text>
//             <View>
//               <TouchableWithoutFeedback>
//                 <View
//                   style={{
//                     padding: 15,
//                     alignContent: 'center',
//                     justifyContent: 'center',
//                   }}>
//                   <ImageBackground
//                     style={{height: 20, width: 20}}
//                     source={require('./images/avatar2.png')}>
//                     <Image
//                       style={{height: 20, width: 20, marginLeft: 16}}
//                       source={require('./images/avatar2.png')}
//                     />
//                   </ImageBackground>
//                 </View>
//               </TouchableWithoutFeedback>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

interface IProps {
  navigation: any;
  props: any;
}

class Home extends Component<IProps, {}> {
  state = {
    trending: 'Trending',
    modalVisible: false,
  };
  handleStatusDisplay = ({item}: any) => (
    <View>
      <TouchableWithoutFeedback>
        <View
          style={{
            padding: 10,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Image source={item.image} />
          <Text style={{textAlign: 'center', color: '#232735'}}>
            {item.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  handleRenderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() =>
        this.props.props.navigation.navigate('Screen2', {...item})
      }>
      <View>
        <View>
          <Image
            resizeMode="contain"
            style={{margin: 10, width: '95%', height: 200, borderRadius: 12}}
            source={{uri: item.cardImage.toString() || 'default image path'}}
          />

          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 15,
                paddingRight: 15,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#121212', fontSize: 18, fontWeight: '600'}}>
                {item.bookname}
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
                  <Text style={{paddingLeft: 5, color: '#121212'}}>192</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <EvilIcons name="comment" size={34} color="#1c0246" />
                  <Text style={{paddingLeft: 5, color: '#121212'}}>12</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{paddingLeft: 15, fontSize: 12, color: '#121212'}}>
                {item.author}
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
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    // console.log(this.props);
    return (
      <View style={styles.bgContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="reorder-three-outline" size={30} color="#0e0e0e" />
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#0e0e0e',
                paddingLeft: 18,
              }}>
              My Feed
            </Text>
          </View>
          <Ionicons name="notifications-outline" size={30} color="#0e0e0e" />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <View
                style={{
                  backgroundColor: '#ff0070',
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SimpleLineIcons name="camera" size={30} />
              </View>
              <Text style={{color: '#232735', textAlign: 'center'}}>+ Add</Text>
            </View>
            <FlatList
              horizontal={true}
              data={StatusIcons}
              renderItem={item => this.handleStatusDisplay(item)}
              keyExtractor={item => item.id}
            />
          </View>
          {/* <FlatList
            horizontal={true}
            data={StatusIcons}
            renderItem={item1 => this.handleTrending(item1)}
            keyExtractor={item => item.id}
          /> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: '800'}}>Trending</Text>
          </View>
          <FlatList
            data={StatusIcons}
            renderItem={item2 => this.handleRenderItem(item2)}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default Home;
