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
  width:100%;
  height:95%;
  justifyContent:flex-start;
  alignItems:center;
  
`

const Body = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  height:90%;
  justifyContent:space-between;
  alignItems:center;
  
`
const Footer = styled.View`
  flexDirection: column;
  width:100%;
  height:10%;
  justifyContent:center;
  alignItems:center;
  
`
const Row = styled.View`
  flexDirection: column;
  width:85%;
  
`
const Label = styled.Text`
  
  color:#3E566B;
  textAlignVertical:center;
`

 
export{
    Container,Body,
    Row ,Label,Footer
}