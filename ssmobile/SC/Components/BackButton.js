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
import Icon from 'react-native-vector-icons/Ionicons';

export default class BackButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            oldOffset:0,
            oldIndex:0,
            offsetText:"ok",
            activeIndex: 0,
          };
    }
    
    _onPaginationPress = x =>{
      
    }
   
    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress}>
            <BtnContainer>
                        <Icon name={this.props.iconName} size={25} color="#3E566B" />
            </BtnContainer>
            </TouchableOpacity>
        );
    }
}


const BtnContainer = styled.View`
  display:flex;
  justifyContent:center;
  alignItems:center;
  width:50px;
`
const BtnTop = styled.View`
  display:flex;
  width:99%;
  height:99%;
  position:absolute;
  backgroundColor:#D5DCE6;
  borderRadius:10px;
`
const BtnDown = styled.View`
  display:flex;
  width:99%;
  height:99%;
  position:absolute;
  backgroundColor:#D5DCE6;
  borderRadius:10px;
  justifyContent:flex-end;
  alignItems:center;
`
const Brcontainer = styled.View`
  display:flex;
  width:100%;
  height:100%;
  justifyContent:center;
  alignItems:center;
`
  
const styles = StyleSheet.create({
    button: {
     
      
      justifyContent:'center',
    },
    boxShadowUp:{
        shadowColor: '#fff',
        shadowOffset: {width: -5, height: -5},
        shadowOpacity: 1,
        shadowRadius: 10
    },
    boxShadowDown:{
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.45,
        shadowRadius: 10
    },
    textinput: {
        fontSize: 18,
        color: 'black',
        marginBottom: 30,
        borderBottomColor: 'silver',
        borderBottomWidth: 1
      },
      checkbox: {
        alignSelf: "center",
      }
  });