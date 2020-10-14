import React from 'react';
import {Text,Image,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
const {height, width} = Dimensions.get('window'); 



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      width:'50%',
      height:'50%',
      resizeMode: "stretch",
      justifyContent: "center",
      alignItems: 'center',
      
      backgroundColor:'transparent',
      backgroundColor:'pink'
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    },
    boxShadowUp:{
        shadowColor: '#fff',
        shadowOffset: {width: -5, height: -5},
        shadowOpacity: 1,
        shadowRadius: 10
    },
    boxShadowUpHightLight:{
      shadowColor: '#75C7E1',
        shadowOffset: {width: -5, height: -5},
        shadowOpacity: 1,
        shadowRadius: 10
    },
    boxShadowDown:{
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.45,
        shadowRadius: 10
    },boxShadowDownHightLight:{
        shadowColor: '#75C7E1',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.45,
        shadowRadius: 10
    },
  });
const img = require("../../../assets/images/stockimg.png");
/*const items = [
    {
        key: '1',
        title: "New Skin",
        
    },
    {
        key: '2',
        title: "Old Skin",
    
    },
    {
        key: '3',
        title: "UseFul Skin",
    
    }
];*/

//onItemClick
export default class PaymentAccountTypeList extends React.Component {

	constructor(props){
        super(props);
        this.navigation = this.props.navigation; 
       console.log(this.props.navigation);
    }
    onClick=(x)=>{
        alert("xxx"+x);
    }
	render() {
       // navigation = this.props.navigation;
        data =[];
        items = this.props.data;
        console.log('thsiis itemvlist');
        console.log(items);
        for(let index=0;index<items.length;index++){
            data.push(
              
                 <BtnContainer>
                 <TouchableOpacity onPress={()=>{this.props.onItemClick(items[index])}}style={{width:'100%',height:'100%'}}>
                    <BtnTop style={(this.props.selectedItem==items[index].accountId?styles.boxShadowUpHightLight:styles.boxShadowUp)}></BtnTop>
                    <BtnDown style={(this.props.selectedItem==items[index].accountId?styles.boxShadowDownHightLight:styles.boxShadowDown)}>
                        <Brcontainer>
                        {(items[index].bankImage!=''?
                        <Image  style={{ 
                            width: '70%', height: '70%'
                            }} 
                            source={{
                            uri:items[index].bankImage
                            }}
                        />
                        :
                        <Image  style={styles.image} source={img} />
                        )}
                            <Text >{items[index].accountName}</Text>
                        </Brcontainer>
                    </BtnDown>
                    </TouchableOpacity>
                </BtnContainer>
               
            );
          //  console.log(data);
        }
		return (
            <Container>
                
                <ItemList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal={true} >
                    {data}
                   
                </ItemList>
            </Container>
            
		);
	}
}

const Container = styled.View`
    display:flex;
    flexDirection:column;
    height:${(width/100)*45}px;
    width:100%;
    marginTop:5px;
    justifyContent:center;
    alignItems:center;
`

const ItemList = styled.ScrollView`
    display:flex;
    flexDirection:row;
    height:200px;
    width:100%;
    
    
`

const BtnContainer = styled.View`
  display:flex;
  justifyContent:center;
  width:${(width/100)*30}px;
  height:${(width/100)*30}px;
  marginLeft:20px;
    marginRight:10px;
    marginTop:30px;
`
const BtnTop = styled.View`
  display:flex;
  width:99%;
  height:90%;
  position:absolute;
  backgroundColor:#D5DCE6;
  borderRadius:10px;
`
const BtnDown = styled.View`
  display:flex;
  width:99%;
  height:90%;
  position:absolute;
  backgroundColor:#D5DCE6;
  borderRadius:10px;
  justifyContent:flex-end;
  alignItems:center;
`
const Brcontainer = styled.View`
  display:flex;
  flex:1;
  width:100%;
  height:100%;
  justifyContent:space-around;
  alignItems:center;
  
`
  