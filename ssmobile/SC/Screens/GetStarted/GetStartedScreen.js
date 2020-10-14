import React from 'react';
import Svg, {
    Rect,G,Line,Path,Defs ,Filter,FeFlood,FeGaussianBlur,FeColorMatrix,FeOffset,FeBlend
  } from 'react-native-svg';
  
import DefautLayout from '../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Body,BodyBanner,BodyBannerRow,BodyBannerColumn,
    BtnContainer,BtnTop,BtnDown,BodyAction,Brcontainer} from './Css';

import { StyleSheet, Text, TouchableOpacity ,TouchableHighlight} from 'react-native';
/*
w = 400; h = 200;
w = 800; h=?
200/400 * 500
800/400 * 200
*/
//let sliderHeight = Math.round((width/414)*200);
//import {Body,BodyInner} from './HomeCSS';

export default class GetStartedScreen extends ScreenController {
   
    constructor(props) {
        
        super(props);
       
    }
     
    
	render() {
		return (
            <DefautLayout>
                <Body>
                    <BodyBanner>
                        <BodyBannerRow>
                            <Text style={{color:'#85888D',fontSize:50}}>Smart</Text>
                        </BodyBannerRow>
                        <BodyBannerRow>
                            <Text style={{color:'#85888D',fontSize:50}}>Sales</Text>
                        </BodyBannerRow>
                        <BodyBannerRow style={{paddingTop:20}}>
                            <Text style={{color:'#85888D',fontSize:20}}>by  </Text>
                            <Text style={{color:'#000000',fontSize:20}}>Focus </Text>
                            <Text style={{color:'#EE3C5E',fontSize:20}}>Beauty</Text>
                        </BodyBannerRow>
                        <BodyBannerColumn style={{paddingTop:20}}>
                            <Text style={{color:'#606266',fontSize:16}}>Account balance, product order diary, </Text>
                            <Text style={{color:'#606266',fontSize:16}}>Payment information, delivery management;</Text>
                            <Text style={{color:'#606266',fontSize:16}}>It's all about us!</Text>
                        </BodyBannerColumn>
                    </BodyBanner>
                    <BodyAction>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.button}
                            onPress={this.onGettingStartedPress}
                        >
                            <BtnContainer>
                                <BtnTop style={styles.boxShadowUp}></BtnTop>
                                <BtnDown style={styles.boxShadowDown}>
                                    <Brcontainer>
                                    <Text style={{color:'#767D87',fontSize:16,fontWeight:'bold'}}>GET STARTED</Text>
                                    <Svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M33 5L21 9.33013V0.669873L33 5Z" fill="#767D87"/>
                                        <Line y1="5" x2="22" y2="5" stroke="#767D87" strokeWidth="2"/>
                                    </Svg>
                                    </Brcontainer>
                                

                                </BtnDown>
                            </BtnContainer>
                        </TouchableOpacity>
                    </BodyAction>
                    
                </Body>
            </DefautLayout>
         
		);
	}
}

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      alignSelf:'flex-start',
      paddingTop:20,
      justifyContent:'flex-end'
    },
    boxShadowUp:{
        shadowColor: '#fff',
        shadowOffset: {width: -5, height: -5},
        shadowOpacity: 9,
        shadowRadius: 10,
        elevation:1
    },
    boxShadowDown:{
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.45,
        shadowRadius: 10,
        elevation:9
    }
  });