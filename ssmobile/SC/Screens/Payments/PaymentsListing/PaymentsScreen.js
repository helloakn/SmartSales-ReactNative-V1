import React,{useEffect} from 'react';

import { Dimensions,Image,View,StyleSheet, Text,TextInput, TouchableOpacity,SafeAreaView,StatusBar } from 'react-native';


import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Container,
    Header,
    HeaderLeft,HeaderRight,
    ItemContainer,ImageContainer,Item,ListContainer} from './Css';

import BackButton from '../../../Components/BackButton';
import Icon from 'react-native-vector-icons/Ionicons';

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
const usrImg = require("../../../../assets/images/user.png");

export default class PaymentsScreen extends ScreenController {
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
                        this.onCreateSale();
                    }}/>
            )
        });
        
        
        this.loadData();
       
    }

	render() {
      
        data = [];
        for(let index=0;index<this.state.data.length;index++){
             data.push(
                <ItemContainer>
                <Item
                    bgColor={bgColor[index%3].color  }
                >   
                <ImageContainer>
                    {(this.state.data[index].agent_image!=''?
                    <Image  style={{ 
                        width: '50%', height: '90%',
                        borderRadius:10 
                        }} 
                        source={{
                        uri:this.state.data[index].agent_image
                        }}
                    />
                    :
                    <Image  style={styles.Image} source={usrImg} />
                    )}
                    
                </ImageContainer>
                    <Text style={styles.Title}>{this.state.data[index].agent_name}</Text>
                    <Text style={styles.Text}>{this.state.data[index].amount}</Text>
                    <Text style={styles.Text}>{this.state.data[index].effective_month}</Text>
                    
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
		return (
            <DefautLayout>
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
                    >
                        {data}
                    </ListContainer>
                </Container>
            </DefautLayout>
         
		);
	}
}