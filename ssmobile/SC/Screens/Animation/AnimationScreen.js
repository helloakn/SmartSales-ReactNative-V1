import React,{useEffect} from 'react';

import { SafeAreaView,FlatList,StyleSheet,View,Text,Animated,Dimensions } from 'react-native';

import DefautLayout from '../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {
    Container,
    Header,Body
} from './Css';

import {Item} from '../../Components/Item/Item';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'two Item',
    },
    {
      id: '3',
      title: 'thir Item',
    },
    {
      id: '4',
      title: 'fourth Item',
    },
    {
      id: '5',
      title: 'fifth Item',
    },
    {
      id: '6',
      title: 'sixth Item',
    },
    {
      id: '7',
      title: 'seventh Item',
    },
  ];


export default class AnimationScreen extends ScreenController {
    //navigation = this.props.navigation;

 

    constructor(props) {
        
        super(props);
        
    }

	render() {
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
      useNativeDriver: true,
    });
		return (
            <DefautLayout>
                <Container>
                    
                    <Body>
                      <SafeAreaView style={styles.container}>
                        <AnimatedFlatList
                          bounces={false}
                          scrollEventThrottle={16}
                          data={DATA}
                          renderItem={({ index, item }) => (
                            <Item {...{ index, y,item }} />
                          )}
                          keyExtractor={(item) => item.id}
                          {...{ onScroll }}
                        />
                    </SafeAreaView>
                    </Body>

                </Container>
            </DefautLayout>
         
		);
	}
}

const styles = StyleSheet.create({
  container:{
    width:'100%'
  },
  
  title: {
    fontSize: 32,
  },
});