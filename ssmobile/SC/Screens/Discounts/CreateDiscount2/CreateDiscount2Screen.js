import React from 'react';
import { View,StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';
  
import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,Body,
    Row,Label,LabelSeries,HeaderRow,FooterRow} from './Css';


import {Picker} from '@react-native-community/picker';

import Button from '../../../Components/Button';
import BackButton from '../../../Components/BackButton';

export default class CreateDiscount2Screen extends ScreenController {
   
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
        data = [];
        const{ProductList} = this.state; 
        for(let index=0;index<ProductList.length;index++){
             data.push(
                <Picker.Item label={ProductList[index].productName} value={ProductList[index].productId} />
             );
           //  console.log(data);
         }
		return (
            <DefautLayout>
                <Container>
                    <HeaderRow>
                        <LabelSeries>2</LabelSeries>
                    </HeaderRow>
                    <Body>
                        
                        <Row>
                            <Label>Choose Discount Product</Label>
                        </Row>
                        <Row>
                            <Picker
                            selectedValue={this.state.productId}
                                style={styles.selectbox}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({productId: itemValue})
                            }>
                            {data}

                            </Picker>
                        </Row>

                        <Row>
                           
                            <TextInput placeholder="Qty" style = {styles.textinputQty} editable onChangeText={text => this.onProductQtyChangeText(text)}
                                    value={this.state.productQty} />
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