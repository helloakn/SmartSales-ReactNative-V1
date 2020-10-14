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
  width:100%;
  height:${width/3};
  height:20%;
  justifyContent:space-between;
`

const Body = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  height:${height-(width/3)-60};
  height:80%;
  justifyContent:space-around;
`
const HeaderColumn = styled.View`
  display:flex;
  flexDirection: column;
  width:${(width/2.5)};
  height:${(width/3)};
  justifyContent:center;
`
const AgentNo = styled.View`
  display:flex;
  flexDirection: column;
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
const AgentImage = styled.Image`
  width:${(width/3)};
  height:${(width/3)};
  borderRadius:${(width/3)/2};
`
const ImageButton = styled.View`
  width:50px;
  height:50px;
  backgroundColor:#fff;
  backgroundColor:red;
  borderRadius:25px;
  justifyContent:center;
  alignItems:center;
  marginTop:500px;
  position:absolute;
`
const Row = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  justifyContent:space-around;
  
`
const Label = styled.Text`
  width:100%;
  color:#7B828A;
`

 
export{
    Container,Header,HeaderColumn,Body,AgentNo,AgentNoText,AgentNoTextBold,AgentImage,ImageButton,
    Row ,Label
}