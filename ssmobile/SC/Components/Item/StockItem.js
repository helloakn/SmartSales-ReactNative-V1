import React,{useEffect} from 'react';

import { TouchableOpacity,SafeAreaView,Image,FlatList,StyleSheet,View,Text,Animated,Dimensions } from 'react-native';

import {ItemContainer,
    ImageContainer,
    ItemSubContainer} from './CSS';
/*
ITEM
*/



interface ItemProps {
    x: Animated.Value;
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

const MARGIN = 5;
const DEFAULT_CARD_WIDTH = 100;
const CARD_WIDTH = DEFAULT_CARD_WIDTH + MARGIN * 2;
const { width: wWidth } = Dimensions.get("window");
const width = wWidth - 64;

const usrImg = require("../../../assets/images/user.png");

const Card =({ index ,item,onItemClick})=>{
    //alert(itemType);
    itemClick = item => {
        this.onItemClick(item);
  };
    return (
        <ItemContainer>
            <TouchableOpacity onPress={()=>this.itemClick(item)} style={{width:'100%',height:200,justifyContent:'center'}}>
                <ItemSubContainer
                    bgColor='#A8D18D'
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


export const StockItem = ({ index,x,item }:ItemProps) =>{
    console.log('start item y');
    console.log(x);
    console.log('end item y');
  const position = Animated.subtract(index * CARD_WIDTH, x);
  console.log('ths is position');
  console.log(position);
  console.log('end this is position');
  const isDisappearing = -CARD_WIDTH;
  const isTop = 0;
  const isBottom = width - CARD_WIDTH;
  const isAppearing = width;
  const translateX = Animated.add(
    Animated.add(
      x,
      x.interpolate({
        inputRange: [0, index * CARD_WIDTH],
        outputRange: [0, -index * CARD_WIDTH],
        extrapolateRight: "clamp",
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_WIDTH / 4],
      extrapolate: "clamp",
    })
  );
  console.log('second ths is position');
  console.log(position);
  console.log('end second this is position');
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  console.log(' this is  isDisappearing ');
  console.log(isDisappearing);
  console.log(' end this is isDisappearing');

  console.log(' this is  isTop ');
  console.log(isTop);
  console.log(' end this is isTop');

  console.log(' this is  isBottom ');
  console.log(isBottom);
  console.log(' end this is isBottom');

  console.log(' this is  isAppearing ');
  console.log(isAppearing);
  console.log(' end this is isAppearing');
  console.log(' this is  translateX ');
  console.log(translateX);
  console.log(' end this is translateX');
return (
    <Animated.View
    style={[styles.card]}
      key={index}
    >
        <ItemContainer>
           <Card {...{index,item}} />
        </ItemContainer>
    </Animated.View>
);
} 
/*
END ITEM
*/

const styles = StyleSheet.create({
    card: {
    marginHorizontal: MARGIN,
    alignSelf: "center",
    width:100,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:0
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
    width:DEFAULT_CARD_WIDTH,
    height:100,
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