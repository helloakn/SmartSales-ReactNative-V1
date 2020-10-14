import React from 'react';
import {Animated,Dimensions, View,StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,Body,
    Row,Label,LabelSeries,HeaderRow,FooterRow} from './Css';



import Button from '../../../Components/Button';

import MonthYearPicker from '../../../Components/MonthYearPicker';

import BackButton from '../../../Components/BackButton';

export default class CreatePromotion4Screen extends ScreenController {
   
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
        const animatedStyleFrom = {opacity:this.animatedOpacityFrom, width: this.animatedWidthFrom, height: this.animatedHeightFrom};
        const animatedStyleTo = {opacity:this.animatedOpacityTo, width: this.animatedWidthTo, height: this.animatedHeightTo};
		return (
            <DefautLayout>
                <Animated.View style = {[styles.box, animatedStyleFrom]}>
                    <MonthYearPicker 
                        value={this.state.yearMonthFrom}
                        fromYear="2010" toYear="2040" 
                        title="Choose From Month - Year" 
                        isShowMonthYearPicker={this.state.isShowYearMonth} 
                        onYearMonthClose={this.onYearMonthCloseFrom} 
                        onOKYearMonthPress={this.onOKYearMonthPressFrom} 
                    />
                </Animated.View>
                <Animated.View style = {[styles.box, animatedStyleTo]}>
                    <MonthYearPicker 
                        value={this.state.yearMonthTo}
                        fromYear="2010" toYear="2040" 
                        title="Choose To Month - Year" 
                        isShowMonthYearPicker={this.state.isShowYearMonth} 
                        onYearMonthClose={this.onYearMonthCloseTo} 
                        onOKYearMonthPress={this.onOKYearMonthPressTo} 
                    />
                </Animated.View>
                
                <Container>
                    <HeaderRow>
                        <LabelSeries>4</LabelSeries>
                    </HeaderRow>
                    <Body>
                  
                        <Row style={{padding:30}}>
                            <Label style={{fontSize:16,color:'#3E566B',fontWeight:'bold'}}>Choose Promotion Month</Label>
                        </Row>
                        <Row>
                            <TouchableOpacity onPress={this.animatedBoxShowFrom} 
                                style={{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    width:'100%',
                                    alignItems:'center',
                                    padding:30
                                    }}
                            >
                                <Text style={{fontSize:16,color:'#3E566B'}}>From Month </Text>
                                <Text> 
                                     {this.state.yearMonthFrom}
                                </Text>
                                <Icon  name="calendar" size={20} color="#767D87" />
                            </TouchableOpacity>
                        </Row>
                        <Row>
                        <TouchableOpacity onPress={this.animatedBoxShowTo} 
                                style={{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    width:'100%',
                                    alignItems:'center',
                                    padding:30
                                    }}
                            >
                                <Text style={{fontSize:16,color:'#3E566B'}}>To Month </Text>
                                <Text> 
                                     {this.state.yearMonthTo}  
                                </Text>
                                <Icon  name="calendar" size={20} color="#767D87" />
                            </TouchableOpacity>
                            
                        </Row>
                        
                        
                        <Row style={{padding:10}}>
                            <Text style={{width:'100%',textAlign:'center',color:'red'}}>{this.state.Message}</Text>
                        </Row>

                    </Body>
                    <FooterRow>
                    <Button Caption="Save" onPress={this.onSavePress}/>
                    </FooterRow>
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
    selectbox:{
        width:'50%',

        textAlign:'center'
    },
    textinput: {
        fontSize: 18,
        color: '#777E87',
        marginBottom: 30,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        paddingTop:10
      },
      textinputQty:{
        fontSize: 18,
        color: '#777E87',
        marginBottom: 30,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        paddingTop:10,
        textAlign:'center',
        width:'30%'
      },
      checkbox: {
        alignSelf: "center",
      }
  });