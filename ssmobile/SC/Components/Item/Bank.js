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
const bgColor = [
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

const Item =({ index ,item,onItemClick})=>{
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
                        uri:item.bankImage
                        }}
                    />
                    
                    :
                    <Image  style={styles.Image} source={usrImg} />
                    )}
                    
                </ImageContainer>

                    <Text style={styles.Title}>{item.accountName}</Text>
                    <Text style={styles.Text}>{item.accountNo}</Text>
                    
                </ItemSubContainer>
            </TouchableOpacity>
        </ItemContainer>
    )
}

export const Bank = ({ index,_y,item,itemType }:ItemProps) =>{
   /// console.log('start item y');
   /// console.log(_y);
   /// console.log('end item y');
  const position = Animated.subtract(index * CARD_HEIGHT, _y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      _y,
      _y.interpolate({
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
            
            <Item {...{ index ,item}}/>

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