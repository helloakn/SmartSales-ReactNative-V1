import React from 'react';
import Svg, {
    Rect,G,Line,Path,Defs ,Filter,FeFlood,FeGaussianBlur,FeColorMatrix,FeOffset,FeBlend
  } from 'react-native-svg';
  
import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,Body,
    Row,Label,LabelSeries,HeaderRow,FooterRow} from './Css';

import { View,StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';

import Button from '../../../Components/Button';
import BackButton from '../../../Components/BackButton';

export default class CreateDiscount1Screen extends ScreenController {
   
    constructor(props) {
        
        super(props);
        navigation = this.props.navigation;
        navigation.setOptions({
            headerTitleStyle:{
                alignSelf:'center',
                fontSize:14
            },
            headerLeft: () => (
                <BackButton iconName="arrow-back" onPress={()=>{
                    navigation.goBack();
                    }}/>
                )
        });
       
    }
     
    
	render() {
		return (
            <DefautLayout>
                <Container>
                    <HeaderRow>
                        <LabelSeries>1</LabelSeries>
                    </HeaderRow>
                    <Body>
                        
                        <Row>
                            <Label>Enter Discount Name</Label>
                            
                        </Row>
                        <Row>
                           
                            <TextInput style = {styles.textinput} editable onChangeText={text => this.ondiscountRuleCodeChangeText(text)}
                                    value={this.state.discountRuleCode} />
                        </Row>
                        <Row>
                            <Text style={{width:'100%',textAlign:'center',color:'red'}}>{this.state.Message}</Text>
                        </Row>
                        
                        

                    </Body>
                    <FooterRow>
                            <Button Caption="Next" onPress={this.onNextPress}/>
                    </FooterRow>
                </Container>
            </DefautLayout>
         
		);
	}
}

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
        color: '#777E87',
        marginBottom: 30,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        paddingTop:10
      },
      checkbox: {
        alignSelf: "center",
      }
  });