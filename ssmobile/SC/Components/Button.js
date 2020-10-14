import React from 'react';
import {
    Image,
    StyleSheet,
    FlatList,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Platform,
    StatusBar,
    I18nManager,
} from 'react-native';
import Svg, {
    Rect,G,Line,Path,Defs ,Filter,FeFlood,FeGaussianBlur,FeColorMatrix,FeOffset,FeBlend
  } from 'react-native-svg';
import styled from 'styled-components/native'

export default class Button extends React.Component {
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
        let TopBtn = <BtnTop backgroundColor={this.props.backgroundColor?this.props.backgroundColor:'#D5DCE6'} style={styles.boxShadowUp}></BtnTop>
        return(
            <TouchableOpacity 
              activeOpacity={.8}
              style={{
                width:(this.props.width?this.props.width:'100%'),
                height:(this.props.height?this.props.height:60)
              }} 
              onPress={this.props.onPress}>
            <BtnContainer width={this.props.width?this.props.width:'100%'}
              height={this.props.height?this.props.height:'60px'}
            >
                {TopBtn}
                <BtnDown backgroundColor={this.props.backgroundColor?this.props.backgroundColor:'#D5DCE6'} style={styles.boxShadowDown}>
                    <Brcontainer>
                        <Text style={{color:(this.props.color?this.props.color:'#767D87'),fontSize:16,fontWeight:(this.props.fontWeight?this.props.fontWeight:'bold')}}>{this.props.Caption}</Text>
                    </Brcontainer>
                </BtnDown>
            </BtnContainer>
            </TouchableOpacity>
        );
    }
}


const BtnContainer = styled.View`
  display:flex;
  justifyContent:center;
  width:100%;
  height:60px;
  height:${props=>props.height};
`
const BtnTop = styled.View`
  display:flex;
  width:99%;
  height:99%;
  position:absolute;
  backgroundColor:${props=>(props.backgroundColor?props.backgroundColor:'#D5DCE6')};
  borderRadius:10px;
`
const BtnDown = styled.View`
  display:flex;
  width:99%;
  height:99%;
  position:absolute;
  backgroundColor:${props=>(props.backgroundColor?props.backgroundColor:'#D5DCE6')};
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
        shadowRadius: 10,
        elevation:1
    },
    boxShadowDown:{
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.45,
        shadowRadius: 10,
        elevation:1
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