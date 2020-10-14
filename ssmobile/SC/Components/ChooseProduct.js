import React from 'react';
import {
    TextInput,
    StyleSheet,
    FlatList,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Platform,
    StatusBar,
    I18nManager,
} from 'react-native';
import styled from 'styled-components/native'
import {Picker} from '@react-native-community/picker';
import Button from './Button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ChooseProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product:null,
            productId:''
          };
    }
    
   
    render() {
      data = [];
      const{ProductList} = this.props; 
      for(let index=0;index<ProductList.length;index++){
           data.push(
              <Picker.Item label={ProductList[index].productName} value={ProductList[index].productId} />
           );
         //  console.log(data);
       }
        return(
            <Container>
              <BtnContainer>
                  <BtnTop style={styles.boxShadowUp}></BtnTop>
                  <BtnDown style={styles.boxShadowDown}>
                      <Brcontainer>
                          <Header>
                          <TouchableOpacity onPress={this.props.onClosePress}>
                            <Icon style={{marginLeft:2,textAlign:'center',paddingRight:10,paddingTop:10}} name="close" size={20} color="#E72727" />
                          </TouchableOpacity>
                          </Header>
                          <Body>
                            <Row>
                              <Text style={{fontSize:16,color:'#3E566B',fontWeight:'bold'}}>Choose Product</Text>
                              </Row>
                              
                            <Row>
                              <Picker
                              selectedValue={this.state.productId}
                                  style={styles.selectbox}
                              onValueChange={(itemValue, itemIndex) =>
                                  this.setState({productId:itemValue,product: ProductList[itemIndex]})
                              }>
                                 {data}

                              </Picker>
                            </Row>
                            <Row>
                              <TextInput placeholder="Qty" style = {styles.textinputQty} editable onChangeText={text => this.props.onProductQtyChangeText(text)}
                                    value={this.props.ProductQty} />
                            </Row>
                            <Footer>
                              <Button style={{ width:'100px',height:'100px'}} Caption="Ok" onPress={()=>this.props.onOKPress(this.state.product)}/>
                            </Footer>
                          </Body>
                      </Brcontainer>
                  </BtnDown>
              </BtnContainer>
             </Container>
        );
    }
}
const Container = styled.View`
  display:flex;
  justifyContent:center;
  width:100%;
  height:100%;
  justifyContent:center;
  alignItems:center;
  position:absolute;
  backgroundColor:rgba(214, 220, 229, 0.8);
  zIndex:200000;
`
/*
${
    props => (props.Layout=="L"?"#252120":"#252120")
};*/
const BtnContainer = styled.View`
  display:flex;
  justifyContent:center;
  width:80%;
  height:50%;
`
const BtnTop = styled.View`
  display:flex;
  width:99%;
  height:99%;
  position:absolute;
  backgroundColor:#D5DCE6;
  borderRadius:10;
`
const BtnDown = styled.View`
  display:flex;
  width:99%;
  height:99%;
  position:absolute;
  backgroundColor:#D5DCE6;
  borderRadius:10;
  alignItems:center;
`
const Brcontainer = styled.View`
  display:flex;
  width:100%;
  height:100%;
  alignItems:center;
  
`
  
const Header = styled.View`
  display:flex;
  width:100%;
  height:10%;
  justifyContent:center;
  alignItems:flex-end;
  padding:5px;
`
const Body = styled.View`
  display:flex;
  width:90%;
  height:80%;
  padding:0;
  justifyContent:space-around;
  alignItems:center;
`
const Row = styled.View`
display:flex;
width:100%;
justifyContent:center;
alignItems:center;
`
const Footer = styled.View`
display:flex;   
flexDirection:column;
paddingTop:20px;
width:70%;
justifyContent:center;
alignItems:flex-start;
`  
const styles = StyleSheet.create({
    
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
        color: 'black',
        marginBottom: 30,
        borderBottomColor: 'silver',
        borderBottomWidth: 1
      },
      textinputQty:{
        fontSize: 18,
        color: '#767D83',
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