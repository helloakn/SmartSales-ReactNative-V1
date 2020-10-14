import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const isTablet = (aspectRatio>1.6?false:true);
/*
a = 10
b = 5
c = 50%

5 x 100 / 10

342 x 100 / 754 =45

*/
const Container = styled.View`
  display:flex;
  flexDirection: column;
  backgroundColor:#D5DCE6;
  width:100%;
  height:95%;
  justifyContent:flex-start;
  alignItems:center;
  
`


const Body = styled.View`
  display:flex;
  flexDirection: column;
  backgroundColor:#D5DCE6;
  width:100%;
  height:60%;
  justifyContent:space-around;
  alignItems:center;
  
`
const Row = styled.View`
  display:flex;
  flexDirection: column;
  backgroundColor:#D5DCE6;
  width:85%;
  height:30%;
  justifyContent:center;
  alignItems:center;
  
`
//alert(width);
buttonWidth = (width/100)*85;
buttonWidth = buttonWidth/3;
//alert(buttonWidth);
const Footer = styled.View`
  display:flex;
  flexDirection: column;
  backgroundColor:#D5DCE6;
  width:85%;
  height:40%;
  justifyContent:space-around;
  marginBottom:10;
  
`
const FooterRow = styled.View`
  flexDirection: row;
  width:100%;
  height:${buttonWidth}px;
  height:30%;
  justifyContent:space-around;
  alignItems:center;
  
`
const Label = styled.Text`
  width:100%;
  color:#7B828A;
  paddingTop:30;
  textAlign:center;
`
const LabelSeries = styled.Text`
  width:100%;
  fontSize:50px;
  color:#7B828A;
  textAlign:center;
  
`
 
export{
    Container,Body,
    Row ,Footer,FooterRow,
    Label,LabelSeries
}