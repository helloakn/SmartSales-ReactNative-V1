import React from 'react';
import Svg, {
    Rect,G,Line,Path,Defs ,Filter,FeFlood,FeGaussianBlur,FeColorMatrix,FeOffset,FeBlend
  } from 'react-native-svg';
  
import DefautLayout from '../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,Body,
    Row,Label,LabelSeries,Footer,FooterRow} from './Css';

import { Dimensions,View,StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';

import ButtonRectangle from '../../Components/ButtonRectangle';

import ButtonLinear from '../../Components/ButtonLinear';
const {height, width} = Dimensions.get('window');
buttonWidth = (width/100)*85;
buttonWidth = buttonWidth/3;

export default class AdminHomeScreen extends ScreenController {
   /*
    <Text style={{ textAlign: 'center',fontSize:20}}>Smart</Text>
                    <Text style={{ fontSize:20,textAlign: 'center',color:'#EE3C5E'}}> Sales</Text>
   */
    constructor(props) {
        
        super(props);
        navigation = this.props.navigation;
        navigation.setOptions({
            headerStyle:{
                backgroundColor:'#D5DCE6',
                
                justifyContent:'center',
                alignItems:'center'
            },
            headerTitleStyle:{
                alignSelf:'center',
                borderBottomColor:'red',
            },
            headerTitle: (<>
                   <Text style={{ textAlign: 'center',fontSize:20}}>Smart</Text>
                    <Text style={{ fontSize:20,textAlign: 'center',color:'#EE3C5E'}}> Sales</Text>
                </>)
        });
       
    }
     //FDC29B
    
	render() {
        const {height, width} = Dimensions.get('window'); 
        buttonWidth = (width/100)*85;
        bigButtonWidth = buttonWidth/3;
        buttonWidth = buttonWidth/4;
        
		return (
            <DefautLayout>
                <Container>
               
                    <Body>
                        
                        <Row>
                            <ButtonLinear 
                                parentStartColor="#ffffff" parentEndColor="#fff" 
                                startColor="#D5DCE6" endColor="#fff" 
                                caption="AGENTS" 
                                onPress={this.onAgentsPress} 
                            />
                        </Row>
                        <Row>
                            <ButtonLinear 
                                parentStartColor="#ffffff" parentEndColor="#fff" 
                                startColor="#D5DCE6" endColor="#fff" 
                                caption="SALES"
                                onPress={this.onSalesPress} 
                            />
                        </Row>
                        <Row>
                            <ButtonLinear 
                                parentStartColor="#fff" parentEndColor="#fff" 
                                startColor="#D5DCE6" endColor="#fff" 
                                caption="PAYMENTS"
                                onPress={this.onPaymentsPress} 
                            />
                        </Row>
                       
                    </Body>
                    <Footer >
                        <FooterRow>
                        <ButtonRectangle borderRadius={20} Caption="STOCKS" textColor="#7D818A" fontSize={10} width={buttonWidth} height={buttonWidth} onPress={this.onStockPress}/>
                            <ButtonRectangle borderRadius={20} Caption="PURCHASES" textColor="#7D818A" fontSize={10} width={buttonWidth} height={buttonWidth} onPress={this.onPurchasePress}/>
                            
                            <ButtonRectangle borderRadius={20} Caption="PRODUCTS" textColor="#7D818A" fontSize={10} width={buttonWidth} height={buttonWidth} onPress={this.onProductPress}/>
                        </FooterRow>
                        <FooterRow >
                            <ButtonRectangle borderRadius={20} Caption="PROMOTION" textColor="#7D818A" fontSize={10} width={buttonWidth} height={buttonWidth} onPress={this.onPromotionPress}/>
                            <ButtonRectangle borderRadius={20} Caption="DISCOUNT" textColor="#7D818A" fontSize={10} width={buttonWidth} height={buttonWidth} onPress={this.onDiscountPress}/>
                            <ButtonRectangle borderRadius={20} Caption="ACCOUNT" textColor="#7D818A" fontSize={10} width={buttonWidth} height={buttonWidth} onPress={this.onAccountPress}/>
                        </FooterRow>
                            
                    </Footer>
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
        shadowRadius: 30
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
        width:'50%',
        textAlign:'right',
        paddingTop:10
      },
      checkbox: {
        alignSelf: "center",
      }
  });