import React from 'react';
import { Animated,View,StyleSheet,ActivityIndicator, Text,TextInput, TouchableOpacity } from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,Body,
    Row,Label,Footer} from './Css';


import MonthYearPicker from '../../../Components/MonthYearPicker';
import Button from '../../../Components/Button';
import PaymentAccountTypeList from '../../../Components/ItemList/PaymentAccountTypeList';
import Loading from '../../../Components/Loading';

import BackButton from '../../../Components/BackButton';

export default class CreatePurchaseScreen extends ScreenController {
   
    constructor(props) {
        
        super(props);
        navigation = this.props.navigation;
        navigation.setOptions({
            headerStyle:{
                backgroundColor:'#D5DCE6'
            },
            headerTitle:'Create Purchase Order',
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
        const animatedStyle = {opacity:this.animatedOpocity, width: this.animatedWidth, height: this.animatedHeight};
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
                        <Body>
                            <Row>
                                <PaymentAccountTypeList selectedItem={this.state.accountId} onItemClick={(x)=>{this.onItemClick(x);}} data={this.state.data}></PaymentAccountTypeList>
                            </Row>
                               
                            <Row style={{flexDirection:'row',paddingBottom:30}}>
                                <TouchableOpacity onPress={this.animatedBoxShow}>
                                    <Label>Month : {this.state.yearMonth}  <Icon style={{marginLeft:2,textAlign:'center'}} name="calendar" size={20} color="#767D87" /></Label>
                                </TouchableOpacity>
                                
                            </Row>
                            <Row>
                                <Label>USD to MMK Exchange Rate</Label>
                                <TextInput style = {styles.textinput}  onChangeText={text => this.onUSDTOMMKChangeText(text)}
                                        value={this.state.USDTOMMK}
                                        />
                            </Row>
                            <Row>
                                <Label>USD Amount</Label>
                                <TextInput style = {styles.textinput}  onChangeText={text => this.onUSDAmountChangeText(text)}
                                        value={this.state.USDAmount}
                                        />
                            </Row>
                            <Row>
                                <Label>MMK Amount</Label>
                                <TextInput style = {styles.textinput}  onChangeText={text => this.onMMKAmountChangeText(text)}
                                        value={this.state.MMKAmount}
                                        />
                            </Row>
                            
                            <Row>
                                <Label>Description</Label>
                                <TextInput style = {styles.textinput}  onChangeText={text => this.onDescriptionChangeText(text)}
                                        value={this.state.Description}
                                        />
                            </Row>
                            <Row>
                                <Label style={{color:(this.state.status==200?'green':'red')}}>zz{this.state.Message}</Label>
                            </Row>
                            
                        </Body>
                        <Footer >
                            <Row>
                                <Button Caption="Save" onPress={this.onSavePress}/>
                            </Row>
                        </Footer>
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