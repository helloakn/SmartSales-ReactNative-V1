import React from 'react';
  
import { Animated,Dimensions,StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Body,Footer,Header,HeaderColumn,AgentNo,AgentNoText,AgentNoTextBold,AgentNoImage,
    Container,
    Row,Label,LabelNormal,
    Title} from './Css';


import Button from '../../../Components/Button';

import ChooseProduct from '../../../Components/ChooseProduct';
import BackButton from '../../../Components/BackButton';



import MonthYearPicker from '../../../Components/MonthYearPicker';
import PaymentAccountTypeList from '../../../Components/ItemList/PaymentAccountTypeList';
const {height, width} = Dimensions.get('window');

const usrImg = require("../../../../assets/images/user.png");

function ShowPopup(props){
    const isShow = props.isShow;
    if(isShow){
        return <ChooseProduct onClosePress={props.onClosePress} onOKPress={props.onOKPress}/>
    }
    else{
        return <></>
    }
}
export default class CreatePaymentScreen extends ScreenController {
   
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
        const {getData} = this.state;
        const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight};
		return (
            <DefautLayout>
                
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
                <Body>
                    
                    <Header>
                        <HeaderColumn>
                            <AgentNoImage
                                source={{uri:getData.image}}
                                    resizeMode="stretch"
                                    style={{borderRadius: 20 }}
                             />
                             
                        </HeaderColumn>
                        <HeaderColumn>
                            <AgentNo>
                                <AgentNoText style={styles.textTile}>{getData.userName}</AgentNoText>
                                <AgentNoTextBold>{getData.agentCode}</AgentNoTextBold>
                            </AgentNo>
                        </HeaderColumn>
                    </Header>
                    <Container>
                       
                        <Row>
                            <TouchableOpacity onPress={this.animatedBoxShow}>
                                <Label>Month : {this.state.yearMonth} <Icon style={{marginLeft:2,textAlign:'center'}} name="calendar" size={20} color="#767D87" /></Label>
                            </TouchableOpacity>
                        </Row>
                        <Row style={{width:width}}>
                            <PaymentAccountTypeList selectedItem={this.state.accountId}  onItemClick={(x)=>{this.onItemClick(x);}} data={this.state.data} />
                        </Row>
                        <Row>
                            <Label>Enter Amount</Label>
                            
                        </Row>
                        <Row>
                           
                            <TextInput style = {styles.textinput} editable onChangeText={text => this.onAmountChangeText(text)}
                                    value={this.state.Amount} />
                        </Row>
                        <Row>
                            <Label>Description</Label>
                            
                        </Row>
                        <Row>
                           
                            <TextInput style = {styles.textinput} editable onChangeText={text => this.onDescriptionChangeText(text)}
                                    value={this.state.Description} />
                        </Row>
                        <Row>
                        <Text style={{width:'100%',textAlign:'center',color:'red'}}>{this.state.Message}</Text>
                        </Row>
                    </Container>
                    
                    

                    
                </Body>
                <Footer>
                        <Button Caption="Create" onPress={this.onCreatePress}/>
                    </Footer>
                    <ShowPopup isShow={this.state.showProduct} onClosePress={this.onClosePress} onOKPress={this.onOKPress} />        
            </DefautLayout>
         
		);
	}
}

const styles = StyleSheet.create({
    box:{
        position:'absolute',
        zIndex:20000
    },
    promotionItem:{
        width:'40%'
    },
    promotionQty:{
        width:'20%'
    },
    actionText:{
        color:'red',
        fontSize:20
    },
    text:{
        color:"#979FAB"
    },
    textTile:{
        color:"#767D83",
        fontWeight:'bold',
        paddingBottom:5
    },
    product:{
        width:'40%'
    },
    qty:{
        width:'20%'
    },
    amount:{
        width:'40%'
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