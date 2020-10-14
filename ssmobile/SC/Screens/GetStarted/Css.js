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
  backgroundColor:#D5DCE6;
  width:90%;
  height:100%;

  backgroundColor:#D5DCE6;
`
const BodyBanner = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  height:45%;
  backgroundColor:#D5DCE6;
  justifyContent:flex-end;
`
const BodyAction = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  height:45%;
  backgroundColor:#D5DCE6;
  justifyContent:flex-start;
`
const BodyBannerRow = styled.View`
  display:flex;
  flexDirection: row;
  
  width:100%;
`

const BodyBannerColumn = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
`

const BtnContainer = styled.View`
  display:flex;
  justifyContent:center;
  width:140px;
  height:140px;
  
`
const BtnTop = styled.View`
  display:flex;
  width:90%;
  height:90%;
  position:absolute;
  left:5%;
  top:5%;
  backgroundColor:#D5DCE6;
  borderRadius:30px;
`
const BtnDown = styled.View`
  display:flex;
  width:90%;
  height:90%;
  position:absolute;
  left:5%;
  top:5%;
  backgroundColor:#D5DCE6;
  borderRadius:30px;

 


  justifyContent:flex-end;
  alignItems:center;

  
`
const Brcontainer = styled.View`
  display:flex;
  width:100%;
  height:60%;
  marginBottom:10%;
  justifyContent:space-around;
  alignItems:center;

  
`


export{
     Body,BodyBanner,BodyAction,BodyBannerRow,BodyBannerColumn,
     BtnContainer,BtnTop,BtnDown,Brcontainer
}