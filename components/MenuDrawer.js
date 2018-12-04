import React from 'react';
import { 
  Platform, 
  Dimensions, 
  StyleSheet, 
  ScrollView,
  View, 
  Text, 
  TouchableOpacity,
  Image,
} from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return(
      <TouchableOpacity onPress={() => navigation.navigate(nav)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1,}}>
          <View style={{height: 270}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 25, borderBottomWidth: 1, borderBottomColor: '#777777',}}>
              <View style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
                <Image source={require('../assets/images/hays-profile.jpg')} 
                  style={{height: 70, width: 70, borderRadius: 50}}
                />
              </View>
              <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center',}}>
                <Text style={{fontSize: 20, paddingBottom: 5, color: 'white', textAlign: 'left'}}>Hays Stanford</Text>
                <Text style={{fontSize: 15, paddingTop: 5, color: 'white', textAlign: 'left', color: 'gray'}}>5.00 {'\u2605'}</Text>
              </View>
            </View>
            <View style={{flex: 1, paddingLeft: 20,}}>
              <Text style={{fontSize: 15, color: '#a8a8a8', paddingTop: 15,}}>Do more with your account</Text>
              <Text style={{fontSize: 15, color: 'white', paddingTop: 10,}}>Get food delivery</Text>
              <Text style={{fontSize: 15, color: 'white', paddingTop: 10,}}>Make money driving</Text>
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10, paddingBottom: 10}}>
            {this.navLink('Home', 'Home')}
            {this.navLink('Links', 'Your Trips')}
            {this.navLink('Home', 'Help')}
            {this.navLink('Home', 'Payment')}
            {this.navLink('Home', 'Ride Pass')}
            {this.navLink('Home', 'Send a Gift')}
            {this.navLink('Home', 'Free Rides ')}
            {this.navLink('Settings', 'Settings')}
          </View>
        </ScrollView>
        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderTopWidth: 1, borderTopColor: 'lightgray',}}>
          <Text style={{flex: 1, marginLeft: 20, fontSize: 16}}>
            Legal
          </Text>
          <Text style={{flex: 1, textAlign: 'right', marginRight: 20, color: '#9b9b9b'}}>
           v4.238.10003
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  link: {
    flex: 1, 
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },
})
