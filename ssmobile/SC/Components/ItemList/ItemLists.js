import React from 'react';
import {Text,Image,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
const {height, width} = Dimensions.get('window'); 

const Container = styled.View`
    display:flex;
    flexDirection:column;
    height:${(width/100)*60};
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
        shadowRadius: 10,
        elevation:1
    },
    boxShadowDown:{
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.45,
        shadowRadius: 10
    },
    boxShadowDownHightLight:{
        shadowColor: '#75C7E1',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.45,
        shadowRadius: 10,
        elevation:1
    }
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
export default class ItemLists extends React.Component {

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
                 <TouchableOpacity
                  activeOpacity={.3 } 
                  onPress={()=>{this.props.onItemClick(items[index])}}style={{width:'100%',height:'100%'}}>
                 <BtnTop style={(this.props.selectedItem==items[index].productId?styles.boxShadowUpHightLight:styles.boxShadowUp)}></BtnTop>
                    <BtnDown style={(this.props.selectedItem==items[index].productId?styles.boxShadowDownHightLight:styles.boxShadowDown)}>
                        <Brcontainer>
                        {(items[index].productImage!=''?
                        <Image  style={{ 
                            width: '70%', height: '70%',
                            borderRadius:10 
                            }} 
                            source={{
                            uri:items[index].productImage
                            }}
                        />
                        :
                        <Image  style={styles.image} source={img} />
                        )}
                            <Text style={{color:'#767D87',fontSize:16,fontWeight:'bold'}}>{items[index].productName}</Text>
                        </Brcontainer>
                    </BtnDown>
                    </TouchableOpacity>
                </BtnContainer>
               
            );
          //  console.log(data);
        }
		return (
            <Container>
                
                <ItemList showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{justifyContent:'space-between'}}>
                    {data}
                   
                </ItemList>
            </Container>
            
		);
	}
}

const BtnContainer = styled.View`
  display:flex;
  justifyContent:center;
  width:${(width/100)*50};
  height:${(width/100)*50};
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
  borderRadius:10;
`
const BtnDown = styled.View`
  display:flex;
  width:99%;
  height:90%;
  position:absolute;
  backgroundColor:#D5DCE6;
  borderRadius:10;
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
  