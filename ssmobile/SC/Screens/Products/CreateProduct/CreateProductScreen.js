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
                <Container>
                    <Header>
                        <HeaderColumn>
                            <TouchableOpacity onPress={()=>this.onImageChoose()}>
                            
                           
                             <ProductImage
                                source={this.state.imageSource}
                                resizeMode="contain"
                             >
                                <ImageButton>
                                    <Icon style={{marginLeft:2,textAlign:'center'}} name="add-sharp" size={40} color="#767D87" />
                                </ImageButton>
                             </ProductImage>
                             </TouchableOpacity>
                        </HeaderColumn>
                        <HeaderColumn>
                            <AgentNo>
                                <AgentNoText>Product ID.</AgentNoText>
                                <AgentNoTextBold>{this.state.ProductID}</AgentNoTextBold>
                            </AgentNo>
                        </HeaderColumn>
                    </Header>
                    <Body>
                    <Row>
                        <Label>Product Name</Label>
                        <TextInput style = {styles.textinput} editable onChangeText={text => this.onProductNameChangeText(text)}
                                value={this.state.ProductName} />
                    </Row>
                    <Row>
                        <Label>Price</Label>
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