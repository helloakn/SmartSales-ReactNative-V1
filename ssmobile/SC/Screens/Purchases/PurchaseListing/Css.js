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
  backgroundColor:#DAE1EB;
  width:90%;
  height:7%;
  justifyContent:space-around;
  alignItems:center;
  borderBottomColor:silver;
  borderBottomWidth:1px;
  
`
const HeaderLeft = styled.View`
  display:flex;
  flexDirection: column;
  justifyContent:center;
  alignItems:center;
  width:10%;
  height:100%;
  
`
const HeaderRight = styled.View`
  display:flex;
  flexDirection: column;
  width:90%;
  height:100%;
  
`


const ListContainer = styled.ScrollView`
width:100%;
height:100%;
`

const ItemContainer = styled.View`
  width:90%;
  height:50px;
  justifyContent:center;
  alignItems:center;

  
`
const ImageContainer = styled.View`
  width:100%;
  height:100%;
  justifyContent:space-around;
  alignItems:center;
  position:absolute;
  paddingLeft:10px;
  paddingBottom:10px;
`
const Item = styled.View`
  borderRadius: 5;
  flexDirection:row;
  width:100%;
  height:90%;
  justifyContent:space-around;
  alignItems:center;
  backgroundColor:${props=>props.bgColor};

  
`
export{
    Container,Header,
    HeaderLeft,HeaderRight,
    ItemContainer,
    ImageContainer,
    Item,
    ListContainer
    
}