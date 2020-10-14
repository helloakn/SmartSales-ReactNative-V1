import React from 'react';
import {
    Image,
    StyleSheet,
    FlatList,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Platform,
    StatusBar,
    I18nManager,
} from 'react-native';
import Svg, {
    Rect,G,Line,Path,Defs ,Filter,FeFlood,FeGaussianBlur,FeColorMatrix,FeOffset,FeBlend
  } from 'react-native-svg';
import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient'

export default class ButtonLinear extends React.Component {
    constructor(props){
        super(props);
       
    }
    
    _onPaginationPress = x =>{
      
    }
    

   
    render() {
        return(
          <TouchableOpacity style={{width:'85%',height:'100%'}} onPress={this.props.onPress}>
          <LinearGradient
            colors={[this.props.parentStartColor,this.props.parentEndColor]}
            start={{ x: 0, y: 0.1 }}
            style={styles.linearGradientParent}
          >
              <LinearGradient
                colors={[this.props.startColor,this.props.endColor ]}
                start={{ x: 0 , y: 0 }}
                style={styles.linearGradient}
              >
                <Text style={{color:"#777777",fontSize:35}}>{this.props.caption}</Text>
              </LinearGradient>
          </LinearGradient>
        </TouchableOpacity>
        );
    }
}


  
const styles = StyleSheet.create({
  linearGradientParent:{
    borderRadius: 20,
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
   
  },
  linearGradient:{
    borderRadius: 20,
    width:'97%',
    height:'90%',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: 'red',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.45,
        shadowRadius: 10
  
  }
  });