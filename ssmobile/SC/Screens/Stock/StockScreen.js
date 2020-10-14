import React from 'react';
import DefautLayout from '../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,Body,
    Row,Label} from './Css';

import { Animated,Dimensions,View,StyleSheet,ActivityIndicator, Text,TextInput, TouchableOpacity } from 'react-native';

import Button from '../../Components/Button';
import {ItemLists} from '../../Components/ItemList';
import Loading from '../../Components/Loading';

import MonthYearPicker from '../../Components/MonthYearPicker';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../../Components/BackButton';


/*
const {height, width} = Dimensions.get('window');
w = 400; h = 200;
w = 800; h=?
200/400 * 500
800/400 * 200
*/
//let sliderHeight = Math.round((width/414)*200);
//import {Body,BodyInner} from './HomeCSS';
//<MonthYearPicker isMonthyearPickerOn={this.state.isMonthyearPickerOn} />
const usrImg = require("../../../assets/images/user.png");

export default class StocktScreen extends ScreenController {
   
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
        const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight,opacity:this.animatedOpacity};
		return (
            <DefautLayout>
                <Loading isLoading={this.state.isLoading} />
                <Animated.View style = {[styles.box, animatedStyle]}>
                    <MonthYearPicker 
                        value={this.state.yearMonth}
                        fromYear="2010" toYear="2040" 
                        title="Choose Month - Year" 
                        isShowMonthYearPicker={this.state.isShowYearMonth} 
                        onYearMonthClose={this.onYearMonthClose} 
                        onOKYearMonthPress={this.onOKYearMonthPress} 
                    />
                </Animated.View>
                
                    <Container>
                        <ItemLists selectedItem={this.state.productId} onItemClick={(x)=>{this.onItemClick(x);}} data={this.state.data}></ItemLists>
                        <Body>
                            
                            <Row style={{flexDirection:'row'}}>
                                <TouchableOpacity onPress={this.animatedBoxShow} >
                                    <Label>Month : {this.state.yearMonth}  <Icon style={{marginLeft:2,textAlign:'center'}} name="calendar" size={20} color="#767D87" /></Label>
                                </TouchableOpacity>
                                
                            </Row>
                            <Row>
                                <Label>Total Qty: {this.state.totalQty}</Label>
                                
                            </Row>
                            <Row>
                                <Label>Purchase Quantity</Label>
                                <TextInput 
                                    style = {styles.textinput}  
                                    onChangeText={text => this.onPurchaseQtyChangeText(text)}
                                    value={this.state.purchaseQty}
                                />
                            </Row>
                            <Row>
                                <Label style={{color:(this.state.status==200?'green':'red')}}>{this.state.Message}</Label>
                            </Row>
                            <Row>
                            <Button Caption="Save" onPress={this.onSavePress}/>
                            </Row>
                        </Body>
                    </Container>
                
            </DefautLayout>
         
		);
	}
}

const styles = StyleSheet.create({
    box:{
        position:'absolute',
        zIndex:20000
    },
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