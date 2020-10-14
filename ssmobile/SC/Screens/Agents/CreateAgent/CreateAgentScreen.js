import React from 'react';
import { Dimensions,View,StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,Header,HeaderColumn,AgentNo,AgentNoText,AgentNoTextBold,AgentNoImage,
    Body,
    Row,Label,AgentImage,ImageButton} from './Css';

import Button from '../../../Components/Button';
import Loading from '../../../Components/Loading';
import BackButton from '../../../Components/BackButton';

/*
w = 400; h = 200;
w = 800; h=?
200/400 * 500
800/400 * 200
*/
//let sliderHeight = Math.round((width/414)*200);
//import {Body,BodyInner} from './HomeCSS';
const {height, width} = Dimensions.get('window'); 
export default class CreateProductScreen extends ScreenController {
   
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
            <Loading isLoading={this.state.isLoading} />
                <Container>
                    <Header>
                        <HeaderColumn>

                            <TouchableOpacity 
                                onPress={()=>this.onImageChoose()} 
                                style={{
                                        width:(width/3),
                                        height:(width/3),
                                        borderRadius:30,
                                        justifyContent:'flex-end',
                                        alignItems:'center'
                                    }}
                            >
                                <AgentImage
                                    source={this.state.imageSource}
                                    resizeMode="stretch"
                                    style={{borderRadius: 205 }}
                                    onLoadStart={(e)=>this.onImageLoadStart(e)}
                                    onLoadEnd={(e)=>this.onImageLoadEnd(e)}
                                >
                                    
                                </AgentImage>
                                <Icon style={{
                                        marginLeft:2,
                                        textAlign:'center',
                                        position:'absolute',
                                        marginTop:500
                                    }} name="camera" size={40} color="#767D87" />
                            </TouchableOpacity>

                        </HeaderColumn>
                        <HeaderColumn>
                            <AgentNo>
                                <AgentNoText>Agent No.</AgentNoText>
                                <AgentNoTextBold>{this.state.agentCode}</AgentNoTextBold>
                            </AgentNo>
                        </HeaderColumn>
                    </Header>
                    <Body>
                        <Row>
                            <Label>FULL NAME</Label>
                            <TextInput style = {styles.textinput} editable onChangeText={text => this.onFullNameChangeText(text)}
                                    value={this.state.FullName} />
                        </Row>
                        <Row>
                            <Label>USER NAME</Label>
                            <TextInput style = {styles.textinput} editable onChangeText={text => this.onUserNameChangeText(text)}
                                    value={this.state.UserName} />
                        </Row>
                        <Row>
                            <Label>PASSWORD</Label>
                            <TextInput secureTextEntry={true}  style = {styles.textinput} editable onChangeText={text => this.onPasswordChangeText(text)}
                                    value={this.state.Password} />
                        </Row>
                        <Row>
                            <Label>PHONE NO</Label>
                            <TextInput style = {styles.textinput} editable onChangeText={text => this.onPhoneNoChangeText(text)}
                                    value={this.state.PhoneNo} />
                        </Row>
                        <Row>
                            <Label>ADDRESS</Label>
                            <TextInput style = {styles.textinput} editable onChangeText={text => this.onAddressChangeText(text)}
                                    value={this.state.Address} />
                        </Row>
                        <Row >
                            <Label style={{color:(this.state.status==200?'green':'red')}}>{this.state.Message}</Label>
                        </Row>
                        <Button Caption="Create" onPress={this.onCreatePress}/>
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
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
      },
      checkbox: {
        alignSelf: "center",
      }
  });