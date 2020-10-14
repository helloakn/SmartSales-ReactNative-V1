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
  width:85%;
  height:95%;
`

const Header = styled.View`
  display:flex;
  flexDirection: row;
  backgroundColor:#D5DCE6;
  width:100%;
  height:${width/3};
  justifyContent:space-between;
`
const Body = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  height:${height-(width/3)-120};
  justifyContent:space-between;
`
const HeaderColumn = styled.View`
  display:flex;
  flexDirection: column;
  backgroundColor:#D5DCE6;
  width:${(width/2.5)};
  height:${(width/3)};
  justifyContent:center;
`
const AgentNo = styled.View`
  display:flex;
  flexDirection: column;
  backgroundColor:#D5DCE6;
  width:${(width/2.5)};
  height:${(width/3)};
  justifyContent:center;
  
`
const AgentNoText = styled.Text`
  width:100%;
  color:#979FAB;
  paddingBottom:5;
`
const AgentNoTextBold = styled.Text`
  width:100%;
  color:#7B828A;
  paddingTop:5;
`
const ProductImage = styled.ImageBackground`
  width:${(width/3)};
  height:${(width/3)};
  borderRadius:${(width/3)/2};
  borderRadius:20px;
  resizeMode:stretch;
  justifyContent:flex-end;
  alignItems:flex-end;
`
const ImageButton = styled.View`
  width:50px;
  height:50px;
  backgroundColor:#fff;
  borderRadius:25px;
  justifyContent:center;
  alignItems:center;
  marginRight:-15px;
`

const Row = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  justifyContent:center;
  
`
const Label = styled.Text`
  width:100%;
  color:#7B828A;
  paddingTop:10;
`

 
export{
    Container,Header,Body,HeaderColumn,AgentNo,AgentNoText,AgentNoTextBold,ProductImage,
    Row ,Label,ImageButton
}