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

const Header = styled.View`
  display:flex;
  flexDirection: row;
  backgroundColor:#D5DCE6;
  width:100%;
  height:40%;
  height:210px;
  justifyContent:space-between;
  
`
const Body = styled.View`
  display:flex;
  flexDirection: column;
  backgroundColor:#D5DCE6;
  width:100%;
  justifyContent:center;
  alignItems:center;
  
`
const Row = styled.View`
  display:flex;
  flexDirection: column;
  backgroundColor:#D5DCE6;
  width:85%;
  justifyContent:flex-start;
  marginTop:10;
  
`
const Label = styled.Text`
  
  color:#7B828A;
  marginTop:30;
  textAlignVertical:center;
`

 
export{
    Container,Header,Body,
    Row ,Label
}