import React,{useEffect} from 'react';

import {Animated,FlatList,ActivityIndicator, Dimensions,Image,View,StyleSheet, Text,TextInput, TouchableOpacity,SafeAreaView,StatusBar } from 'react-native';
//import Animated from "react-native-reanimated";
import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,
    Header,
    HeaderLeft,HeaderRight,
    ListContainer} from './Css';

import BackButton from '../../../Components/BackButton';
import Icon from 'react-native-vector-icons/Ionicons';

import {Bank} from '../../../Components/Item/Bank';
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
        color:"#9D867A",
        paddingRight:10,
        paddingTop:10
    },
    Text:{
        fontSize:13,
        color:"#9D867A",
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
const usrImg = require("../../../../assets/images/stockimg.png");

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
y =0;
export default class BankAccountsListingScreen extends ScreenController {
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
                    this.onSetup();
                    }}/>
            )
        });
        
        this.focusListener = navigation.addListener('focus', () => {
           // alert('did focus');
            y = new Animated.Value(0);
            this.loadData();
        });
        //this.loadData();
       
    }

	render() {
       
       _y = y;
        //onScroll={({nativeEvent})=>this.onScrollEnd(nativeEvent)}
        
        const onScroll = Animated.event([{ nativeEvent: { 
            contentOffset: { y } 
        } }], 
        { listener: ({nativeEvent}) => {
            //console.log('this is event');
           // console.log(y);
            //console.log(nativeEvent);
            this.onScrollEnd(nativeEvent)
        } },{
        useNativeDriver: true,
        });
        
		return (
            <DefautLayout>
                {
                    this.state.isLoading?
                    <>
                        <ActivityIndicator size="large" color="#7F8084" />
                        <Text style={{color:"#7F8084",marginTop:5}}>Loading....</Text>
                    </>
                    :
                    <Container>
                        <Header>
                            <HeaderLeft>
                                <Icon name="search" size={30} color="#767D87" />
                            </HeaderLeft>
                            <HeaderRight>
                                <TextInput style={{width:'100%',height:'100%'}} 
                                onChangeText={txt => this.onChangeText(txt)}
                                value={this.state.keyword}
                                returnKeyType='search'
                                keyboardType="default"
                                onSubmitEditing={this.searchSubmit}
                                />
                            </HeaderRight>
                        </Header>
                       
                        <AnimatedFlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            style={{width:'100%',height:'100%'}}
                            bounces={false}
                            scrollEventThrottle={16}
                            data={this.state.data}
                            renderItem={({ index, item }) => {
                                let itemType = 'product';
                                
                                return (
                                    <Bank {...{ index, _y,item,itemType }} />
                                )
                            }}
                            keyExtractor={(item) => item.id}
                            {...{ onScroll }}
                        />
                    </Container>
                }
            </DefautLayout>
         
		);
	}
}

/*
onScroll={
                                Animated.event([
                                {
                                nativeEvent: {
                                    contentOffset: {
                                    y
                                    }
                                }
                                }
                            ])
                            }
{...{ onScroll }}
onScroll={({nativeEvent})=>this.onScrollEnd(nativeEvent)}
data = [];
        for(let index=0;index<this.state.data.length;index++){
             data.push(
                <ItemContainer>
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
                    <Text style={styles.Title}>{this.state.data[index].productName}</Text>
                    <Text style={styles.Text}>Price : {this.state.data[index].productPrice}</Text>
                    <Text style={styles.Text}>Total Qty : {this.state.data[index].totalQuantity}</Text>
                </Item>
                        
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
 <ListContainer 
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{alignItems:'center'}}
                            onScroll={({nativeEvent})=>this.onScrollEnd(nativeEvent)}
                        >
                            {data}
                        </ListContainer>
                        */