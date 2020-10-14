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
    Animated
} from 'react-native';

import styled from 'styled-components/native'
import Button from './Button';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-community/picker';

export default class MonthYearPicker extends React.Component {
    constructor(props){
        super(props);
        yearMonth = this.props.value;
        yearMonth = yearMonth.split(' ');
        this.state = {
            year:yearMonth[0],
            month:yearMonth[1],
            monthNames:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ]
          };
        
    }
    
   
    render() {

        var fromYear =this.props.fromYear;
        var toYear = this.props.toYear;
        years = [];
        for(let index=fromYear;index<toYear;index++){

            years.push(
              <Picker.Item label={index.toString()} value={index.toString()} />
           );
         //  console.log(data);
       }
       months = [];
        for(let index=0;index<this.state.monthNames.length;index++){

            months.push(
              <Picker.Item key={index} label={this.state.monthNames[index]} value={this.state.monthNames[index]} />
           );
         //  console.log(data);
       }
       
        return(
            <Container>
            
              <BtnContainer>
                  <BtnTop style={styles.boxShadowUp}></BtnTop>
                  <BtnDown style={styles.boxShadowDown}>
                      <Brcontainer>
                         
                          <Body>
                            <Row style={{flexDirection:'row',padding:20}}>
                                <Icon style={{marginLeft:2,textAlign:'center'}} name="calendar" size={20} color="#3E566B" />
                                <Text style={{fontSize:16,color:'#3E566B'}}> {this.props.title} </Text>
                                <Icon style={{marginLeft:2,textAlign:'center'}} name="calendar" size={20} color="#3E566B" />
                            </Row>
                            <Row style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Picker
                                    selectedValue={this.state.month}
                                    style={styles.selectbox}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({month:itemValue})
                                }>
                                    {months}

                                </Picker>

                                <Picker
                                    selectedValue={this.state.year}
                                    style={styles.selectbox}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({year:itemValue})
                                }>
                                    {years}

                                </Picker>
                             
                            </Row>
                            
                            <Footer>
                                <Row style={{width:'50%',justifyContent:'flex-start'    }}>
                                    <Button height={50} width="90%" backgroundColor="#D5DCE6" fontWeight='normal' color="#E72727" style={{ width:'100px',height:'100px'}} Caption="Cancel" onPress={()=>this.props.onYearMonthClose()}/>
                                    
                                </Row>
                                <Row style={{width:'50%',justifyContent:'flex-end'}}>
                                    
                                    <Button height={50} width="90%" backgroundColor="#D5DCE6" fontWeight='normal' color="#000000" style={{ width:'100px',height:'100px'}} Caption="Ok" onPress={()=>this.props.onOKYearMonthPress(this.state.year+" "+this.state.month)}/>
                                </Row>
                            </Footer>
                          </Body>
                      </Brcontainer>
                  </BtnDown>
              </BtnContainer>
             </Container>
        );
    }
}
//backgroundColor:#D5DCE6;
const Container = styled.View`
  display:flex;
  justifyContent:center;
  width:100%;
  height:100%;
  justifyContent:center;
  alignItems:center;
  position:absolute;
  backgroundColor:rgba(214, 220, 229, 0.8);
  zIndex:1000;
  
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
  backgroundColor:#fff;
  borderRadius:10px;
`
const BtnDown = styled.View`
  display:flex;
  width:99%;
  height:99%;
  position:absolute;
  backgroundColor:#fff;
  borderRadius:10px;
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
  height:90%;
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
flexDirection:row;
width:100%;
`  
const styles = StyleSheet.create({
    box: {
      backgroundColor: 'blue',
      width:400,
        height:400
   },
    boxShadowUp:{
        shadowColor: '#D5DCE6',
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
      width:'45%',

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