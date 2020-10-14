import React,{useEffect} from 'react';

import { Dimensions,Image,View,StyleSheet, Text,TextInput, TouchableOpacity,SafeAreaView,StatusBar } from 'react-native';

import Svg, {
    Rect,G,Line,Path,Defs ,Filter,FeFlood,FeGaussianBlur,FeColorMatrix,FeOffset,FeBlend
  } from 'react-native-svg';
  
import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,
    Header,
    HeaderLeft,HeaderRight,
    ItemContainer,ImageContainer,Item,ListContainer} from './Css';

import BackButton from '../../../Components/BackButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../../../Components/Loading';

/*
w = 400; h = 200;
w = 800; h=?
200/400 * 500
800/400 * 200
*/
//let sliderHeight = Math.round((width/414)*200);
//import {Body,BodyInner} from './HomeCSS';

const bgColor = [
    {color:'#F8CBAC'},
    {color:'#A8D18D'},
    {color:'#68CFCE'}
];
const DATA = [
    {
      id: '1',
      title: 'First Item',
    }
  ];
  const styles = StyleSheet.create({
    Title:{
        fontSize:16,
        fontWeight:'bold',
        color:"#7F8084",
        paddingRight:10,
        paddingTop:10
    },
    Text:{
        fontSize:13,
        color:"#7F8084",
        paddingRight:10,
        paddingTop:10
    },
    TextTitle:{
        fontSize:13,
        color:"#7F8084",
        paddingRight:10,
        fontWeight:'bold',
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
const usrImg = require("../../../../assets/images/user.png");

export default class PromotionsListingScreen extends ScreenController {
    //navigation = this.props.navigation;

 

    constructor(props) {
        
        super(props);
        navigation = this.props.navigation;
        navigation.setOptions({
            headerTitleStyle:{
                alignSelf:'center',
                fontSize:14
            },
            headerLeft: () => (
                <BackButton iconName="arrow-back" onPress={()=>{
                    navigation.goBack();
                    }}/>
                ),
            headerRight: () => (
                <BackButton iconName="add-outline" onPress={()=>{
                    this.props.navigation.navigate('CreatePromotion1Screen',{
             Title:"CreatePromotion1Screen",
             token:this.state.bearerAuth}
             );
                    }}/>
            )
        });  
    }

	render() {
      
        data = [];
        for(let index=0;index<this.state.data.length;index++){
             data.push(
                 
                    <ItemContainer>
                    <TouchableOpacity onPress={()=>this.onItemPress(this.state.data[index])} style={{width:'100%',height:200}}>
                    <Item
                        bgColor={bgColor[index%3].color  }
                    >   
                    <ImageContainer>
                        {(this.state.data[index].productImage!=''?
                        <Image  style={{ 
                            width: '50%', height: '90%',
                            borderRadius:10 
                            }} 
                            source={{
                            uri:this.state.data[index].productImage
                            }}
                        />
                        
                        :
                        <Image  style={styles.Image} source={usrImg} />
                        )}
                        
                    </ImageContainer>

                        <Text style={styles.Title}>{this.state.data[index].promotionRuleCode}</Text>
                        <Text style={styles.Text}>Date : {this.state.data[index].startDate}</Text>
                        <Text style={styles.TextTitle}>{this.state.data[index].productName}</Text>
                        <Text style={styles.Text}>Qty : {this.state.data[index].productQty}</Text>
                        <Text style={styles.TextTitle}>{this.state.data[index].promotionProductName}</Text>
                        <Text style={styles.Text}>Qty : {this.state.data[index].promotionProductQty}</Text>
                        
                    </Item>
                    </TouchableOpacity> 
                    </ItemContainer>
                
             );
           //  console.log(data);
         }
         if(data.length==0){
            data.push(
                <ItemContainer>
                    <Text>There is no record for {this.state.keyword}.</Text>
                </ItemContainer>
                    );
         }
		return (
            <DefautLayout>
            <Loading isLoading={this.state.isLoading} />
                <Container>
                    <Header>
                        <HeaderLeft>
                            <Icon name="search" size={30} color="#767D87" />
                        </HeaderLeft>
                        <HeaderRight>
                            <TextInput style={{width:'100%',height:'100%'}} 
                            onChangeText={text => this.onChangeText(text)}
                            value={this.state.keyword}
                            />
                        </HeaderRight>
                    </Header>
                    <ListContainer 
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{alignItems:'center'}}
                        onScroll={({nativeEvent})=>this.onScrollEnd(nativeEvent)}
                        style={{marginTop:10}}
                    >
                        {data}
                    </ListContainer>
                </Container>
            </DefautLayout>
         
		);
	}
}