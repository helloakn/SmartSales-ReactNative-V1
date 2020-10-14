import {Image,Dimensions,Picker,Text,TextInput, TouchableOpacity,  StyleSheet,View,Share,Linking} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const isTablet = (aspectRatio>1.6?false:true);

let navigatorHeight = 60;
let containerHeight = Dimensions.get('window').height-navigatorHeight;
let containerWidth = Dimensions.get('window').width;

let headerHeight = 55;
let bodyHeight = containerHeight - headerHeight;
/*
const Container = styled.View`
  display:flex;
  flexDirection: column;
  height: ${containerHeight}px;
  width: ${containerWidth}px;
  backgroundColor:#478EBE;
  alignItems:center;
  backgroundColor:red;
`
const Header = styled.View`
  display:flex;
  flexDirection: column;
  height: ${headerHeight}px;
  width: ${containerWidth}px;
  backgroundColor:#222E39;
  alignItems:center;
`
const Body = styled.View`
  display:flex;
  flexDirection: column;
  height:${ props => (props.isHeader=="yes"?bodyHeight:bodyHeight+headerHeight)}px;
  width: ${containerWidth}px;
  backgroundColor:#478EBE;
  alignItems:center;
`
*/
const Container = styled.View`
  display:flex;
  flexDirection: column;
  height:100%;
  width: 100%;
  backgroundColor:#D5DCE6;
  
  justifyContent:center;
  alignItems:center;
`
export{
    Container
}