import React from 'react';
import { View,StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';
  
import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {
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
} from './Css';

import Loading from '../../../Components/Loading';
import BackButton from '../../../Components/BackButton';

/*
w = 400; h = 200;
w = 800; h=?
200/400 * 500
800/400 * 200
*/
//let sliderHeight = Math.round((width/414)*200);
//import {Body,BodyInner} from './HomeCSS';



export default class AgentPortfolioScreen extends ScreenController {
   
    constructor(props) {
        
        super(props);
        navigation = this.props.navigation;
        navigation.setOptions({
            headerStyle:{
                backgroundColor:'#F4F4F4',
                borderBottomColor:'#F4F4F4',
                borderBottomWidth:0,
                justifyContent:'center'
            },
            headerLeft: () => (
                <BackButton iconName="arrow-back" onPress={()=>{
                    navigation.goBack();
                    }}/>
                ),
            headerRight: () => (
                <BackButton iconName="ellipsis-vertical" onPress={()=>{
                    this.props.navigation.navigate('CreateAgentScreen',{
             Title:"CreateAgentScreen",
             token:this.state.bearerAuth}
             );
                    }}/>
            )
        });
    }
     /*
     <Loading isLoading={this.state.isLoadingProfile || this.state.isLoadingFinished} />
     */
    
	render() {
        const {finishedData,debitData,getData,profileData} = this.state;
        templateDebit = [];
        templateFinished = [];
        console.log('x.x.x.x.x.x.x.x.x.x.x.x.x.xx.  ');
        //<Text>{debitData[index].effective_month}</Text>
        for(let index=0;index<debitData.length;index++){
            templateDebit.push(
                <TabRow key="s">
                    
                    <TabRowLeft>
                        <Text
                            style={{color:'#3E566B',fontSize:16}}
                        >{debitData[index].effective_month}</Text>
                        
                    </TabRowLeft>
                    <TabRowRight>
                        <Text
                            style={{color:'#6D6E74',fontSize:12,marginTop:5}}
                        >MMK </Text>
                        <Text
                            style={{color:'#6D6E74',fontSize:16}}
                        >{this.numberFormat(debitData[index].charge_balance)}</Text>
                    </TabRowRight>
                </TabRow>
            );
        }
        for(let index=0;index<finishedData.length;index++){
            templateFinished.push(
                <TabRow>
                    
                    <TabRowLeft>
                    <Text
                            style={{color:'#3E566B',fontSize:16}}
                        >{finishedData[index].actual_month}</Text>
                    </TabRowLeft>
                    <TabRowRight>
                    <Text
                            style={{color:'#6D6E74',fontSize:12,marginTop:5}}
                        >MMK </Text>
                        <Text
                            style={{color:'#6D6E74',fontSize:16}}
                        >{this.numberFormat(finishedData[index].transaction_amount)}</Text>
                    </TabRowRight>
                </TabRow>
            );
        }
        console.log('finished data');
        console.log(finishedData);
        console.log('end finished data');
        //
                            
		return (
            
            <DefautLayout>
                <Loading isLoading={this.state.isLoadingProfile} />
                <Header>
                    <HeaderNormal></HeaderNormal>
                    <HeaderRadius>
                        <HeaderTop>
                            <HeaderTopLeft>
                                <AgentImage
                                    source={{uri:getData.image}}
                                    resizeMode="stretch"
                                    style={{borderRadius: 20 }}
                                >
                                    
                                </AgentImage>
                            </HeaderTopLeft>
                            <HeaderTopRight>
                                <Text style={{fontSize:20,color:'#777'}}>{getData.userName} </Text>
                                <Text style={{fontSize:16,color:'#AAA',marginTop:10}}>{getData.agentCode}</Text>
                            </HeaderTopRight>
                        </HeaderTop>
                        <HeaderBottom>
                            <HeaderBottomRow>
                                <Text style={{fontSize:20,color:'#AAAAAA',marginBottom:5}}>MMK </Text>
                                <Text style={{fontSize:40,color:'#777777'}}>{this.numberFormat(profileData.bill_amount)}</Text>
                            </HeaderBottomRow>
                            <HeaderBottomRow style={{alignItems:'center'}}>
                                <Text style={{fontSize:20,color:'green'}}>receivable </Text>
                            </HeaderBottomRow>
                        </HeaderBottom>
                    </HeaderRadius>
                </Header>
                <Body>
                    <TabContainer>
                        <TabHeader>
                            <TabHeaderTitle 
                                style={(this.state.activeTab=="debut"?styles.tabHeaderTitleActive:styles.tabHeaderTitle)}
                            >
                                <TouchableOpacity style={styles.tab} 
                                
                                onPress={()=>{this.onTab('debut');}}
                                >
                                    <Text style={(this.state.activeTab=="debut"?styles.tabTitleActive:styles.tabTitle)} >Debut</Text>
                                </TouchableOpacity>  
                            </TabHeaderTitle>
                            <TabHeaderTitle
                                style={(this.state.activeTab!="debut"?styles.tabHeaderTitleActive:styles.tabHeaderTitle)}
                            >
                                <TouchableOpacity style={styles.tab} onPress={()=>{this.onTab('finished');}}>
                                    <Text style={(this.state.activeTab!="debut"?styles.tabTitleActive:styles.tabTitle)}>Finished</Text>
                                </TouchableOpacity>  
                            </TabHeaderTitle>
                        </TabHeader>
                        <TabBody>
                            <TabBodyScrollView>
                            {
                                (this.state.activeTab=="debut"?templateDebit:templateFinished)
                            }
                            </TabBodyScrollView>
                        </TabBody>
                    </TabContainer>
                </Body>
            </DefautLayout>
         
		);
	}
}

const styles = StyleSheet.create({
    tabHeaderTitle:{
        backgroundColor:'#E5E8ED',
    },
    tabHeaderTitleActive:{
        backgroundColor:'#F4F4F4',
    },
    tabTitleActive:{
        color:'#3E566B'
    },
    tabTitle:{
        color:'#929292'
    },
    tab: {
     
      width:'100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center'
    },
    boxShadowUp:{
        shadowColor: '#fff',
        shadowOffset: {width: -5, height: -5},
        shadowOpacity: 1,
        shadowRadius: 10
    },
    boxShadowDown:{
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.45,
        shadowRadius: 10
    },
    textinput: {
        fontSize: 18,
        color: 'black',
        color: '#777E87',
        marginBottom: 30,
        borderBottomColor: 'silver',
        borderBottomWidth: 1
      },
      checkbox: {
        alignSelf: "center",
      }
  });