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
  width:100%;
  height:80%;
  alignItems:center;
`
const Footer = styled.View`
  display:flex;
  flexDirection: column;
  width:85%;
  height:15%;
  justifyContent:center;
`

const Header = styled.View`
  display:flex;
  flexDirection: row;
  width:85%;
  height:${width/3};
  justifyContent:space-between;
`
const Container= styled.View`
display:flex;
flexDirection: column;
width:100%;
height:70%;
justifyContent:center;
alignItems:center;
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
    const AgentNoImage = styled.Image`
      width:${(width/3)};
      height:${(width/3)};
    `
const Row = styled.View`
  display:flex;
  flexDirection: column;
  width:85%;
  justifyContent:flex-start;
  
`
const LabelNormal = styled.Text`
  color:#767D83;
  paddingTop:10;
`
const Label = styled.Text`
  width:100%;
  color:#7B828A;
  paddingTop:10;
`
const Title = styled.Text`
  width:100%;
  color:#767D83;
  fontWeight:bold;
  paddingTop:10;
  textAlign:center;
`

 
export{
    Body,Footer,Header,HeaderColumn,AgentNo,AgentNoText,AgentNoTextBold,AgentNoImage,
    Container,
    Row ,Label,LabelNormal,
    Title
}