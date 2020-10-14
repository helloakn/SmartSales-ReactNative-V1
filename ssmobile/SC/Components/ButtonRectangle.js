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

export default class ButtonRectangle extends React.Component {
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
            <TouchableOpacity 
              style={{
                  width:(this.props.width?this.props.width:60),
                  height:(this.props.height?this.props.height:60)
                }}  
              onPress={this.props.onPress}
            >
              <BtnContainer>
                  <BtnTop borderRadius={(this.props.borderRadius?this.props.borderRadius:10)} style={styles.boxShadowUp}></BtnTop>
                  <BtnDown borderRadius={(this.props.borderRadius?this.props.borderRadius:10)} style={styles.boxShadowDown}>
                      <Brcontainer>
                          <Text style={{color:(this.props.textColor?this.props.textColor:'yellow'),fontSize:(this.props.fontSize?this.props.fontSize:16),fontWeight:'bold'}}>{this.props.Caption}</Text>
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
  height:100%;
`
const BtnTop = styled.View`
  display:flex;
  width:99%;
  height:99%;
  position:absolute;
  backgroundColor:#D5DCE6;
  borderRadius:${props=>(props.borderRadius)};
`
const BtnDown = styled.View`
  display:flex;
  width:99%;
  height:99%;
  position:absolute;
  backgroundColor:#D5DCE6;
  borderRadius:${props=>(props.borderRadius)};
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
        elevation:9
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