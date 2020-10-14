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
const Body = styled.View`
  display:flex;
  flexDirection: column;
  justifyContent:space-around;
  width:85%;
  height:95%;
`
const Header = styled.View`
display:flex;
flexDirection: column;
backgroundColor:#D5DCE6;
width:100%;
height:15.5%;

justifyContent:center;
`
  const HeaderRow = styled.View`
    flexDirection: row;
    backgroundColor:#D5DCE6;
    width:100%;
    height:50.5%;
    backgroundColor:#D5DCE6;
    justifyContent:center;
    alignItems:center;
  `
  
const Content = styled.View`
display:flex;
flexDirection: column;
width:100%;
height:40.8%;
justifyContent:space-around;
`
const ContentRowFirst = styled.View`
    flexDirection: column;
    width:100%;
    height:30%;
    justifyContent:space-around;
  `
  const ContentRowSecond = styled.View`
    flexDirection: column;
    width:100%;
    height:30%;
    justifyContent:space-around;
  `
  const ContentRowLast = styled.View`
    flexDirection: row;
    width:100%;
    justifyContent:space-between;
  `
const Footer = styled.View`
display:flex;
flexDirection: column;
width:100%;
height:20.8%;
`



const BtnContainer = styled.View`
  display:flex;
  justifyContent:center;
  width:100%;
  height:60px;
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

 


  justifyContent:flex-end;
  alignItems:center;

  
`
const Brcontainer = styled.View`
  display:flex;
  width:100%;
  height:100%;
  justifyContent:center;
  alignItems:center;

  
`
export{
     Body,Header,Content,Footer,HeaderRow,ContentRowFirst,ContentRowSecond,ContentRowLast,
     BtnContainer,BtnTop,BtnDown,Brcontainer
}