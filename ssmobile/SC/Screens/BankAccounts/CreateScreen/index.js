import React from 'react';

  
import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,Header,Body,HeaderColumn,AgentNo,AgentNoText,AgentNoTextBold,ProductImage,
    Row,Label,ImageButton} from './Css';

import { Dimensions,View,StyleSheet, Text,TextInput,ImageBackground, TouchableOpacity } from 'react-native';

import Button from '../../../Components/Button';

import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../../../Components/Loading';
import BackButton from '../../../Components/BackButton';

import {BankList} from '../../../Components/ItemList';

/*
w = 400; h = 200;
w = 800; h=?
200/400 * 500
800/400 * 200
*/
//let sliderHeight = Math.round((width/414)*200);
//import {Body,BodyInner} from './HomeCSS';


const {height, width} = Dimensions.get('window'); 


const img = require("../../../../assets/images/stockimg.png");

export default class CreateBankAccountScreen extends ScreenController {
   
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
                <Header>
                    <BankList selectedItem={this.state.id} onItemClick={(x)=>{this.onItemClick(x);}} data={this.state.data} />
                </Header>
                <Container>
                    
                    <Body>
                    <Row>
                        <Label>Account Name</Label>
                        <TextInput style = {styles.textinput} editable onChangeText={text => this.onProductNameChangeText(text)}
                                value={this.state.ProductName} />
                    </Row>
                    <Row>
                        <Label>Account No</Label>
                        <TextInput style = {styles.textinput} editable onChangeText={text => this.onProductPriceChangeText(text)}
                                value={this.state.ProductPrice} />
                    </Row>
                    <Row>
                        <Label>Description</Label>
                        <TextInput style = {styles.textinput} editable onChangeText={text => this.onProductDescriptionChangeText(text)}
                                value={this.state.ProductDescription} />
                    </Row>
                    <Row style={{paddingBottom:20}}>
                        <Label style={{color:'red'}}>{this.state.Message}</Label>
                    </Row>
                    <Row>
                        <Button Caption="Create" onPress={this.onCreatePress}/>
                    </Row>
                    </Body>
                </Container>
            </DefautLayout>
         
		);
	}
}

const styles = StyleSheet.create({
    button: {
     
      
      justifyContent:'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width:(width/3),
        height:(width/3),
        borderRadius:((width/3)/2),
        borderRadius:20,
        backgroundColor:'red'
    },
    textinput: {
        fontSize: 18,
        color: '#777E87',
        marginBottom: 30,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        paddingTop:10
      }
  });