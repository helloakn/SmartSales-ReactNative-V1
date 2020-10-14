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

const Header = styled.View`
display:flex;
flexDirection: column;
width:100%;
height:41%;

justifyContent:flex-start;
`
const HeaderNormal = styled.View`
display:flex;
flexDirection: column;
width:100%;
height:50%;
backgroundColor:#F4F4F4;
justifyContent:center;
position:absolute;
`
const HeaderRadius = styled.View`
display:flex;
flexDirection: column;
backgroundColor:#F4F4F4;
width:100%;
height:100%;
borderRadius:50px;

justifyContent:center;
`
  const HeaderTop = styled.View`
  display:flex;
  flexDirection: row;
  width:100%;
  height:60%;
  justifyContent:center;
  `
  //
  //  borderRadius:${(width/3)/2};
    const AgentImage = styled.Image`
      width:${(width/3)};
      height:${(width/3)};
      borderRadius:20px;

    `
  const HeaderTopLeft = styled.View`
  display:flex;
  flexDirection: column;
  width:40%;
  height:100%;
  justifyContent:center;
  alignItems:center;
  `
  const HeaderTopRight = styled.View`
  display:flex;
  flexDirection: column;
  width:60%;
  height:100%;
  justifyContent:center;
  `
  const HeaderBottom = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  height:40%;
  justifyContent:center;
  `
    const HeaderBottomRow = styled.View`
    display:flex;
    flexDirection: row;
    width:100%;
    height:50%;
    justifyContent:center;
    alignItems:flex-end;
    `
const Body = styled.View`
  display:flex;
  flexDirection: column;
  backgroundColor:#D5DCE6;
  width:85%;
  height:59%;
`
const TabContainer = styled.View`
  display:flex;
  flexDirection: column;
  justifyContent:center;
  alignItems:center;
  width:100%;
  height:100%;
`
const TabHeader = styled.View`
  display:flex;
  flexDirection: row;
  width:70%;
  height:7%;
  backgroundColor:#fff;
  justifyContent:space-around;
  alignItems:center;
  borderRadius:5px;
`
  const TabHeaderTitle = styled.View`
    display:flex;
    flexDirection: column;
    backgroundColor:#E5E8ED;
    width:49%;
    height:90%;
    justifyContent:center;
    alignItems:center;
    borderRadius:5px;
  ` 
const TabBody = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  height:85%;
`
const TabBodyScrollView = styled.ScrollView`
  width:100%;
  height:100%;
`
const TabRow = styled.View`
  display:flex;
  flexDirection: row;
  backgroundColor:#E5E8ED;
  width:100%;
  height:70px;
  marginTop:3%;
  borderRadius:16px;
  justifyContent:space-around;
`
const TabRowLeft = styled.View`
  display:flex;
  flexDirection: column;
  width:45%;
  height:100%;
  justifyContent:center;
  alignItems:center;
`
const TabRowRight = styled.View`
  display:flex;
  flexDirection: row;
  width:55%;
  height:100%;
  justifyContent:center;
  alignItems:center;
`

 
export{
  Header,
    HeaderNormal,HeaderRadius,
      HeaderTop,
        HeaderTopLeft,
          AgentImage,
        HeaderTopRight,
      HeaderBottom,
        HeaderBottomRow,
  Body,
    TabContainer,
      TabHeader,
        TabHeaderTitle,
      TabBody,TabBodyScrollView,
        TabRow,
          TabRowLeft,TabRowRight
}