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
  backgroundColor:blue;
  width:100%;
  height:95%;
  justifyContent:flex-start;
  alignItems:center;
  
`
const Header = styled.View`
  display:flex;
  flexDirection: row;
  backgroundColor:red;
  width:100%;
  height:20%;
`
const Body = styled.View`
  display:flex;
  flexDirection: row;
  backgroundColor:green;
  width:100%;
  height:100%;
`


export{
    Container,
      Header,Body
    
}