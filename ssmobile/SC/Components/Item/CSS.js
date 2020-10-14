import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const isTablet = (aspectRatio>1.6?false:true);


const ItemContainer = styled.View`
  width:90%;
  height:200px;
  justifyContent:center;
  alignItems:center;

  
`
const ImageContainer = styled.View`
  width:100%;
  height:100%;
  justifyContent:flex-end;
  alignItems:flex-start;
  position:absolute;
  paddingLeft:10px;
  paddingBottom:10px;
`
const ItemSubContainer = styled.View`
  borderRadius: 20;
  width:100%;
  height:100%;
  justifyContent:flex-start;
  alignItems:flex-end;
  backgroundColor:${props=>props.bgColor};

  
`
export{
    ItemContainer,
    ImageContainer,
    ItemSubContainer
    
}