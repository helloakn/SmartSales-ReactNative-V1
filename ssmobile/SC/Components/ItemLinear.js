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

export default class ItemLinear extends React.Component {
    constructor(props){
        super(props);
       
    }
    
    _onPaginationPress = x =>{
      
    }
    

   
    render() {
        return(
          <TouchableOpacity style={{marginTop:15,width:'100%',height:'100%'}} onPress={this.props.onPress}>
          <View
           
            style={styles.Container}
          >
                <Text style={{color:"#9D867A",fontSize:35}}>{this.props.caption}</Text>
          </View>
        </TouchableOpacity>
        );
    }
}


  
const styles = StyleSheet.create({
  Container:{
    borderRadius: 20,
    width:'100%',
    height:'90%',
    justifyContent:'center',
    alignItems:'center',
   
  }
  });