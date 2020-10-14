import React,{useEffect} from 'react';

import { TouchableOpacity,SafeAreaView,Image,FlatList,StyleSheet,View,Text,Animated,Dimensions } from 'react-native';

import {ItemContainer,
    ImageContainer,
    ItemSubContainer} from './CSS';
/*
ITEM
*/



interface ItemProps {
    y: Animated.Value;
    index: number;
    itemType:string
}
interface AgentProps {
    onItemClick:{};
}
interface TemplateProps {
    index: number;
    itemType:string;
}
const bgColors = [
    {color:'#F8CBAC'},
    {color:'#A8D18D'},
    {color:'#68CFCE'}
];

const MARGIN = 16;
const DEFAULT_CARD_HEIGHT = 200;
const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
const { height: wHeight } = Dimensions.get("window");
const height = wHeight - 64;

const usrImg = require("../../../assets/images/user.png");

const Agent =({ index ,item,onItemClick})=>{
    //alert(itemType);
    itemClick = item => {
        this.onItemClick(item);
  };
    return (
        <ItemContainer>
            <TouchableOpacity onPress={()=>this.itemClick(item)} style={{width:'100%',height:200,justifyContent:'center'}}>
                <ItemSubContainer
                    bgColor={bgColor[index%3].color  }
                >   
                <ImageContainer>
                    {(item.image!=''?
                    <Image  style={{ 
                        width: '50%', height: '90%',
                        borderRadius:10 
                        }} 
                        source={{
                        uri:item.image
                        }}
                    />
                    
                    :
                    <Image  style={styles.Image} source={usrImg} />
                    )}
                    
                </ImageContainer>

                    <Text style={styles.Title}>{item.userName}</Text>
                    <Text style={styles.Text}>{item.agentCode}</Text>
                    
                </ItemSubContainer>
            </TouchableOpacity>
        </ItemContainer>
    )
}

const Template = ({ index ,item,onItemClick,itemType}:TemplateProps)=>{
    bgColor = [
    {color:'#F8CBAC'},
    {color:'#A8D18D'},
    {color:'#68CFCE'}
];
    tmpRender = null;
    let img = null;
    let bcolor = null;
   // alert(itemType);
    switch(itemType){
        case 'product':
            img = (item.productImage!=''?
                    <Image  style={{ 
                        width: '50%', height: '90%',
                        borderRadius:10 
                        }} 
                        source={{
                        uri:item.productImage
                        }}
                    />
                    :
                    <Image  style={styles.Image} source={usrImg} />
                );
            bcolor = bgColor[index%3].color;
            return (<ItemSubContainer
                bgColor={bcolor}
            >   
                <ImageContainer>
                    {img}
                    
                </ImageContainer>
                <Text style={styles.Title}>{item.productName}</Text>
                <Text style={styles.Text}>Price : {item.productPrice}</Text>
                <Text style={styles.Text}>Total Qty : {item.totalQuantity}</Text>
            </ItemSubContainer>);
        break;
        case 'agent':
           // this.onItemClick;
            onItemClick = onItemClick;
            return (<Agent {...{ index ,item,onItemClick,itemType}}/>);
            break;
        default:
            break;
    }
    
}
export const Item = ({ index,y,item,itemType }:ItemProps) =>{
    console.log('start item y');
    console.log(y);
    console.log('end item y');
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: "clamp",
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: "clamp",
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
return (
    <Animated.View
      style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
      key={index}
    >
        <ItemContainer>
           <Template {...{index,item,itemType}} />
        </ItemContainer>
    </Animated.View>
);
} 
/*
END ITEM
*/

const styles = StyleSheet.create({
    card: {
    marginVertical: MARGIN,
    alignSelf: "center",
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:0
  },
  container:{
    width:'100%'
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    width:'90%',
    marginVertical: MARGIN,
    height:DEFAULT_CARD_HEIGHT
  },
  title: {
    fontSize: 32,
  },
  Title:{
        fontSize:16,
        fontWeight:'bold',
        color:"#3E566B",
        paddingRight:10,
        paddingTop:10
    },
    Text:{
        fontSize:13,
        color:"#3E566B",
        paddingRight:10,
        paddingTop:10
    },
    Image:{
        paddingBottom:5,
        paddingLeft:5,
        borderRadius:10,
        width:'50%',
        height:'90%'
    }
});