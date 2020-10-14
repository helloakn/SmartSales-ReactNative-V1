import React from 'react';

  
import DefautLayout from '../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Body,Header,Content,Footer,HeaderRow,ContentRowFirst,ContentRowSecond,ContentRowLast,
    BtnContainer,BtnTop,BtnDown,Brcontainer} from './Css';

import Button from '../../Components/Button';
import Loading from '../../Components/Loading';

import { View,StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';

import CheckBox from '@react-native-community/checkbox';
/*
w = 400; h = 200;
w = 800; h=?
200/400 * 500
800/400 * 200
*/
//let sliderHeight = Math.round((width/414)*200);
//import {Body,BodyInner} from './HomeCSS';



export default class LogInScreen extends ScreenController {
   
    constructor(props) {
        
        super(props);
       
    }
     
    
	render() {
		return (
            <DefautLayout>
                <Loading isLoading={this.state.isLoading} />
                <Body>
                    <Header>
                        <HeaderRow>
                            <Text style={{color:'#000',fontSize:20}}>Smart </Text><Text style={{color:'#EE3C5E',fontSize:20}}>Sales</Text>
                        </HeaderRow>
                        
                    </Header>
                    <Content>
                        <ContentRowFirst>
                            <Text style={{color:'#979FAB',fontSize:14}}>USER NAME </Text>
                            <TextInput style = {styles.textinput} editable onChangeText={text => this.onUserNameChangeText(text)}
                                value={this.state.UserName} />
                        </ContentRowFirst>


                        <ContentRowSecond>
                            <Text style={{color:'#979FAB',fontSize:14}}>PASSWORD </Text>
                            <TextInput style = {styles.textinput} editable onChangeText={text => this.onPasswordChangeText(text)}
                                value={this.state.Password} secureTextEntry={true}  password />
                        </ContentRowSecond>

                        <ContentRowLast style={{padding:5}}>
                            <View style={{justifyContent:'flex-start',alignItems:'center',display:'flex',flexDirection:'row'}}>
                                <CheckBox
                                value={this.state.isRemember}
                                onValueChange={(v) => this.setSelection(v)}
                                style={styles.checkbox}
                                />
                                <Text style={{color:'#979FAB',fontSize:14}}>  Remember Me</Text>
                               
                            </View>
                            <Text style={{color:'#D81915',fontSize:14,padding:5}}>Forgot Password </Text>
                        </ContentRowLast>
                        <ContentRowSecond>
                            <Text style={{color:'red',fontSize:14}}>{this.state.Message} </Text>
                            
                        </ContentRowSecond>
                    </Content>
                    <Footer>
                       
                            <Button Caption="LogIn" onPress={this.onLogInPress}/>
                       
                    </Footer>
                </Body>
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
        color: 'black',
        color: '#777E87',
        marginBottom: 30,
        borderBottomColor: 'silver',
        borderBottomWidth: 1
      },
      checkbox: {
        alignSelf: "center",
        
      }
  });