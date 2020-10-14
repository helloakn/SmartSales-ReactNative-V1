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
  width:85%;
  height:80%;
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
  backgroundColor:#D5DCE6;
  width:100%;
  height:${width/3};
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
const AgentNoImage = styled.Image`
  width:${(width/3)};
  height:${(width/3)};
`
const Row = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  justifyContent:center;
  
`
const RowColumn = styled.View`
display:flex;
flexDirection: row;
width:100%;
justifyContent:flex-start;

`
const RowCustom = styled.View`
display:flex;
flexDirection: row;
width:100%;
height:100px;
justifyContent:flex-end;

`

const Table = styled.View`
display:flex;
flexDirection: column;
width:100%;
`
const TableScroll = styled.ScrollView`
display:flex;
flexDirection: column;
width:100%;
`

const TableRowHeader = styled.View`
display:flex;
flexDirection: row;
width:100%;
`
const TableRow = styled.View`
display:flex;
flexDirection: row;
backgroundColor:#D5DCE6;
width:100%;
paddingTop:8px;
`

const TableColumn = styled.View`
display:flex;
flexDirection: row;
`
const PromotionTable = styled.View`
display:flex;
flexDirection: column;
backgroundColor:#fff;
width:100%;
borderRadius:20;
borderWidth: 1;
borderColor: #fff;
justifyContent:space-around;
alignItems:center;
`
const PromotionTableRow = styled.View`
display:flex;
flexDirection: row;
width:100%;
justifyContent:space-around;
padding:2px;
`
const PromotionTableColumn = styled.View`
display:flex;
flexDirection: row;
`

const AmountLeft = styled.View`
width:80%;
`
const AmountRight = styled.View`
width:20%;
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
    Row,RowColumn,RowCustom ,Label,LabelNormal,Table,TableScroll,TableRowHeader,TableRow,TableColumn,
    AmountLeft,AmountRight,
    PromotionTable,PromotionTableRow,PromotionTableColumn,
    Title
}