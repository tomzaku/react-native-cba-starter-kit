//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { CFButton, AppAvatar } from 'AppComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import { metric, color, applicationStyle, font, image, animation } from 'AppTheme';

// create a component
class CFCardBackground extends Component {
  render() {
    let { titleUp, titleDown, avatar, titleMiddle, style, onPressProfile} = this.props;
    return (
      <View style={styles.header}>
        <ImageBackground
          style={styles.coverPhoto}
          source={image.background}
          >
          <TouchableOpacity style={styles.titleContainer} onPress={onPressProfile}>
            <Text style={styles.title}>
             {titleUp}
            </Text>
          </TouchableOpacity>
          {this.renderStatistic()}
        </ImageBackground>
        <View style={{ backgroundColor: 'white', justifyContent:'space-between', height: 30, flexDirection: 'row', padding: metric.MARGIN_XXS }}>
          <Text style={styles.subtitle}>
            {titleDown}
          </Text>
          {/* {this.renderStatisticIcons()} */}
        </View>
        <AppAvatar style={styles.avatar} large onPress={onPressProfile}/>
      </View>
    )
  }
  // renderStatisticIcons() {
  //   return (
  //     <View>
  //     </View>
  //   )
  // }
  renderStatistic() {
    const { statistics } = this.props;
    return(
      <View style={styles.rightComponent}>
        <View style={styles.statisticContainer}>
          <View style={{ flexDirection: 'row', backgroundColor: 'rgba(48, 79, 254, 0.679)', padding: metric.MARGIN_XS, borderRadius: 4 }}>
            <TouchableOpacity style={{ }} onPress={statistics[0].onPress}>
              <Text style={styles.numStatistics}>
                {statistics[0].num}
              </Text>
              <Text style={styles.subStatis}>
                {statistics[0].classify}
              </Text>
            </TouchableOpacity>
            <View style={{ margin: metric.MARGIN_XS, borderRightWidth: 1, borderRightColor: 'white'}}></View>
            <TouchableOpacity 
              style={{ alignItems: 'center', justifyContent: 'center', width: 40}}
              onPress={statistics[0].onPressAddition}
            >
              <Icon name={'md-add'} size={24} color={'white'}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}
// define your styles
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  subStatis: {
    color: 'white',
    fontWeight: 'bold',
  },
  numStatistics: {
    ...applicationStyle.txt,
    textAlign: 'center',
  },
  statisticContainer: {
    alignItems: 'center',
    // justifyContent: 'flex-end',
    justifyContent: 'center',
    marginLeft: metric.MARGIN_S,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    justifyContent: 'flex-end',
    
  },
  rightComponent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  avatar: {
    position: 'absolute',
    top: -75,
    zIndex: 9999,
    left: metric.MARGIN_XS,
  },
  title: {
    ...applicationStyle.title,
    paddingLeft: 76,
  },
  subtitle: {
    fontSize: font.size.FONT_SIZE_S,
    color: color.DESCRIPTION,
    paddingLeft: 76,
  },
  coverPhoto: {
    height: 110,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    padding: metric.MARGIN_XXS,
    
  }
});

CFCardBackground.defaultProps = {
  titleUp: 'Steve Job',
  titleDown: '@steve',
  statistics: [
    {
      num: '150+',
      classify: 'Encounters',
      onPress: () => {},
      onPressAddition: () => {},
    }
  ],
  onPressProfile: () => {}

}

//make this component available to the app
export default CFCardBackground;
